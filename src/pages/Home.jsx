import { useNavigate } from "react-router-dom"
import Button from "../components/Button.jsx"

export default function Home() {
const navigate = useNavigate()


return (

    <div className="App">
        <div className="container center">
        <img src="/images/logo.png" alt="Deu Quanto" className="logo" />
        <Button onClick={() => navigate("/dados")}>
        + Novo Jogo
        </Button>
        <Button variant="primary" onClick={() => navigate("/como-funciona")}>
        ❓ Como Funciona
        </Button>

        </div>
    </div>

)
}