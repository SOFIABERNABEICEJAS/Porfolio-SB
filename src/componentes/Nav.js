import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Nav = () => {
	return (
		<Stack spacing={2} sx={{ flexGrow: 1 }}>
			<AppBar
				position="fixed"
				color="primary"
				sx={{ alignItems: "flex-end", p: 1 }}
			>
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
						<Button href="#sobreMi" color="inherit">
							Sobre mi
						</Button>
						<Button href="#proyectos" color="inherit" sx={{ m: 1 }}>
							Proyectos
						</Button>
						<Button href="#conocimientos" color="inherit" sx={{ m: 1 }}>
							Conocimientos
						</Button>
						<Button href="#contacto" color="inherit" sx={{ m: 1 }}>
							Contacto
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</Stack>
	);
};

export default Nav;
