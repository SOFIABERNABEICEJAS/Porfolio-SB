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
				backgroundColor: "#c2c2c2",
			}}
		>
			<Grid
				item
				xs={10}
				sx={{
					pt: 18,
					pb: 10,
					display: "flex",
					alignItems: "center",
					flexWrap: "wrap",
					boxShadow: 1,
					backgroundColor: "#fafafa",
				}}
			>
				<Grid
					xs={12}
					sm={12}
					md={4}
					lg={4}
					xl={4}
					sx={{
						m: 1,
						display: "flex",
						justifyContent: "center",
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
					xs={12}
					sm={10}
					md={7}
					lg={7}
					xl={7}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						textAlign: "center",
					}}
				>
					<Typography
						variant="h1"
						sx={{
							color: "#424242",
							fontSize: 60,
							mt: 1,
							mb: 1,
							fontSize: {
								xl: 60,
								lg: 60,
								md: 60,
								sm: 35,
								xs: 30,
							},
						}}
					>
						Desarrolladora Frontend
					</Typography>
					<Typography
						variant="h3"
						sx={{
							m: 1,
							display: "flex",
							alignItems: "center",
							textAlign: "center",
							fontSize: {
								xl: 60,
								lg: 60,
								md: 50,
								sm: 35,
								xs: 30,
							},
						}}
					>
						Sofia Bernabei
					</Typography>
					<Typography
						variant="body1"
						color="text.secondary"
						sx={{
							mt: 2,
							mb: 4,
							textAlign: "center",
						}}
					>
						Trabaje 7 años en un laboratorio privado y hace más de un año conocí
						este nuevo mundo IT con infinitas oportunidades de aprendizaje y
						crecimiento. Lo que más me gustó fue darme cuenta que no solo
						resolves problemas mientras plasmas la creatividad, sino que, no
						existe un limite de aprendizaje.
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};
export default SobreMi;
