const Challenge = () => {

        const numeroPrimeiro = 20;
        const numeroSegundo = 40;

        return (

                <div>
                    <p>Prineiro valor: {numeroPrimeiro}</p>
                    <p>Segundo valor: {numeroSegundo}</p>

                    <button onClick={() => console.log("Fazendo cálculos: ", numeroPrimeiro + numeroSegundo)}>Soma das variáveis</button>

                </div>

    )


}

export default Challenge