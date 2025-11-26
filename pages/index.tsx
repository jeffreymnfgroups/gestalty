"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import { About, Hero, FeaturesPreview, ScienceApproach, SocialProof } from "@/container";

export default function Home() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor={"#fefefe"}>
				<Hero />
				<FeaturesPreview />
				<ScienceApproach />
				<About />
				<SocialProof />
				<Ready />
			</Curve>
		</>
	);
}
