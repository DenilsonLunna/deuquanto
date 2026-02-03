import { useNavigate } from "react-router-dom"
import Button from "../components/Button.jsx"
import Footer from "../components/Footer.jsx"
import AdSense from "../components/AdSense.jsx"
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
        ❓Como Funciona
        </Button>
        <Button variant="primary" onClick={() => navigate("/doacao")}>
        💰 Apoie o App
        </Button>
        </div>
        
        <Footer />
         <AdSense 
        slot="1234567890" 
        style={{ 
            width: "100%", 
            height: "90px", 
            marginTop: "10px", 
            marginBottom: "10px" ,
            backgroundColor: "#ff0",
        }} 
        />
    </div>

    

)
}