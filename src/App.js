import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <UserManage></UserManage>
      {/* <User></User> */}
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  //short cut
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  );
}

function UserManage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users: {users.length}</h2>
      <div className="user-container">
        {users.map((user) => (
          <User
            name={user.name}
            email={user.email}
            phone={user.phone}
            website={user.website}
            companyName={user.company.name}
          ></User>
        ))}
      </div>
    </div>
  );
}
function User(props) {
  return (
    <div className="users">
      <h2>Name: {props.name}</h2>
      <h4>Email: {props.email}</h4>
      <p>Phone: {props.phone}</p>
      <p>Website: {props.website}</p>
      <p>Company Name: {props.companyName}</p>
    </div>
  );
}

// const products = [
//   { name: "Samsung s23 ultra", price: "108k" },
//   { name: "iPhone 15 ultra", price: "150k" },
//   { name: "Sony 14 Pro", price: "89k" },
//   { name: "Samsung s22 ", price: "90k" },
//   { name: "Nokia", price: "79k" },
// ];
// {products.map((product) => (
//   <Product name={product.name} price={product.price}></Product>
// ))}

// function Product(props) {
//   return (
//     <div className="product">
//       <h1>Name: {props.name}</h1>
//       <h2>Price: {props.price}</h2>
//     </div>
//   );
// }
export default App;
