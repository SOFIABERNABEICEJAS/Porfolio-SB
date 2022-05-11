import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
<<<<<<< HEAD
import Box from "@mui/material/Box";

=======
>>>>>>> 1a43a083f0467019415659a02e609ab96abfa010
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
<<<<<<< HEAD
				gnItem
				<AppBar
					position="fixed"
					color="primary"
					sx={{ alignItems: "flex-end", p: 1 }}
				>
=======
				<AppBar position="fixed" color="primary">

>>>>>>> 1a43a083f0467019415659a02e609ab96abfa010
					<Toolbar>
						<Box
							sx={{
								m: 2,
								display: { sm: "none", md: "none", lg: "none", xl: "none" },
							}}
						>
							<IconButton edge="start" color="inherit" aria-label="menu">
								<MenuIcon />
							</IconButton>
						</Box>

						<Box
							sx={{
								display: {
									xs: "none",
									sm: "flex",
									md: "flex",
									lg: "flex",
									xl: "flex",
								},
							}}
						>
							<Button href="#" color="inherit">
								Hola!
							</Button>
							<Button color="inherit" sx={{ m: 1 }}>
								Conocimientos
							</Button>
							<Button color="inherit" sx={{ m: 1 }}>
								Proyectos
							</Button>
							<Button color="inherit" sx={{ m: 1 }}>
								Contacto
							</Button>
						</Box>
					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</Stack>
	);
};

export default Nav;
