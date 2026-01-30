import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import GameData from "./pages/GameData"
import Result from "./pages/Result"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dados" element={<GameData />} />
      <Route path="/resultado" element={<Result />} />
    </Routes>
  )
}
