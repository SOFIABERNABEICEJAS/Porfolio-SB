import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import Link from "@mui/material/Link";

const TarjetaProyecto = ({ imagen, titulo, link }) => {
	return (
		<Link
			href={link}
			color="inherit"
			underline="none"
			sx={{
				minWidth: 275,
				m: 4,
				boxShadow: 1,
				":hover": {
					boxShadow: 3,
				},
			}}
		>
			<div data-aos="zoom-in">
				<Card>
					<CardMedia component="img" height="140" src={imagen} alt={titulo} />
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
			</div>
		</Link>
	);
};
export default TarjetaProyecto;
