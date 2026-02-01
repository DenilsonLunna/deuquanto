import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ textAlign: "center", padding: "20px", fontSize: "14px" }}>
      <Link to="/politica-de-privacidade">
        Política de Privacidade
      </Link>
    </footer>
  );
};

export default Footer;