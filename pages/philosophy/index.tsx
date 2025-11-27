"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import {
	PhilosophyHero,
	WhyEffortDoesntEqualProgress,
	LearningAcumenSystem,
	PlatformEthos,
	PhilosophyForAdultLearners,
	BusinessAcumenToLearningAcumen,
	ScienceBehindApproach,
	LiveLearningEngine,
	ExpectedOutcomes,
	CallToAction,
} from "@/container";

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
				<WhyEffortDoesntEqualProgress />
				<LearningAcumenSystem />
				<PlatformEthos />
				<PhilosophyForAdultLearners />
				<BusinessAcumenToLearningAcumen />
				<ScienceBehindApproach />
				<LiveLearningEngine />
				<ExpectedOutcomes />
				<CallToAction />
				<Ready />
			</Curve>
		</>
	);
}

