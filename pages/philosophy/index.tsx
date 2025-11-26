"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import { PhilosophyHero, PhilosophyPrinciples, PhilosophyResearch } from "@/container";

export default function Philosophy() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor={"#fefefe"}>
				<PhilosophyHero />
				<PhilosophyPrinciples />
				<PhilosophyResearch />
				<Ready />
			</Curve>
		</>
	);
}

