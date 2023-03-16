import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';

// vamos usar useEffect pq toda vez que abrirmos o projeto queremos que seja buscado la na api os filmes
// então é um ciclo de vida, e o useState para podermos armazenar num estado esses dados.

// URL DA API: /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true); //state para exibir carregando na tela, caso o loadFilmes ainda não tenha retornado

    useEffect(()=>{

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: '28fc232cc001c31e8a031f419d0a14ca',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            // console.log(response.data.results.slice(0,10));
            setFilmes(response.data.results.slice(0,10));
            setLoading(false); //altera o Loading para false dizendo que os filmes foram carregados, e pode exibir na tela
        }

        loadFilmes();

    }, [])

    if(loading) { //verifica se o loading é true se for apenas exibe carregando, se false já exibe os filmes que foram buscados na API
        return (
            <div className="loading">
                <h2>Crregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => { //faz um map nos filmes e a variavel filme recebe 1 por vez
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                           <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                           <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;