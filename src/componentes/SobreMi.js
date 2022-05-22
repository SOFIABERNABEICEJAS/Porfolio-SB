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
					mt: 6,
					pb: 4,
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					boxShadow: 1,
					backgroundColor: "#fafafa",
					color: "#424242",
				}}
			>
				<div
					data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="2000"
				>
					<Typography
						component="div"
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
						SOBRE MI
					</Typography>
				</div>
				<Grid
					sx={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
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
							m: 2,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Avatar
							alt="imagen personal Sofia Bernabei"
							src={sofia}
							sx={{ width: 260, height: 260 }}
						/>
					</Grid>

					<Grid
						item
						xs={12}
						sm={10}
						md={6}
						lg={6}
						xl={6}
						sx={{
							p: 1,
							display: "flex",
							alignItems: "center",
							textAlign: "center",
						}}
					>
						<Typography
							variant="body1"
							color="text.secondary"
							sx={{
								m: 2,
								fontSize: 19,
								p: 1,
								textAlign: {
									xl: "start",
									lg: "start",
									md: "start",
									sm: "start",
									xs: "center",
								},
							}}
						>
							Trabajé siete años en un importante laboratorio clínico,
							cumpliendo la función de Técnica en Laboratorio. Mi inquietud y
							curiosidad por la tecnología hizo que incursionara en el
							fascinante mundo IT, el cual, me permite explayar mi creatividad y
							capacidad para resolver desafíos y aprendizajes sin límites de
							crecimiento. Hoy estoy en búsqueda de mi primer trabajo y me
							encantaría encontrar un lugar que me permita crecer día a día y
							seguir aprendiendo.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
export default SobreMi;
