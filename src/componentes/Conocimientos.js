import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
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

const Conocimientos = () => {
	return (
		<Grid
			container
			sx={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Typography
				variant="h3"
				sx={{
					mt: 14,
					display: "flex",
					justifyContent: "center",
				}}
			>
				CONOCIMIENTOS
			</Typography>

			<Grid
				item
				xs={10}
				sx={{
					mt: 6,
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					boxShadow: 1,
				}}
			>
				<Card sx={{ m: 4, width: 150 }}>
					<CardMedia component="img" height="130" src={html} alt="html" />
					<CardContent>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							HTML
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ width: 150, m: 4 }}>
					<CardMedia component="img" height="140" src={css} alt="CSS" />
					<CardContent>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							CSS{" "}
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ width: 150, m: 4 }}>
					<CardMedia component="img" height="140" src={js} alt="js" />
					<CardContent>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							JS
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ width: 150, m: 4 }}>
					<CardMedia component="img" height="140" src={sass} alt="sass" />
					<CardContent>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							SASS
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ width: 150, m: 4 }}>
					<CardMedia component="img" height="140" src={react} alt="react" />
					<CardContent>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							REACT
						</Typography>
					</CardContent>
				</Card>

				<Card sx={{ width: 150, m: 4 }}>
					<CardMedia component="img" height="140" src={bulma} alt="bulma" />
					<CardContent>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							BULMA
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ width: 150, m: 4 }}>
					<CardMedia component="img" height="140" src={git} alt="git" />
					<CardContent>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							GIT
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ width: 150, m: 4 }}>
					<CardMedia component="img" height="140" src={github} alt="github" />
					<CardContent>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							GITHUB
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ width: 150, m: 4 }}>
					<CardMedia component="img" height="140" src={mui} alt="material ui" />
					<CardContent>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							MATERIAL UI
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default Conocimientos;
