import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FormControl from "@mui/material/FormControl";

const Contacto = () => {
	return (
		<Grid
			container
			id="contacto"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				backgroundColor: "#c2c2c2",
			}}
		>
			<div
				data-aos="flip-left"
				data-aos-easing="ease-out-cubic"
				data-aos-duration="2000"
			>
				<Typography
					variant="h3"
					gutterBottom
					sx={{
						mt: 14,
						color: "#424242",
						backgroundColor: "#c2c2c2",
					}}
				>
					CONTACTO
				</Typography>
			</div>
			<Grid
				style={{ width: "100%" }}
				item
				xs={10}
				sx={{
					mt: 1,
					mb: 4,
					pb: 2,
					pt: 4,
					display: "flex",
					flexWrap: "wrap",
					boxShadow: 4,
					backgroundColor: "#fff",
				}}
			>
				<Grid
					xs={12}
					md={5}
					lg={5}
					xl={5}
					sx={{
						m: 2,
						justifyContent: "center",
					}}
				>
					<Typography
						variant="h5"
						gutterBottom
						sx={{
							mb: 2,
							display: "flex",
							justifyContent: "center",
						}}
					>
						CONTACTAME:
					</Typography>
					<div data-aos="zoom-in">
						<Link
							href="https://www.linkedin.com/in/sofia-bernabei/"
							underline="none"
							sx={{
								display: "flex",
								justifyContent: "center",
								m: 3,
							}}
						>
							<Chip
								sx={{
									p: 2,
									m: 2,
									fontSize: 16,
									":hover": {
										boxShadow: 2,
									},
								}}
								icon={<LinkedInIcon fontSize="large" />}
								label="LinkeIn: in/sofia-bernabei"
							/>
						</Link>
					</div>
					<div data-aos="zoom-in">
						<Link
							href="https://github.com/SOFIABERNABEICEJAS"
							target="_blank"
							underline="none"
							sx={{
								display: "flex",
								justifyContent: "center",
								m: 3,
							}}
						>
							<Chip
								sx={{
									p: 2,
									m: 2,
									fontSize: 16,
									":hover": {
										boxShadow: 2,
									},
								}}
								icon={<GitHubIcon fontSize="large" />}
								label="GitHub: /SOFIABERNABEI"
							/>
						</Link>
					</div>
					<div data-aos="zoom-in">
						<Link
							href="https://www.instagram.com/sofibernabei/"
							underline="none"
							sx={{
								display: "flex",
								justifyContent: "center",
								m: 3,
							}}
						>
							<Chip
								sx={{
									p: 2,
									m: 2,
									fontSize: 16,
									":hover": {
										boxShadow: 2,
									},
								}}
								icon={<InstagramIcon fontSize="large" />}
								label="Instagram: /sofibernabei"
							/>
						</Link>
					</div>
				</Grid>
				<Grid
					xs={12}
					md={6}
					lg={6}
					xl={6}
					sx={{
						display: "flex",
						flexDirection: "column",
						m: 2,
					}}
				>
					<FormControl
						component="form"
						action="https://formsubmit.co/sofiabernabeicejas@gmail.com"
						method="POST"
						noValidate
						autoComplete="off"
					>
						<Typography
							variant="h5"
							sx={{
								mb: 2,
								display: "flex",
								justifyContent: "center",
							}}
						>
							ESCRIBIME:
						</Typography>

						<TextField
							name="Nombre"
							id="filled-basic"
							label="Nombre"
							variant="filled"
							sx={{
								m: 1,
							}}
						/>
						<TextField
							name="Apellido"
							id="filled-basic"
							label="Apellido"
							variant="filled"
							sx={{
								m: 1,
							}}
						/>
						<TextField
							name="Email"
							id="filled-basic"
							label="Email"
							variant="filled"
							sx={{
								m: 1,
							}}
						/>
						<TextField
							name="Mensaje"
							id="filled-multiline-static"
							label="Mensaje"
							multiline
							rows={4}
							defaultValue="Escribe aquí tu mensaje ..."
							variant="filled"
							sx={{
								m: 1,
							}}
						/>
						<Button
							variant="contained"
							color="primary"
							sx={{
								m: 1,
							}}
						>
							Enviar
						</Button>
					</FormControl>
				</Grid>
			</Grid>
		</Grid>
	);
};
export default Contacto;
