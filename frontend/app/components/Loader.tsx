// frontend/app/components/Loader.tsx
export default function Loader() {
  return (
    <div className="flex items-center justify-center space-x-2 mt-6">
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
      <span className="text-gray-600 text-sm ml-3">Analyse en cours...</span>
    </div>
  );
}
