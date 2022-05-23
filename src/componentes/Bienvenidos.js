import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Bienvenidos = () => {
	return (
		<Grid
			container
			sx={{
				display: "flex",
				justifyContent: "center",
				backgroundColor: "#c2c2c2",
				color: "#424242",
			}}
		>
			<Grid
				xs={10}
				sx={{
					flexDirection: "column",
					justifyContent: "center",
					textAlign: {
						xl: "left",
						lg: "left",
						md: "left",
						sm: "left",
						xs: "center",
					},
					pt: {
						xl: 40,
						lg: 30,
						md: 30,
						sm: 30,
						xs: 35,
					},
					pb: {
						xl: 40,
						lg: 30,
						md: 20,
						sm: 20,
						xs: 35,
					},
					pl: {
						xl: 5,
						lg: 3,
						md: 2,
						sm: 2,
						xs: 0,
					},
				}}
			>
				<div data-aos="fade-down">
					<Typography
						variant="h2"
						sx={{
							fontFamily: "Helvetica Neue",
							fontSize: {
								xl: 100,
								lg: 90,
								md: 90,
								sm: 75,
								xs: 62,
							},
						}}
					>
						Bienvenidos
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "Helvetica Neue",
							fontSize: {
								xl: 45,
								lg: 35,
								md: 35,
								sm: 30,
								xs: 25,
							},
						}}
					>
						a mi porfolio.
					</Typography>
					<Typography
						variant="h1"
						sx={{
							p: 1,
							fontSize: {
								xl: 65,
								lg: 60,
								md: 58,
								sm: 44,
								xs: 41,
							},
							color: {
								xl: "#000",
								lg: "#000",
								md: "#000",
								sm: "#000",
								xs: "#000",
							},
						}}
					>
						Sofia Bernabei
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "Helvetica Neue",
							fontSize: {
								xl: 40,
								lg: 35,
								md: 35,
								sm: 30,
								xs: 24,
							},
						}}
					>
						Desarrolladora Frontend.
					</Typography>
				</div>
				{/* <Grid>
				<Button
					variant="contained"
					sx={{
						m: 1,
						color: "#c2c2c2",
						background: "#000",
					}}
				>
					CONTACTAME!
				</Button>
			</Grid> */}
			</Grid>
		</Grid>
	);
};
export default Bienvenidos;
