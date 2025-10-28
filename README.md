# 🧠 MedInfo Assist

> *L’IA qui traduit le langage médical en mots simples.*

---

## 📘 À propos

**MedInfo Assist** est une mini-application d’intelligence artificielle développée par **Sonia Chalal (Crea2Code)**.  
Son objectif : rendre les informations médicales **plus compréhensibles** et **accessibles à tous** — patients, étudiants, et professionnels de santé.

L’application utilise **FastAPI** pour le backend et **Next.js + Tailwind CSS** pour le frontend.

---

## ⚙️ Stack technique

| Partie | Technologie |
|---------|--------------|
| Frontend | Next.js 14 / React / Tailwind CSS |
| Backend | FastAPI (Python 3.12) |
| IA | OpenAI API (à venir) |
| Déploiement | GitHub Pages (frontend) + Render / Railway (backend) |

---

## 🏗️ Structure du projet

medinfo-assist/
│
├── backend/
│ ├── app/
│ │ └── main.py
│ ├── requirements.txt
│ └── Dockerfile (à venir)
│
├── frontend/
│ ├── app/
│ │ ├── page.tsx
│ │ └── globals.css
│ ├── package.json
│ ├── tailwind.config.js
│ └── postcss.config.js
│
└── README.md

yaml
Copier le code

---

## 🚀 Lancer le projet localement

### 🧩 Backend
```bash
cd backend
venv\Scripts\activate        # sous Windows
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
➡️ API accessible sur : http://127.0.0.1:8000

💻 Frontend
bash
Copier le code
cd frontend
npm install
npm run dev
➡️ Interface disponible sur : http://localhost:3000

🧠 Fonctionnalités prévues
Analyse et vulgarisation de textes médicaux 🩺

Résumé simplifié des comptes rendus 🔍

Liens vers sources fiables (HAS, OMS, Vidal) 📚

Interface claire et responsive 📱

⚖️ Disclaimer
MedInfo Assist n’est pas un dispositif médical.
Les informations générées sont fournies à titre informatif et éducatif uniquement.
Pour toute décision de santé, consultez toujours un professionnel qualifié.

👩‍💻 Auteur
Sonia Chalal
Développeuse Full Stack – Crea2Code
🌐 crea2code.fr
📧 contact@crea2code.fr
📍 Normandie, France

