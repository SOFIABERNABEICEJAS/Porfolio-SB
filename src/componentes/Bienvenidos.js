import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const Bienvenidos = () => {
	return (
		<Grid
			container
			id="Bienvenidos"
			sx={{
				pt: 25,
				pb: 15,
				pl: {
					xl: 20,
					lg: 15,
					md: 10,
					sm: 5,
					xs: 0,
				},
				textAlign: {
					xl: "left",
					lg: "left",
					md: "left",
					sm: "left",
					xs: "center",
				},
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				backgroundColor: "#c2c2c2",
				color: "#424242",
			}}
		>
			<div data-aos="fade-down">
				<Typography
					variant="h2"
					sx={{
						fontFamily: "Helvetica Neue",
						fontSize: {
							xl: 95,
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
							xl: 40,
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
							xl: 60,
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
							xl: 35,
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
		</Grid>
	);
};
export default Bienvenidos;
