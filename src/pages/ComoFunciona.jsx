import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";


const ComoFunciona = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={{...styles.title, fontSize: "40px"}}>Como funciona?</h1>

        <img src="/images/logo.png" alt="Deu Quanto" className="logo" />

        <p style={styles.text}>
          No aplicativo <span style={styles.highlight}>Deu quanto?</span>, os jogadores são
          organizados em grupos de acordo com o tempo que jogaram.
        </p>

        <ul style={styles.list}>
          <li>
            Um grupo é formado pelos jogadores que <strong>saíram antes</strong> do término do jogo.
          </li>
          <li>
            O outro grupo é formado pelos jogadores que <strong>permaneceram até o final</strong>.
          </li>
        </ul>

        <p style={styles.text}>
          <strong>Cada grupo representa pessoas que jogaram o mesmo tempo.</strong>
        </p>

        <p style={styles.text}>
          Com base nesses grupos, o aplicativo calcula:
        </p>

        <ul style={styles.list}>
          <li>O tempo total jogado por todos</li>
          <li>O valor do minuto de jogo</li>
          <li>Quanto cada jogador deve pagar</li>
        </ul>

        <p style={styles.text}>
          Dessa forma:
        </p>

        <ul style={styles.list}>
          <li>Quem jogou menos paga menos</li>
          <li>Quem jogou mais tempo paga mais</li>
          <li>O valor final fica justo para todos</li>
        </ul>

        <Button style={styles.button} onClick={() => navigate(-1)}>
          voltar
        </Button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
  },

  card: {

    borderRadius: "16px",
    maxWidth: "500px",
    width: "100%",
    padding: "24px",
    textAlign: "center",
  
  },

  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "16px",
    color: "#0b2c5f",
  },

  logo: {
    width: "70px",
    margin: "0 0 0px",
    display: "block",
  },

  text: {
    fontSize: "15px",
    color: "#0b2a5b",
    marginBottom: "12px",
    lineHeight: "1.6",
    textAlign: "left",
  },

  highlight: {
    color: "#ff7a00",
    fontWeight: "700",
  },

  list: {
    textAlign: "left",
    paddingLeft: "18px",
    marginBottom: "30px",
    color: "#0b2a5b",
    fontSize: "14px",
  },

  button: {
    marginTop: "20px",
    width: "100%",
    fontSize: "18px",
    padding: "14px",
    borderRadius: "12px",
  },
};

export default ComoFunciona;