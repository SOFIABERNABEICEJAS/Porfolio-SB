import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import sofia from "../img/sobreMi/sofia.png";
import sofiaa from "../img/sobreMi/sofiaa.png";
import CardContent from "@mui/material/CardContent";
const SobreMi = () => {
	return (
		<Grid
			container
			id="sobreMi"
			sx={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Grid
				item
				sx={{
					mt: 18,
					mb: 10,
					display: "flex",
					justifyContent: "center",
					boxShadow: 1,
					display: {
						xs: "column",
					},
				}}
			>
				<Grid
					sx={{
						m: 2,
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Card sx={{ width: 300, borderRadius: 900 }}>
						<CardMedia
							component="img"
							height="300"
							image={sofiaa}
							alt="imagen personal"
						/>
					</Card>
				</Grid>

				<Grid
					sx={{
						m: 2,
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Typography variant="h1" sx={{ color: "#424242", fontSize: 65 }}>
						Desarrolladora Frontend
					</Typography>
					<Typography
						variant="h3"
						sx={{
							m: 1,
							display: "flex",
							justifyContent: "center",
						}}
					>
						Sofia Bernabei
					</Typography>
					<Typography
						variant="body1"
						color="text.secondary"
						sx={{
							mt: 2,
							textAlign: "center",
						}}
					>
						Les cuento un poco sobre mi, trabaje 7 años en un laboratorio
						privado y hace más de un año conocí este nuevo mundo IT con
						infinitas oportunidades de crecimiento y aprendizaje. Lo que más me
						gustó fue darme cuenta que no solo resolves problemas mientras
						plasmas la creativid en cada proyecto, sino que, no existe un limite
						de aprendizaje.
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};
export default SobreMi;
