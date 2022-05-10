import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";

import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#1976d2",
		},
	},
});
const Nav = () => {
	return (
		<Stack spacing={2} sx={{ flexGrow: 1 }}>
			<ThemeProvider theme={darkTheme}>
				<AppBar position="fixed" color="primary">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>

						<Button color="inherit">Hola!</Button>
						<Button color="inherit">Conocimientos</Button>
						<Button color="inherit">Proyectos</Button>
						<Button color="inherit">Contacto</Button>
					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</Stack>
	);
};

export default Nav;