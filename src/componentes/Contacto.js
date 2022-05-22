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
				justifyContent: "center",

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
						display: "flex",
						justifyContent: "center",
						color: "#424242",
					}}
				>
					CONTACTO
				</Typography>
			</div>
			<Grid
				item
				xs={10}
				sm={10}
				md={10}
				lg={10}
				sx={{
					mt: 1,
					mb: 4,
					pb: 2,
					pt: 4,
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					boxShadow: 4,
					backgroundColor: "#fafafa",
				}}
			>
				<Grid
					sx={{
						m: 2,
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Typography
						variant="h6"
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
									":hover": {
										boxShadow: 1,
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
									":hover": {
										boxShadow: 1,
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
									":hover": {
										boxShadow: 1,
									},
								}}
								icon={<InstagramIcon fontSize="large" />}
								label="Instagram: /sofibernabei"
							/>
						</Link>
					</div>
				</Grid>
				<Grid xs={12} md={6} lg={6} xl={5}>
					<FormControl
						component="form"
						action="https://formsubmit.co/sofiabernabeicejas@gmail.com"
						method="POST"
						sx={{
							display: "flex",
							flexDirection: "column",
							m: 2,
						}}
						noValidate
						autoComplete="off"
					>
						<Typography
							variant="h6"
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
