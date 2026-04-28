import { useState } from 'react'

function Ex02() {
    const [nomeproduto, setNomeproduto] = useState("")
    const [preco, setPreco] = useState("")
    const [resultado, setResultado] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        setResultado(`O produto ${nomeproduto} custa R$ ${parseFloat(preco).toFixed(2)}`)
    }

    return (
        <>
            <h2>Exercício 01</h2>
            <p>2. Peça o comprimento e a largura de um terreno. Calcule e mostre a quantidade de metros quadrados.</p>

            <section>
                <form onSubmit={handleSubmit}>
                    <label>Nome do Produto</label>
                    <input
                        type="text"
                        value={nomeproduto}
                        onChange={(event) => setNomeproduto(event.target.value)}
                    />

                    <label>Preço</label>
                    <input
                        type="number"
                        value={preco}
                        onChange={(event) => setPreco(event.target.value)}
                    />

                    <button type="submit">Enviar</button>

                    <p>{resultado}</p>
                </form>
            </section>
        </>
    )
}

export default Ex02