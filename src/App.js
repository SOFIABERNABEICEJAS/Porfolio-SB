import Nav from "./componentes/Nav";
import Proyectos from "./componentes/Proyectos";
import Conocimientos from "./componentes/Conocimientos";
import Contacto from "./componentes/Contacto";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
	palette: {
		primary: {
			main: "#424242",
		},
	},
});
const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<div>
				<Nav />
				<Proyectos />
				<Conocimientos />
				<Contacto />
			</div>
		</ThemeProvider>
	);
};

export default App;
