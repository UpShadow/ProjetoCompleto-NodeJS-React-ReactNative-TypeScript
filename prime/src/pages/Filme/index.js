import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './filme-info.css';
import api from "../../services/api";
import { toast } from "react-toastify";

function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '28fc232cc001c31e8a031f419d0a14ca',
                    language: 'pt-BR',
                }
            })
            .then((response) => {
                setFilme(response.data);
                console.log(response.data);
                setLoading(false);
            })
            .catch(() => {
                console.log("FILME NÃO ENCONTRADO");
                navigate("/", { replace: true });
                return;
            })
        }

        loadFilme();

        return () => {
            console.log("COMPONENTE FOI DESMONTADO")
        }
    }, [navigate, id]) //colocamos esse navigate e id aqui, pois são dependencias externas que o useEffect depende para funcionar, id no caso é do useParams que é externo e navigate tbm, basicamente são as dependencias do useEffect.

    //Iremos salvar os filmes localmente com localStorage
    function salvarFilme() {
        const minhaLista = localStorage.getItem("@primeflix");

        // busca na minhaLista e coloca em filmesSalvos caso não tenha inicia vazio.
        let filmesSalvos = JSON.parse(minhaLista) || [];

        //pergunta se na lista de filmesSalvos o filme.id atual filme que você pesquisou já está na lista de salvos
        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)
        
        // caso hasFilme true foi encontrado no some o filme já salvo
        if(hasFilme) {
            toast.warn("Esse filme já está na sua lista!");
            return;
        }

        // então caso não tenha sido encontrado na lista é feito push no filme
        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!");
    
    }

    //tela de carregamento caso loading true os dados API ainda não foram retornados então exibe carregando...
    if(loading) {
        return (
            <div className="filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`http://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    {/* target="blank" faz abrir o link em uma aba externa e rel="external é opcional apenas faz os navegadores entenderem que é um link externo que a gente não possui controle"*/}
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer` }>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;