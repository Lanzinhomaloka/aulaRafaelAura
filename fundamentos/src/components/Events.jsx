

const Events = () => {

    const handleyMyEvent = (e) => {


        console.log("Ativou o evento!")
        alert("Ativou o evento!")
    }



return (
    <div>
        <div>
            <button onClick={(handleyMyEvent)}> Clique Aqui </button>
        </div>

            <div>
                <button onClick={() => console.log("Clicou! Pouco código, coisa rápida!")}>Clique Aqui Também!</button>
            </div>


            <button 
            onClick={()=> {
                if(true) {
                    console.log("Isso não deveria existir, não é uma boa prática! Logica no HTML")
                }
            }}
            >Clique aqui, por favor</button>
    </div>
)
}

export default Events