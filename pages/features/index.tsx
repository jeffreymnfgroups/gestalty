"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import {
	FeaturesHero,
	ValueProposition,
	FeaturesGrid,
	BarriersWeBreak,
	AdvancedAnalyticsEngine,
	WhoItsFor,
	WhyGestaltyDifferent,
	FeaturesComparison,
	FinalCTA,
} from "@/container";

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
				<ValueProposition />
				<FeaturesGrid />
				<BarriersWeBreak />
				<AdvancedAnalyticsEngine />
				<WhoItsFor />
				<WhyGestaltyDifferent />
				<FeaturesComparison />
				<FinalCTA />
				<Ready />
			</Curve>
		</>
	);
}

