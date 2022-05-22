import Nav from "./componentes/Nav";
import Proyectos from "./componentes/Proyectos";
import Conocimientos from "./componentes/Conocimientos";
import Contacto from "./componentes/Contacto";
import SobreMi from "./componentes/SobreMi";
import Footer from "./componentes/Footer";
import Bienvenidos from "./componentes/Bienvenidos";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
	palette: {
		primary: {
			main: "#424242",
		},
		secundary: "#c2c2c2",
	},
});
const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<div>
				<Nav />
				<Bienvenidos />
				<Proyectos />
				<SobreMi />
				<Conocimientos />
				<Contacto />
				<Footer />
			</div>
		</ThemeProvider>
	);
};

export default App;
