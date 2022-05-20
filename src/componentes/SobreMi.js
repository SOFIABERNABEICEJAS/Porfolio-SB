import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import sofia from "../img/sobreMi/sofia.png";
import Avatar from "@mui/material/Avatar";
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
					pt: 14,
					pb: 2,
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					boxShadow: 1,
					backgroundColor: "#fafafa",
				}}
			>
				<Grid
					item
					xs={12}
					sm={12}
					md={3}
					lg={3}
					xl={3}
					sx={{
						mb: 2,
						mt: 1,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Avatar
						alt="imagen personal Sofia Bernabei"
						src={sofia}
						sx={{ width: 280, height: 280 }}
					/>
				</Grid>

				<Grid
					item
					xs={12}
					sm={10}
					md={7}
					lg={7}
					xl={7}
					sx={{
						m: 1,
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
							mb: 1,
							fontSize: {
								lg: 50,
								md: 45,
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
								lg: 45,
								md: 45,
								xs: 35,
							},
						}}
					>
						Sofia Bernabei
					</Typography>
					<Typography
						variant="body1"
						color="text.secondary"
						sx={{
							m: 2,
							mb: 2,
							pb: 3,
							textAlign: "center",
						}}
					>
						Trabajé siete años en un importante laboratorio clínico, cumpliendo
						mi función como Técnica en Laboratorio. Mi inquietud y curiosidad
						por la tecnología hizo que incursionara en el fascinante mundo IT,
						el cual, me permite explayar mi creatividad y capacidad para
						resolver desafíos y aprendizajes sin límites de crecimiento. Hoy
						estoy en búsqueda de mi primer trabajo y me encantaría encontrar un
						lugar que me permita crecer día a día y seguir aprendiendo.
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};
export default SobreMi;
