const TemplateExpression = () => {

    const name ="Nicollas"

    const data ={
        age:16,
        job: "intelectual"
    }

    /*
        { } -> template expression : serve para incorporar e renderizar expressões,variáveis
          funções dinâmicas
            Utilizamos "dentro" do html

            Veja:
    
        
    
    */






    return(

        <div>
            <h3>Olá {name}, tudo bem?</h3>
            <p>Você atua como: {data.job}</p>
            <p>Fazendo calculos: { 5 + 5 }</p>
            <p>Chamando uma função javascript: {console.log("JSX React")}</p>
        </div>
    )

    

}

export default TemplateExpression