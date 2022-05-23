import * as React from "react";
import Typography from "@mui/material/Typography";
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
				backgroundColor: "#c2c2c2",
			}}
		>
			<Grid
				item
				xs={10}
				sx={{
					mt: 6,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					boxShadow: 1,
					backgroundColor: "#f5f5f5",
					color: "#424242",
				}}
			>
				<div
					data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="2000"
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Typography
						variant="h3"
						sx={{
							mt: 9,
							mb: 5,
							display: "flex",
							justifyContent: "center",
							fontSize: {
								xl: 55,
								lg: 50,
								md: 50,
								sm: 45,
								xs: 35,
							},
						}}
					>
						CONOCIMIENTOS
					</Typography>
				</div>
				<Grid
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
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Conocimientos;
