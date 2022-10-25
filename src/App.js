import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import NavbarApp from "./components/NavbarApp";

function App() {
  const Mensaje = "Bienvenidos a Librería El trébol";
  return (
    <div>
      <NavbarApp />
      <ItemListContainer Mensaje={Mensaje} Contenedor="contenedor" />
    </div>
  );
}

export default App;
