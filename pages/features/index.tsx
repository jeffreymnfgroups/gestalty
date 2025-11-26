"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import { FeaturesHero, FeaturesGrid, FeaturesComparison } from "@/container";

export default function Features() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor={"#fefefe"}>
				<FeaturesHero />
				<FeaturesGrid />
				<FeaturesComparison />
				<Ready />
			</Curve>
		</>
	);
}

