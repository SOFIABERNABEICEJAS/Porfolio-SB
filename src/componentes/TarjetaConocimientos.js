import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const TarjetaConocimientos = ({ imagen, titulo }) => {
	return (
		<Card sx={{ m: 2, pt: 2, width: 120, height: 110, objectFit: "contain" }}>
			<CardMedia
				component="img"
				height="60"
				objectFit="contain"
				src={imagen}
				alt={titulo}
				sx={{ objectFit: "contain" }}
			/>

			<CardContent>
				<Typography
					variant="h6"
					sx={{
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
