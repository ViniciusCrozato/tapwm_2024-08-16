import '../../index.css';

const Produto = ({valor}) => {
    return (
        <div className='cardProd'>
            <center>
                <h3 className='titulo'>{valor.nome}</h3>
                <p className='subtitulo'>Preço: {valor.preco}</p>
                <img src={valor.foto} alt='Imagem do Produto' className='imagem'></img>
            </center>
        </div>
    )
}

export default Produto;