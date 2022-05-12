import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Contacto = () => {
	return (
		<Grid
			container
			sx={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Grid
				item
				xs={10}
				sx={{
					mt: 14,
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					boxShadow: 1,
				}}
			>
				<Box
					component="form"
					sx={{
						display: "flex",
						flexDirection: "column",
						m: 1,
					}}
					noValidate
					autoComplete="off"
				>
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
						defaultValue="Esquibe tu mensaje aquí..."
						variant="filled"
						sx={{
							m: 1,
						}}
					/>
					<Button variant="contained" color="inherit">
						Enviar
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
};
export default Contacto;
