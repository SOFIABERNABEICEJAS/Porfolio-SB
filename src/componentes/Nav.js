import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

const Nav = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
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
						<IconButton
							id="basic-button"
							aria-controls={open ? "basic-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}
							edge="start"
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>

						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}
						>
							<MenuItem onClick={handleClose}>
								<Link href="#sobreMi" underline="none">
									SOBRE MI
								</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link href="#proyectos" underline="none">
									PROYECTOS
								</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link href="#conocimientos" underline="none">
									CONOCIMIENTOS
								</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link href="#contacto" underline="none">
									CONTACTO
								</Link>
							</MenuItem>
						</Menu>
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
