import { useState } from "react";

function Ex01() {
    const [nomeproduto, setNomeproduto] = useState("Produto")
    const [valor, setValor] = useState("Valor")
    const [resultado, setResultado] = useState("Resultado")

    function handleSubmit(event) {
        event.preventDefault()
        setResultado(`O produto ${nomeproduto} custa ${valor}`)
    }


    return (
        <>
        <h2>Exercício 1</h2>
        <p>1. Peça ao usuário o nome de um produto e o preço. Mostre uma mensagem dizendo quanto custa o produto.</p>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>Produto</label>
                    <input
                        type="text"
                        value={nomeproduto}
                        onChange={(event) => setNomeproduto(event.target.value)}
                    />
                    <label>Valor</label>
                    <input
                        type="number"
                        value={valor}
                        onChange={(event) => setValor(event.target.value)}
                    />
                    <button type="submit">Enviar</button>

                    <p>{ resultado }</p>
                </form>
            </section>
        </>
    )
}

export default Ex01