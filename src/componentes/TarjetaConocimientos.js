import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const TarjetaConocimientos = ({ imagen, titulo }) => {
	return (
		<Card sx={{ m: 4, pt: 2, width: 150, height: 150, borderRadius: 500 }}>
			<CardMedia
				component="img"
				height="100"
				widht="40"
				src={imagen}
				alt={titulo}
			/>
			<CardContent>
				<Typography
					variant="h6"
					sx={{
						margin: 0,
						padding: 0,
						display: "flex",
						justifyContent: "center",
					}}
				>
					{titulo}
				</Typography>
			</CardContent>
		</Card>
	);
};
export default TarjetaConocimientos;
