import { useState } from "react";

function Ex03() {
    const [compra, setCompra] = useState("Compra")
    const [parcelas, setParcelas] = useState("Parcelas")
    const [resultado, setResultado] = useState("Resultado")

    function handleSubmit(event) {
        event.preventDefault()
        setResultado(`Cada parcela custou R$ ${compra / parcelas}`)
    }


    return (
        <>
        <h2>Exercício 3</h2>
        <p>3. Peça o valor total de uma compra e o número de parcelas. Mostre o valor de cada parcela.</p>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>Valor Total da Compra</label>
                    <input
                        type="number"
                        value={compra}
                        onChange={(event) => setCompra(event.target.value)}
                    />
                    <label>Número de parcelas</label>
                    <input
                        type="number"
                        value={parcelas}
                        onChange={(event) => setParcelas(event.target.value)}
                    />
                    <button type="submit">Enviar</button>

                    <p>{ resultado }</p>
                </form>
            </section>
        </>
    )
}

export default Ex03