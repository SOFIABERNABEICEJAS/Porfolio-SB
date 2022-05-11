import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import porfolio from "../img/porfolio.png";
import generadorDeMemes from "../img/generadorDeMemes.png";
import ahorradas from "../img/ahorradas.png";
import pokemon from "../img/pokemon.png";
import rickAndMorty from "../img/rickAndMorty.png";
import netflixSB from "../img/netflixSB.png";

const Conocimientos = () => {
	return (
		<Grid
			container
			sx={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Grid
				item
				xs={10}
				sx={{
					mt: 14,
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					boxShadow: 1,
				}}
			>
				<Card sx={{ minWidth: 275, m: 4 }}>
					<CardMedia
						component="img"
						height="140"
						src={porfolio}
						alt="porfolio"
					/>
					<CardContent>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							Porfolio
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ minWidth: 275, m: 4 }}>
					<CardMedia
						component="img"
						height="140"
						src={generadorDeMemes}
						alt="generador de memes"
					/>
					<CardContent>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							Generador de memes
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ minWidth: 275, m: 4 }}>
					<CardMedia
						component="img"
						height="140"
						src={ahorradas}
						alt="ahorradas"
					/>
					<CardContent>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							Ahorradas
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ minWidth: 275, m: 4 }}>
					<CardMedia component="img" height="140" src={pokemon} alt="Pokemon" />
					<CardContent>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							Pokemon
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ minWidth: 275, m: 4 }}>
					<CardMedia
						component="img"
						height="140"
						src={rickAndMorty}
						alt="rickAndMorty"
					/>
					<CardContent>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							Rick And Morty
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ minWidth: 275, m: 4 }}>
					<CardMedia
						component="img"
						height="140"
						src={netflixSB}
						alt="netflixSB"
					/>
					<CardContent>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							Netflix-SB
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default Conocimientos;
