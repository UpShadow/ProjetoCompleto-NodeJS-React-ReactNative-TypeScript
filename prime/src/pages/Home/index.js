import { useEffect, useState } from "react";
import api from "../../services/api";

// vamos usar useEffect pq toda vez que abrirmos o projeto queremos que seja buscado la na api os filmes
// então é um ciclo de vida, e o useState para podermos armazenar num estado esses dados.

// URL DA API: /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: '28fc232cc001c31e8a031f419d0a14ca',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            console.log(response.data.results);
        }

        loadFilmes();

    }, [])

    return(
        <div>
            <h1>Bem vindo a HOME</h1>
        </div>
    )
}

export default Home;