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
					md={4}
					lg={4}
					xl={4}
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
						sx={{ width: 300, height: 300 }}
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
								xl: 60,
								lg: 60,
								md: 50,
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
								xl: 55,
								lg: 50,
								md: 45,
								sm: 35,
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
							mt: 2,
							mb: 4,
							p: 3,
							textAlign: "center",
						}}
					>
						Les cuento un poco sobre mi, comencé estudiando Técnica en
						Laboratorio y trabaje en un importante laboratorio por 7 años. Mi
						inquietud y curiosidad por la tecnología hizo que incursionara en el
						fascinante mundo IT, el cual me permite explayar mi creatividad y mi
						capacidad para resolver desafíos y aprendizajes sin límites de
						crecimiento.
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};
export default SobreMi;
