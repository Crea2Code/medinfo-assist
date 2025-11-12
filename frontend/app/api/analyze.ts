// frontend/app/api/analyze.ts
const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ??
  (process.env.NODE_ENV === "production"
    ? "https://medinfo-assist-backend.onrender.com"
    : "http://127.0.0.1:8000");

export async function analyzeMedicalText(text: string) {
  try {
    const res = await fetch(`${API_BASE}/analyze`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.error("Erreur lors de la requête backend:", e);
    return { error: "Impossible d’analyser le texte pour le moment." };
  }
}
