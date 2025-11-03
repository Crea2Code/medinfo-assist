from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
from groq import Groq

# Charger les variables d'environnement
load_dotenv()

# Initialiser le client Groq
groq_client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# Configuration FastAPI
app = FastAPI(title="MedInfo Assist - API IA médicale", version="3.0")

# CORS (connexion avec le frontend Next.js)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # pour test, tu pourras restreindre à ton domaine plus tard
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Schéma d'entrée
class TextRequest(BaseModel):
    text: str

# Endpoint principal d'analyse médicale
@app.post("/analyze")
async def analyze_text(request: TextRequest):
    text = request.text.strip()
    if not text:
        return {"error": "Le texte est vide."}

    try:
        # Prompt IA
        prompt = (
            f"Explique simplement ce texte médical pour qu'un patient non spécialiste puisse le comprendre :\n{text}"
        )

        # Appel à l’API Groq avec le nouveau modèle
        response = groq_client.chat.completions.create(
            model="llama-3.1-8b-instant",  # ✅ modèle à jour
            messages=[
                {"role": "system", "content": "Tu es un assistant médical qui vulgarise les textes médicaux."},
                {"role": "user", "content": prompt},
            ],
        )

        simplified = response.choices[0].message.content.strip()

        return {
            "original_text": text,
            "simplified_text": simplified,
            "model_used": "llama-3.1-8b-instant (Groq)"
        }

    except Exception as e:
        return {"error": f"Erreur Groq : {str(e)}"}

# Route de test
@app.get("/")
async def root():
    return {"message": "Bienvenue sur MedInfo Assist API (Groq ✅ nouvelle version)"}
