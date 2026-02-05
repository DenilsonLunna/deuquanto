import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import Footer from "../components/ChavePix.jsx";
import ChavePix from "../components/ChavePix.jsx";
import AdSense from "../components/AdSense.jsx";
const Doacao = () => {
  const navigate = useNavigate();
  return (

    <div style={{
        alignItems:"center", 
        display:"flex",
        flexDirection:"column", 

    }}>
            <div 
    style={{ 
        maxWidth: "800px", 
        margin: "40px auto", 
        padding: "0 20px", 

    }}>
      <h1>💛 Apoie este App</h1>

      <p>
        Este aplicativo foi criado com o objetivo de oferecer uma solução
        simples, prática e gratuita para todos os usuários.
      </p>

      <p>
        A manutenção, melhorias e novos recursos exigem tempo, dedicação e
        custos com infraestrutura, domínio e ferramentas de desenvolvimento.
      </p>

      <h2>Por que doar?</h2>
      <ul>
        <li>✔️ Manter o app gratuito</li>
        <li>✔️ Melhorar funcionalidades existentes</li>
        <li>✔️ Criar novos recursos</li>
        <li>✔️ Garantir a continuidade do projeto</li>
      </ul>

      <h2>Como você pode ajudar</h2>
      <p>
        Se este aplicativo é útil para você e deseja contribuir com qualquer
        valor, sua doação será muito bem-vinda ❤️
      </p>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          background: "#fafafa",
          width: "100%",
        }}
      >

        <p
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            wordBreak: "break-all",
          }}
        >
           
          
        </p>
             <ChavePix />
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
          Qualquer valor faz diferença 🙏
        </p>
      </div>

      {/* Caso queira PayPal no futuro */}
      {/*
      <div style={{ marginTop: "20px" }}>
        <h3>🌍 Doação via PayPal</h3>
        <a href="https://www.paypal.me/seulink" target="_blank" rel="noreferrer">
          Doar com PayPal
        </a>
      </div>
      */}

      <p style={{ marginTop: "40px", fontSize: "14px", color: "#666", alignSelf:"center"}}>
        Doações são totalmente voluntárias e não afetam o uso do aplicativo.
      </p>
    </div>
      <Button onClick={() => navigate(-1)}>
          voltar
        </Button>
         <AdSense 
        slot="1234567890" 
        style={{ 
            width: "100%", 
            height: "90px", 
            marginTop: "10px", 
            marginBottom: "10px" ,
        }} 
        />
    </div>
    
  );
};

export default Doacao;