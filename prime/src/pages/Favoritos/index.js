import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css'
import { toast } from 'react-toastify';

function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);
        
    }, [])

    function excluirFilme(id) {
        //filtra em filmes todos filmes que forem diferentes do id que foi passado
        // monta uma lista(filtroFilmes) com todos filmes menos o filme que tenha id igual ao id que veio por parametro
        let filtroFilmes = filmes.filter((filme) => {
            return (filme.id !== id) 
        })

        setFilmes(filtroFilmes); //Isso altera a lista dos filmes que é exibida na tela, pois coloca agora nessa lista, todos os filmes filtrados
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes)); // isso altera o localStorage colocando todos os filmes filtrados
        toast.success("Filme removido com sucesso");
    }

    return (
        <div className='meus-filmes'>
            <h1>Meus filmes salvos</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>} 
            <ul>
                {filmes.map((filme) => {
                    return (
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;