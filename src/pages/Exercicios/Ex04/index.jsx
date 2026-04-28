import { useState } from "react";

function Ex04() {
    const [dias, setDias] = useState("Dias")
    const [resultado, setResultado] = useState("Resultado")

    function handleSubmit(event) {
        event.preventDefault()
        setResultado(`Cada parcela custou R$ ${compra / parcelas}`)
    }


    return (
        <>
        <h2>Exercício 4</h2>
        <p>4. Peça a quantidade de dias que uma pessoa viajou. Mostre quantas horas isso representa.</p>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>Quantidade de dias foras</label>
                    <input
                        type="text"
                        value={dias}
                        onChange={(event) => setCompra(event.target.value)}
                    />
                    <button type="submit">Enviar</button>

                    <p>{ resultado }</p>
                </form>
            </section>
        </>
    )
}

export default Ex04