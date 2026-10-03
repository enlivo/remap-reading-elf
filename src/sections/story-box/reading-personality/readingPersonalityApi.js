import { APPS_SCRIPT_URL } from "../../../config.js";

const SESSION_KEY = "rp-session";
const PENDING_KEY = "rp-pending";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^(\+91)?[6-9]\d{9}$/;

function readJson(key, fallback) {
  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable (private mode etc.) — quiz still works */
  }
}

export function normalizePhone(value) {
  return value.replace(/[\s-]/g, "");
}

export function validateRegistration({ name, email, phone, consent }) {
  const errors = {};

  if (name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }

  if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!PHONE_PATTERN.test(normalizePhone(phone))) {
    errors.phone = "Please enter a valid Indian mobile number.";
  }

  if (!consent) {
    errors.consent = "Please tick the box to continue.";
  }

  return errors;
}

export function getSession() {
  const session = readJson(SESSION_KEY, null);
  return session?.sessionId ? session : null;
}

export function saveSession(session) {
  writeJson(SESSION_KEY, session);
}

export function getSource() {
  return new URLSearchParams(window.location.search).get("src") === "qr"
    ? "qr"
    : "web";
}

function getPending() {
  return readJson(PENDING_KEY, []);
}

function queuePayload(payload) {
  writeJson(PENDING_KEY, [...getPending(), payload]);
}

// Resolves true on success. "no-cors" keeps the request a plain simple POST
// (Apps Script answers with a redirect and no CORS headers); the promise only
// rejects on a real network failure, which is exactly what we need to detect.
async function send(payload) {
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    return true;
  } catch {
    return false;
  }
}

// Resend anything that failed earlier, oldest first.
async function flushPending() {
  const pending = getPending();

  if (pending.length === 0) {
    return;
  }

  writeJson(PENDING_KEY, []);

  const stillFailing = [];

  for (const payload of pending) {
    if (stillFailing.length > 0 || !(await send(payload))) {
      stillFailing.push(payload);
    }
  }

  if (stillFailing.length > 0) {
    writeJson(PENDING_KEY, [...stillFailing, ...getPending()]);
  }
}

// Returns true if the request went out; false means it was queued for retry.
export async function postRegistration(payload) {
  const ok = await send(payload);

  if (!ok) {
    queuePayload(payload);
  }

  return ok;
}

// Never throws and is never awaited by the UI, so the result screen always shows.
export async function postResult({ sessionId, answers, result }) {
  try {
    await flushPending();

    const payload = { type: "result", sessionId, answers, result };

    if (!(await send(payload))) {
      queuePayload(payload);
    }
  } catch {
    /* swallow — logging must never break the quiz */
  }
}
