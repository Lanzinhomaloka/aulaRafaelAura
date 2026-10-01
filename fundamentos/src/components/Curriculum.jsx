const Curriculum = () => {
    const data = {
        nome: "Allan",
        idade: 16,
        profissao: "Programador",
        habilidades: ["JavaScript","React", "SQL"],
        experiencias: [
            {empresa: "Empresa A",cargo:"Dev Jr"},
            {empresa: "Empresa B",cargo:"Dev Pleno"},
            {empresa: "Empresa C",cargo:"Dev Sênior"},
        ]
    }

    // função para regra de negócio
    
    const verificarIdade = (idade) => {
        return idade >= 18 ? "Maior de idade" : "Menor de idade"
    }

    return (
        <div className="card">
            <h3>Curriculum</h3>
            <h2>Nome: {pessoa.nome}</h2>
            <p>Idade: {pessoa.idade}</p>
            <span className="badge">Profissão: {pessoa.profissao}</span>
            <p>{verificarIdade(pessoa.idade)}</p>

            <div className="section" >
              <h3>Habilidades</h3>
              <ul>
                    {data.habilidades.map((h,index) => (

                          <li key={index} >{h}</li>
                    ))}
            </ul>  
             </div>

            <div className="section">
                <h3>Expêriencias</h3>
                <ul>
                    {data.experiencias.map((exp,index) =>(
                            <li> {exp.empresa} - {exp.cargo} </li>
                     ))}

                </ul>

            </div>
        </div>
    )
}

export default Curriculum