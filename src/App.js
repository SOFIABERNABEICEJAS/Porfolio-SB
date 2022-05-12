import Nav from "./componentes/Nav";
import Proyectos from "./componentes/Proyectos";
import Conocimientos from "./componentes/Conocimientos";
import Contacto from "./componentes/Contacto";

const App = () => {
	return (
		<div>
			<Nav />
			<Conocimientos />
			<Proyectos />
			<Contacto />
		</div>
	);
};

export default App;
