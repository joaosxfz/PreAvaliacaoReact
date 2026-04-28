import { useState } from "react";

function Ex02() {
    const [comprimento, setComprimento] = useState("Comprimento")
    const [largura, setLargura] = useState("Largura")
    const [resultado, setResultado] = useState("Resultado")

    function handleSubmit(event) {
        event.preventDefault()
        setResultado(`A área do terreno é ${comprimento * largura} m por quadrado`)
    }


    return (
        <>
        <h2>Exercício 2</h2>
        <p>2. Peça o comprimento e a largura de um terreno. Calcule e mostre a quantidade de metros quadrados.</p>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>Comprimento</label>
                    <input
                        type="number"
                        value={comprimento}
                        onChange={(event) => setComprimento(event.target.value)}
                    />
                    <label>Largura</label>
                    <input
                        type="number"
                        value={largura}
                        onChange={(event) => setLargura(event.target.value)}
                    />
                    <button type="submit">Enviar</button>

                    <p>{ resultado }</p>
                </form>
            </section>
        </>
    )
}

export default Ex02