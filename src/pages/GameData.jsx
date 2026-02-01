import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button.jsx"
import CircleButton from "../components/CircleButton.jsx"
import Footer from "../components/Footer.jsx"
export default function GameData() {
  const navigate = useNavigate()

  const [valorHora, setValorHora] = useState(0)
  const horasDisponiveis = Array.from(
  { length: 20 },
  (_, i) => (i + 1) * 0.5
  );
  const [grupos, setGrupos] = useState([
    { jogadores: 1, horas: 1 }
  ])

function adicionarGrupo() {
  setGrupos([
    ...grupos,
    { jogadores: 1, horas: 1 }
  ])
}
function atualizarGrupo(index, campo, valor) {
  const novosGrupos = [...grupos]
  novosGrupos[index][campo] = Number(valor)
  setGrupos(novosGrupos)
}
function calcular() {
navigate("/resultado", { state: { valorHora, grupos } })
}


return (
<div className="app">
    <div className="container">
    <h1>Dados do jogo</h1>


    <label className="labels">💰 Valor da hora (R$)</label>
    <input
      type="number"
      value={valorHora}
      onFocus={(e) => e.target.select()}
      onChange={(e) => setValorHora(Number(e.target.value))}
    />

     <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: "8px",
      }}
    >
      <span style={{ fontWeight: "600", fontSize: "16px" }}>
        👥 Grupos
      </span>

      <span
       onClick={() => navigate("/como-funciona")}
        style={{
          fontSize: "14px",
          color: "#1e88e5",
          cursor: "pointer",
         
        }}
      >
        o que é grupos?
      </span>
    </div>
      

    
    <divlist className="groups">
        {grupos.map((grupo, index) => (
  <div key={index} className="group">
    <div>
      <label className="labels">Grupo {index + 1}</label>
      <input
        type="number"
        className="inputJogadores"
        min="1"
        placeholder="0"
        value={grupo.jogadores}
        onFocus={(e) => e.target.select()}
        onChange={(e) =>
          atualizarGrupo(index, "jogadores", e.target.value)
        }
      />
    </div>

    <div>
      <label className="labels">Horas jogadas</label>
      <select
        className="selectHoras"
        value={grupo.horas}
        onChange={(e) =>
          atualizarGrupo(index, "horas", e.target.value)
        }
      >
        {horasDisponiveis.map((hora) => (
          <option key={hora} value={hora}>
            {hora} h
          </option>
        ))}
      </select>
    </div>
  </div>
))}
        <CircleButton onClick={adicionarGrupo}>+</CircleButton>


    </divlist>
    <Button onClick={calcular}>Deu quanto?</Button>
    </div>

<Footer />
</div>

)
}