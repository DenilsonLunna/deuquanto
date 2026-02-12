import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
export default function SupportPopup({ onClose }) {
  const navigate = useNavigate()

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>💙 Apoie o Projeto</h2>

        <p style={{ marginTop: "10px" }}>
          Se esse app te ajudou a dividir a conta de forma justa,
          considere apoiar o projeto ❤️
        </p>

        <div >
          <Button
            className="primary"
            onClick={() => navigate("/doacao")}
          >
            Apoiar Projeto
          </Button>

          <button
            onClick={onClose}
            className="secondary"
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              background: "#ccc",
              marginTop:"20px"
            }}
          >
            ir para resultado
          </button>
        </div>
      </div>
    </div>
  )
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999
}

const modalStyle = {
  background: "#fff",
  padding: "30px",
  borderRadius: "20px",
  width: "90%",
  maxWidth: "400px",
  textAlign: "center"
}