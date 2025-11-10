import fs from "fs";

// 1️⃣ Vérifie que le dossier 'out' existe (créé automatiquement par next build)
if (!fs.existsSync("out")) {
  console.error("❌ Le dossier 'out' n'existe pas. Lancez d'abord 'npm run build'.");
  process.exit(1);
}

// 2️⃣ Crée le fichier .nojekyll (désactive GitHub Jekyll)
fs.writeFileSync("out/.nojekyll", "");

// 3️⃣ Copie index.html → 404.html (pour gérer les routes SPA)
if (fs.existsSync("out/index.html")) {
  fs.copyFileSync("out/index.html", "out/404.html");
  console.log("✅ 404.html créé avec succès !");
} else {
  console.warn("⚠️ Fichier index.html introuvable dans /out");
}

console.log("✨ Préparation terminée — prêt pour le déploiement !");
