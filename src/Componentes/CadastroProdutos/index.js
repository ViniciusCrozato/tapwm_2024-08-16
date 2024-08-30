import axios from "axios";

export default function CadastroProduto({carregaProdutos}) {
    return(
            <div className="cardProd">
                <h3 className="titulo"> Cadastro de Produtos</h3>
                <form>
                    <label>Nome:</label>
                    <input type="text" id="nome" name="nome"></input>
                    <label>Preço:</label>
                    <input type="text" id="preco" name="preco"></input>

                    <button type="button" onClick={adicionaProduto}>Adiciona</button>
                </form>
            </div>
    );
    function adicionaProduto(){
        const nome = document.getElementById('nome').value;
        const preco = document.getElementById('preco').value;
        const produto = {nome,preco};
    
        console.log(produto);
        axios.post('https://app-api-tapwm.onrender.com/api/produtos', produto).then(()=>carregaProdutos());
    }
}
