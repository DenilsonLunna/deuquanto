import { useState } from "react";

const ChavePix = () => {
  const pixKey = "a912d7f0-7752-4a89-9658-f67345373722";
  const [copiado, setCopiado] = useState(false);

  const copiarPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      alert("Não foi possível copiar a chave PIX: " + err.message);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "8px",
        background: "#fafafa",
        alignItems:"center", 
        display:"flex",
        flexDirection:"column", 
      }}
    >
      <h3>💸 Doação via PIX</h3>

      <p>
        <strong>Chave PIX:</strong>
      </p>

      <p
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          wordBreak: "break-all",
        }}
      >
        {pixKey}
      </p>

      <button
        onClick={copiarPix}
        style={{
          marginTop: "10px",
          padding: "10px 16px",
          fontSize: "14px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "1px solid #ccc",
          background: copiado ? "#d1fae5" : "#fff",
        }}
      >
        {copiado ? "✅ Chave copiada!" : "📋 Copiar chave PIX"}
      </button>

      <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
        {copiado
          ? "Agora é só colar no app do seu banco 😊"
          : "Clique para copiar a chave"}
      </p>
    </div>
  );
};

export default ChavePix;