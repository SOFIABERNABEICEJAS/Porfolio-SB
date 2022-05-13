import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import porfolio from "../img/proyectos/porfolio.png";
import generadorDeMemes from "../img/proyectos/generadorDeMemes.png";
import ahorradas from "../img/proyectos/ahorradas.png";
import pokemon from "../img/proyectos/pokemon.png";
import rickAndMorty from "../img/proyectos/rickAndMorty.png";
import netflixSB from "../img/proyectos/netflixSB.png";
import Link from "@mui/material/Link";
import TarjetaProyecto from "./TarjetaProyecto";

const Proyectos = () => {
	return (
		<Grid
			container
			id="proyectos"
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
				PROYECTOS
			</Typography>
			<Grid
				item
				xs={10}
				sx={{
					mt: 4,
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					boxShadow: 1,
					backgroundColor: "#f5f5f5",
				}}
			>
				<TarjetaProyecto
					titulo="Porfolio"
					imagen={porfolio}
					link="https://github.com/SOFIABERNABEICEJAS/Portfolio"
				/>
				<TarjetaProyecto
					titulo="Generador de memes"
					imagen={generadorDeMemes}
					link="https://sofiabernabeicejas.github.io/Generador-de-memes/"
				/>
				<TarjetaProyecto
					titulo="Ahorradas"
					imagen={ahorradas}
					link="https://sofiabernabeicejas.github.io/AhorrADAs/"
				/>
				<TarjetaProyecto
					titulo="Pokemon"
					imagen={pokemon}
					link="https://smeraldaka0s.github.io/Pokemon-TCG-API/"
				/>
				<TarjetaProyecto
					titulo="Rick And Morty"
					imagen={rickAndMorty}
					link="https://main--rick-and-morty-react-sass.netlify.app/"
				/>

				<TarjetaProyecto
					titulo="Netflix-SB"
					imagen={netflixSB}
					link="https://tpfinalnetflix-sb.netlify.app//"
				/>
			</Grid>
		</Grid>
	);
};

export default Proyectos;
