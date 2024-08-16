import logo from './logo.svg';
import './App.css';
import ListaProdutos from './Componentes/ListaProduto';

const produtos = [{
  nome: "Banana",
  preco: 10.00,
},
{
  nome: "Maçã",
  preco: 20.00,
},
{
  nome: "Pêra",
  preco: 30.00,
}
];

function App() {
  return (
    <div>
      <h1>Lista Produtos</h1>
      <ListaProdutos produtos={produtos}/>
    </div>
  );
}

export default App;
