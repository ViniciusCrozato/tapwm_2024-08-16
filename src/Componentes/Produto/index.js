import axios from 'axios';
import '../../index.css';
import {MdDelete} from 'react-icons/md';

const Produto = ({valor, carregaProdutos}) => {
    return (
        <div className='cardProd'>
            <center>
                <h3 className='titulo'>{valor.nome}</h3>
                <p className='subtitulo'>Preço: {valor.preco}</p>
                <img src={valor.foto} alt='Imagem do Produto' className='imagem'></img>
                <p className='subtitulo'>Descrição: {valor.descricao}</p>
                <p className='subtitulo'>Categoria: {valor.dcategoria}</p>

                <MdDelete className='icone' onClick={()=>remover(valor.id)}/>
            </center>
        </div>
    )
    function remover(id){
        let api = "https://app-api-tapwm.onrender.com/api/produtos";
        axios.delete(`${api}/${id}`).then(()=>carregaProdutos());
    }
}


export default Produto;