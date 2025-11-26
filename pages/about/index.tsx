"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import { AboutHero, AboutMission, AboutTeam, AboutValues } from "@/container";

export default function About() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor={"#fefefe"}>
				<AboutHero />
				<AboutMission />
				<AboutValues />
				<AboutTeam />
				<Ready />
			</Curve>
		</>
	);
}

