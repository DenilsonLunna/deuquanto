import { useLocation, useNavigate } from "react-router-dom"


export default function Result() {
const { state } = useLocation()
const navigate = useNavigate()


const horasMaximas = Math.max(...state.grupos.map(g => g.horas))
const valorTotalQuadra = horasMaximas * state.valorHora

const totalMinutosJogador = state.grupos.reduce((total, g) => {
  return total + (g.horas * 60 * g.jogadores)
}, 0)

const valorMinuto = valorTotalQuadra / totalMinutosJogador


return (
<div className="container">
  <h1>Resultado</h1>

  <div style={{ display: "flex", gap: "20px", alignItems: "center", height: "40px" }}>
    <p>⏱ Tempo total da quadra:</p>
    <strong>{horasMaximas}h</strong>
  </div>

  <div style={{ display: "flex", gap: "20px", alignItems: "center", height: "40px" }}>
    <p>💰 Valor total da quadra:</p>
    <strong>R$ {valorTotalQuadra.toFixed(2)}</strong>
  </div>
  {state.grupos.map((g, i) => {
    const minutosGrupo = g.horas * 60
    const valorIndividual = minutosGrupo * valorMinuto
    const valorGrupo = valorIndividual * g.jogadores

    return (
      <div key={i} className="card">
        <div className="badge">
          <div style={{color: "#969696"}}>Grupo {i + 1}</div> - {g.jogadores} jogadores
        </div>

        <div className="content">
          <div className="infos">
            <p>👥 Jogadores: <strong>{g.jogadores}</strong></p>
            <p>🕒 Tempo jogado: <strong>{g.horas}h</strong></p>
            <p>💲 Valor por jogador: <strong>R$ {valorIndividual.toFixed(2)}</strong></p>
          </div>

          <div className="valor">
            <p>Total do grupo</p>
            <strong>R$ {valorGrupo.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    )
  })}

  <button className="primary" onClick={() => navigate("/")}>
    + Novo Jogo
  </button>
</div>
)
}