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
			<Grid
				item
				xs={10}
				sx={{
					mt: 4,
					mb: 4,
					pb: 2,
					pt: 2,
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					boxShadow: 2,
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
							display: "flex",
							justifyContent: "center",
						}}
					>
						CONTACTAME:
					</Typography>

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
				</Grid>
				<Grid
					component="form"
					xs={12}
					md={5}
					lg={5}
					xl={5}
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
							display: "flex",
							justifyContent: "center",
						}}
					>
						ESCRIBEME:
					</Typography>
					<TextField
						id="filled-basic"
						label="Nombre"
						variant="filled"
						sx={{
							m: 1,
						}}
					/>
					<TextField
						id="filled-basic"
						label="Apellido"
						variant="filled"
						sx={{
							m: 1,
						}}
					/>
					<TextField
						id="filled-basic"
						label="Email"
						variant="filled"
						sx={{
							m: 1,
						}}
					/>
					<TextField
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
				</Grid>
			</Grid>
		</Grid>
	);
};
export default Contacto;
