import * as React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import html from "../img/conocimientos/html.png";
import css from "../img/conocimientos/css.png";
import js from "../img/conocimientos/js.png";
import sass from "../img/conocimientos/sass.png";
import react from "../img/conocimientos/react.png";
import mui from "../img/conocimientos/mui.png";
import bulma from "../img/conocimientos/bulma.png";
import git from "../img/conocimientos/git.png";
import github from "../img/conocimientos/github.png";
import TarjetaConocimientos from "./TarjetaConocimientos";
const Conocimientos = () => {
	return (
		<Grid
			container
			id="conocimientos"
			sx={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Grid
				item
				xs={10}
				sx={{
					mt: 6,
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					boxShadow: 1,
					backgroundColor: "#f5f5f5",
					color: "#424242",
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Typography
						variant="h3"
						sx={{
							mt: 8,
							mb: 8,
							display: "flex",
							justifyContent: "center",
						}}
					>
						CONOCIMIENTOS
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
					}}
				>
					<TarjetaConocimientos titulo="HTML" imagen={html} />
					<TarjetaConocimientos titulo="CSS" imagen={css} />
					<TarjetaConocimientos titulo="JS" imagen={js} />
					<TarjetaConocimientos titulo="SASS" imagen={sass} />
					<TarjetaConocimientos titulo="BULMA" imagen={bulma} />
					<TarjetaConocimientos titulo="REACT" imagen={react} />
					<TarjetaConocimientos titulo="GIT" imagen={git} />
					<TarjetaConocimientos titulo="GITHUB" imagen={github} />
					<TarjetaConocimientos titulo="MUI" imagen={mui} />
				</Box>
			</Grid>
		</Grid>
	);
};

export default Conocimientos;
