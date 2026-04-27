import { Link } from "react-router-dom";

function Exercicios() {
    return (
        <main>
            <section>
                <h2>Lista de Exercícios Gulosos</h2>
                <div>
                    <ul>
                        <li><Link to="/Ex01"><button>Exercício 01</button></Link></li>
                        <li><Link to="/Ex02"><button>Exercício 02</button></Link></li>
                        <li><Link to="/Ex03"><button>Exercício 03</button></Link></li>
                        <li><Link to="/Ex04"><button>Exercício 04</button></Link></li>
                        <li><Link to="/Ex05"><button>Exercício 05</button></Link></li>
                        <li><Link to="/Ex06"><button>Exercício 06</button></Link></li>
                        <li><Link to="/Ex07"><button>Exercício 07</button></Link></li>
                        <li><Link to="/Ex08"><button>Exercício 08</button></Link></li>
                        <li><Link to="/Ex09"><button>Exercício 09</button></Link></li>
                        <li><Link to="/Ex10"><button>Exercício 10</button></Link></li>
                        <li><Link to="/Ex11"><button>Exercício 11</button></Link></li>
                        <li><Link to="/Ex12"><button>Exercício 12</button></Link></li>
                        <li><Link to="/Ex13"><button>Exercício 13</button></Link></li>
                        <li><Link to="/Ex14"><button>Exercício 14</button></Link></li>
                        <li><Link to="/Ex15"><button>Exercício 15</button></Link></li>
                        <li><Link to="/Ex16"><button>Exercício 16</button></Link></li>
                        <li><Link to="/Ex17"><button>Exercício 17</button></Link></li>
                        <li><Link to="/Ex18"><button>Exercício 18</button></Link></li>
                        <li><Link to="/Ex19"><button>Exercício 19</button></Link></li>
                        <li><Link to="/Ex20"><button>Exercício 20</button></Link></li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Exercicios