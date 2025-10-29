


<p align="center">
  <img src="./frontend/public/banner-medinfo-crea2code.png" alt="MedInfo Assist banner" width="100%" />
</p>

<h1 align="center">

<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-circuit w-16 h-16 text-blue-600 mb-4" aria-hidden="true"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>  
MedInfo Assist
</h1>

<p align="center">
  <b>L’IA qui simplifie le langage médical pour tous</b><br/>
  Une application conçue par <a href="https://crea2code.fr" target="_blank">Sonia Chalal</a> pour le <b>Forum Santé pour Tous 2025</b> à Caen.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.0.0-black?logo=nextdotjs" alt="Next.js" />
  <img src="https://img.shields.io/badge/FastAPI-Backend-success?logo=fastapi" alt="FastAPI" />
  <img src="https://img.shields.io/badge/TailwindCSS-Design-38B2AC?logo=tailwindcss" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Python-3.11-blue?logo=python" alt="Python" />
  <img src="https://img.shields.io/badge/TypeScript-Frontend-3178C6?logo=typescript" alt="TypeScript" />
</p>

---

## 📋 Sommaire

- [🌟 Présentation](#-présentation)
- [🎨 Aperçu du design](#-aperçu-du-design)
- [🧩 Stack technique](#-stack-technique)
- [🚀 Installation et exécution](#-installation-et-exécution)
- [🧠 Fonctionnalités principales](#-fonctionnalités-principales)
- [🖋️ Auteur](#️-auteur)
- [⚖️ Licence](#-licence)

---

## 🌟 Présentation

**MedInfo Assist** est une mini-application IA qui aide à **comprendre les textes médicaux complexes**.  
Elle analyse les termes techniques pour les reformuler dans un langage clair, accessible à tous.  

🩺 *Pensée pour les patients, étudiants et professionnels de santé.*

> Projet présenté lors du **Forum Santé pour Tous 2025 – “IA et données de santé au service de l’innovation”** à Caen.

---

## 🎨 Aperçu du design

Interface claire, moderne et rassurante — inspirée de l’identité **Doctolib**.  
Le logo **BrainCircuit 🧠** symbolise l’union entre la technologie et la santé.

<p align="center">
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</p>

---

## 🧩 Stack technique

| Domaine        | Outil / Framework            | Rôle                                      |
|----------------|------------------------------|-------------------------------------------|
| **Frontend**   | Next.js 16 + TypeScript       | Interface utilisateur rapide et réactive  |
| **Design**     | TailwindCSS                  | Mise en page fluide et responsive         |
| **Backend**    | FastAPI (Python)             | API REST d’analyse du texte médical       |
| **IA / NLP**   | OpenAI API *(en développement)* | Interprétation et vulgarisation médicale |
| **Versioning** | Git + GitHub                 | Gestion du code et collaboration          |

---

## 🚀 Installation et exécution

### ⚙️ Backend – FastAPI

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
````

📡 Serveur : [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

### 💻 Frontend – Next.js

```bash
cd frontend
npm install
npm run dev
```

🌐 Application : [http://localhost:3000](http://localhost:3000)

---

## 🧠 Fonctionnalités principales

* 🔍 Analyse sémantique de textes médicaux
* 💬 Explications vulgarisées des termes complexes
* 🧩 Interface claire, responsive et fluide
* ⚙️ Communication directe entre Frontend et API FastAPI
* 🌙 Design épuré, inspiré des plateformes médicales pro

---

## 🖋️ Auteur

👩‍💻 **Sonia Chalal**
Développeuse Full Stack & Fondatrice de [Crea2Code.fr](https://crea2code.fr)
📍 Rouen • France
💬 Passionnée par la pédagogie numérique et les applications IA utiles à la société.

> *“Le numérique au service de l’humain.”*

---

## ⚖️ Licence

Ce projet est distribué sous licence **MIT**.
© 2025 – **Crea2Code | Sonia Chalal**

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0-blue?style=for-the-badge" />
</p>