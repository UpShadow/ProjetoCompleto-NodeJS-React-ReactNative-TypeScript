import { useParams } from "react-router-dom"; // é um hook igual o useEffect

function Produto() {
    const { id } = useParams(); //Pegando o id que é passado pela rota, este id foi especificado na routes.js assim: path='/produto/:id'
    
    return (
        <div>
            <h2>PAGINA DETALHE DO PRODUTO</h2>
            <span>
                Meu produto é {id}
            </span>
        </div>
    )
}

export default Produto;