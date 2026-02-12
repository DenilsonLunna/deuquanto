import { useNavigate } from "react-router-dom"
import Button from "../components/Button.jsx";
export default function Contato() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <h1>Contato</h1>

      <p style={{ marginTop: "10px" }}>
        Tem alguma dúvida, sugestão ou encontrou algum problema no app?
      </p>

      <p style={{ marginTop: "15px" }}>
        Entre em contato:
      </p>

      <div className="card" style={{ marginTop: "20px" }}>
        <p><strong>Email:</strong></p>
        <a href="denilsonsousa7@outlook.com">
          denilsonsousa7@outlook.com
        </a>
      </div>

      <div className="card" style={{ marginTop: "15px" }}>
        <p><strong>Instagram:</strong></p>
        <a href="https://www.instagram.com/denii_arts/" target="_blank">
          @denii_arts
        </a>
      </div>

       <div className="card" style={{ marginTop: "15px" }}>
        <p><strong>Sugestão:</strong></p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScehVdtEeruiRpP1MIqhzyvCcF19LBS1SgSnoI6BBYLVru3cw/viewform?usp=publish-editor" target="_blank">
          Deixe sua sugestão aqui (link para Formulario Google)
        </a>
      </div>
      <Button onClick={() => navigate("/")} >Voltar</Button>
     
    </div>
  )
}

