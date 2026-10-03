// Google Apps Script web app that logs Story Box quiz registrations + results
// to Google Sheets. Override per environment with VITE_APPS_SCRIPT_URL.
export const APPS_SCRIPT_URL =
  import.meta.env.VITE_APPS_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbyjSHLeaCzUjd3x50i3KU9evYjJOQDP-CT8tbh9wpPcR7RM3A6F-OssFeILJAS1fBPu/exec";
