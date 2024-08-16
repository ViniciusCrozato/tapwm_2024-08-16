import Produto from '../Produto/index.js';

const ListaProdutos = ({ produtos }) => {
    return(
        <div> {produtos.map(
             (p)=> (<Produto valor={p} ></Produto>) 
        )} 
    </div>
    );
}

export default ListaProdutos;