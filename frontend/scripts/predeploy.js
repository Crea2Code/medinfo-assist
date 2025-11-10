import fs from "fs";
import { execSync } from "child_process";

// 1️⃣ Génère le dossier "out"
console.log("📦 Export statique...");
execSync("npx next export", { stdio: "inherit" });

// 2️⃣ Crée .nojekyll
if (!fs.existsSync("out")) fs.mkdirSync("out");
fs.writeFileSync("out/.nojekyll", "");

// 3️⃣ Copie index.html → 404.html
if (fs.existsSync("out/index.html")) {
  fs.copyFileSync("out/index.html", "out/404.html");
  console.log("✅ 404.html créé avec succès !");
}

console.log("✨ Préparation terminée !");
