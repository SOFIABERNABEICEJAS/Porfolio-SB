import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import porfolio from "../img/proyectos/porfolio.png";
import generadorDeMemes from "../img/proyectos/generadorDeMemes.png";
import ahorradas from "../img/proyectos/ahorradas.png";
import pokemon from "../img/proyectos/pokemon.png";
import rickAndMorty from "../img/proyectos/rickAndMorty.png";
import netflixSB from "../img/proyectos/netflixSB.png";
import TarjetaProyecto from "./TarjetaProyecto";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Proyectos = () => {
	return (
		<Grid
			container
			id="proyectos"
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
					flexDirection: "column",
					alignItems: "center",
					boxShadow: 1,
					backgroundColor: "#f5f5f5",
				}}
			>
				<div
					data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="2000"
				>
					<Typography
						variant="h3"
						sx={{
							mt: 9,
							mb: 5,
							display: "flex",
							justifyContent: "center",
							color: "#424242",
						}}
					>
						PROYECTOS
					</Typography>
				</div>
				<Grid
					sx={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
					}}
				>
					<TarjetaProyecto
						titulo="Primer porfolio"
						imagen={porfolio}
						link="https://sofiabernabeicejas.github.io/Portfolio/"
					/>

					<TarjetaProyecto
						titulo="Generador de memes"
						imagen={generadorDeMemes}
						link="https://sofiabernabeicejas.github.io/Generador-de-memes/"
					/>
					<TarjetaProyecto
						data-aos="fade-down-left"
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
		</Grid>
	);
};

export default Proyectos;
