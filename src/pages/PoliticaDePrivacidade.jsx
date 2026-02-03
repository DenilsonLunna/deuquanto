import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import AdSense from "../components/AdSense.jsx";
const PoliticaDePrivacidade = () => {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px", display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1>Política de Privacidade</h1>

      <p>
        A sua privacidade é importante para nós. É política deste site respeitar
        a sua privacidade em relação a qualquer informação sua que possamos
        coletar.
      </p>

      <h2>Coleta de informações</h2>
      <p>
        Coletamos informações pessoais apenas quando realmente precisamos delas
        para lhe fornecer um serviço. Fazemos isso por meios justos e legais,
        com o seu conhecimento e consentimento.
      </p>

      <h2>Uso de Cookies e Anúncios</h2>
      <p>
        Utilizamos cookies para melhorar sua experiência. O Google, como
        fornecedor terceirizado, usa cookies para exibir anúncios.
      </p>
      <p>
        O uso do cookie DART permite que o Google exiba anúncios aos usuários
        com base em visitas anteriores a este e a outros sites na internet.
      </p>
      <p>
        Os usuários podem desativar o cookie DART visitando a Política de
        Privacidade da rede de anúncios do Google.
      </p>

      <h2>Compromisso do Usuário</h2>
      <p>
        O usuário se compromete a fazer uso adequado dos conteúdos e da
        informação que o site oferece.
      </p>

      <h2>Mais informações</h2>
      <p>
        Se você tiver alguma dúvida sobre como lidamos com dados do usuário,
        entre em contato conosco.
      </p>

      <p style={{ marginTop: "40px", fontSize: "14px", color: "#666" }}>
        Esta política é efetiva a partir de Janeiro/2026.
      </p>

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
            backgroundColor: "#ff0",
        }} 
        />
    </div>
  );
};

export default PoliticaDePrivacidade;