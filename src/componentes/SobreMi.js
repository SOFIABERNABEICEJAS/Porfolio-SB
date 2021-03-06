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
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					boxShadow: 1,
					backgroundColor: "#fafafa",
					color: "#424242",
					p: {
						xl: 4,
						lg: 4,
						md: 4,
						sm: 4,
						xs: 1,
					},
					pb: {
						xs: 4,
					},
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
							mt: {
								xl: 5,
								lg: 5,
								md: 5,
								sm: 5,
								xs: 8,
							},
							mb: 5,
							display: "flex",
							justifyContent: "center",
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
						backgroundColor: "#f5f5f5",
					}}
				>
					<Grid
						item
						xs={12}
						sm={12}
						md={4}
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
							sx={{
								width: {
									xl: 300,
									lg: 280,
									md: 280,
									sm: 280,
									xs: 250,
								},
								height: {
									xl: 300,
									lg: 280,
									md: 280,
									sm: 280,
									xs: 250,
								},
							}}
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
							flexDirection: "column",
							textAlign: "center",
							justifyContent: "center",
						}}
					>
						<Typography
							variant="h6"
							xs={12}
							sm={10}
							md={6}
							lg={6}
							xl={6}
							sx={{
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
							Sofia Bernabei:
						</Typography>
						<Typography
							variant="body1"
							color="text.secondary"
							sx={{
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
							Me recib?? de T??cnica en Laboratorio y trabaj?? siete a??os en un
							importante laboratorio cl??nico en C??rdoba. Mi inquietud y
							curiosidad por la tecnolog??a hizo que incursionara en el mundo IT.
							Realic?? la carrera de desarrolladora Frontend de un a??o de
							duraci??n en el bootcamp en ADA ITW. Qued?? fascinada, no solo
							porque te permite expandir la creatividad y aprender a resolver
							desaf??os, sino porque no existe un l??mite de aprendaje. Hoy estoy
							en b??squeda de mi primer trabajo y me encantar??a encontrar un
							lugar que me permita crecer d??a a d??a y seguir aprendiendo.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
export default SobreMi;
