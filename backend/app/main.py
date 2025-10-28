from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="MedInfo Assist API")

# Autoriser les requêtes du frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "MedInfo Assist API is running 🚀"}

@app.post("/analyze")
def analyze_text(data: dict):
    text = data.get("text", "")
    if not text:
        return {"error": "Aucun texte fourni"}
    # Pour l'instant, réponse simulée
    return {
        "original": text,
        "explanation": "Analyse IA à venir : vulgarisation médicale en préparation 💡"
    }
