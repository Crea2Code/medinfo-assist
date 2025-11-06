// frontend/app/api/advice.ts
export async function getHealthAdvice(question: string) {
  try {
    const response = await fetch("http://127.0.0.1:8000/advice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) throw new Error("Erreur réseau");
    return await response.json();
  } catch (error) {
    console.error("Erreur API :", error);
    return { error: "Impossible d’obtenir un conseil pour le moment." };
  }
}
