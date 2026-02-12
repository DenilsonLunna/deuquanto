import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        fontSize: "14px"
      }}
    >
      <Link to="/politica-de-privacidade">
        Política de Privacidade
      </Link>

      <Link to="/contato">
        Contato
      </Link>
    </footer>
  );
}

export default Footer;
