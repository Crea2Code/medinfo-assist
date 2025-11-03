// frontend/app/api/analyze.ts

export async function analyzeMedicalText(text: string) {
  try {
    const response = await fetch("http://127.0.0.1:8000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`Erreur API: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la requête backend:", error);
    return { error: "Impossible d’analyser le texte pour le moment." };
  }
}
