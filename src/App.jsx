import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import GameData from "./pages/GameData"
import Result from "./pages/Result"
import ComoFunciona from "./pages/ComoFunciona"
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade"
import Doacao from "./pages/Doacao";
import Contato from "./pages/Contato"
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dados" element={<GameData />} />
      <Route path="/resultado" element={<Result />} />
      <Route path="/como-funciona" element={<ComoFunciona />} />
      <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
      <Route path="/doacao" element={<Doacao />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  )
}
