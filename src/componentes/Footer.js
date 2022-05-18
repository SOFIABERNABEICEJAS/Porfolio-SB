import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				backgroundColor: "#424242",
			}}
		>
			<IconButton
				sx={{
					ml: 2,
					mr: 2,
				}}
				aria-label="ir a linkedin"
				size="large"
				href="https://www.linkedin.com/in/sofia-bernabei/"
			>
				<LinkedInIcon fontSize="inherit" />
			</IconButton>
			<IconButton
				sx={{
					ml: 2,
					mr: 2,
				}}
				aria-label="ir a github"
				size="large"
				href="https://github.com/SOFIABERNABEICEJAS"
			>
				<GitHubIcon fontSize="inherit" />
			</IconButton>
			<IconButton
				sx={{
					ml: 2,
					mr: 2,
				}}
				aria-label="ir a instagram"
				size="large"
				href="https://www.instagram.com/sofibernabei/"
			>
				<InstagramIcon fontSize="inherit" />
			</IconButton>
		</Box>
	);
};
export default Footer;
