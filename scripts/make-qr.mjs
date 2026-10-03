// Generates the Story Box QR code (SVG + 1200px PNG), error correction H.
// Usage: node scripts/make-qr.mjs
import { mkdir, writeFile } from "node:fs/promises";
import QRCode from "qrcode";

const URL_TO_ENCODE = "https://www.thereadingelf.in/story-box?src=qr";
const options = { errorCorrectionLevel: "H", margin: 2 };

await mkdir("public", { recursive: true });

await writeFile(
  "public/story-box-qr.svg",
  await QRCode.toString(URL_TO_ENCODE, { ...options, type: "svg" }),
);

await QRCode.toFile("public/story-box-qr.png", URL_TO_ENCODE, {
  ...options,
  type: "png",
  width: 1200,
});

console.log("Wrote public/story-box-qr.svg and public/story-box-qr.png");
