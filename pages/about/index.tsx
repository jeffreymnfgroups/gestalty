"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import {
	AboutHero,
	OriginStory,
	HiddenCrisis,
	QuestionThatChanged,
	GestaltySolution,
	WhatWeBuiltFor,
	AboutMission,
	AboutValues,
	FromIdeaToImpact,
	CompanyEvolution,
	DemonstratedExpertise,
	AboutTeam,
	JoinCognitiveRevolution,
} from "@/container";

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
				<OriginStory />
				<HiddenCrisis />
				<QuestionThatChanged />
				<GestaltySolution />
				<WhatWeBuiltFor />
				<AboutMission />
				<AboutValues />
				<FromIdeaToImpact />
				<CompanyEvolution />
				<DemonstratedExpertise />
				<AboutTeam />
				<JoinCognitiveRevolution />
				<Ready />
			</Curve>
		</>
	);
}

