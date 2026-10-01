import "./App.css"

// O nome da imagem você escolhe

import Equipamento from "./assets/equipamento_fotografico.png"

function App() {
  
  return (
    <>
    <div>
      {/*Imagem em public - Utilizar para ser trabalhada em todas as páginas */}
    <img src="/velejando.png" alt="Velejando em alto mar"  />
    </div>

    <div>
      {/* imagem em assets - Maior controle,normalmente utilizados em componentes */}
      <img src={Equipamento} alt="Equipamento fotografico" />
    </div>
    
    
    </> 
  )
}

export default App
