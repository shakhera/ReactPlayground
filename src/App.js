import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    { name: "Samsung s23 ultra", price: "108k" },
    { name: "iPhone 15 ultra", price: "150k" },
    { name: "Sony 14 Pro", price: "89k" },
    { name: "Samsung s22 ", price: "90k" },
  ];
  return (
    <div className="App">
      {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h1>Name: {props.name}</h1>
      <h2>Price: {props.price}</h2>
    </div>
  );
}
export default App;
