"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import {
	HowItWorksHero,
	FourStepJourney,
	DailyRoutine,
	WhyChooseGestalty,
	ProvenOutcomes,
	GetStarted,
} from "@/container";

export default function HowItWorks() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor={"#fefefe"}>
				<HowItWorksHero />
				<FourStepJourney />
				<DailyRoutine />
				<WhyChooseGestalty />
				<ProvenOutcomes />
				<GetStarted />
				<Ready />
			</Curve>
		</>
	);
}

