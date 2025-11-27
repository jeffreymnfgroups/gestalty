"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import {
	MentorshipHero,
	MentorshipPowerOfGuidance,
	MentorshipDifferent,
	MentorshipFeatures,
	MentorshipVerifiedExcellence,
	MentorshipAdvancedTools,
	MentorshipHowItWorks,
	MentorshipParentalPartnership,
	MentorshipProvenOutcomes,
	MentorshipCTA,
} from "@/container";

export default function Mentorship() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor={"#fefefe"}>
				<MentorshipHero />
				<MentorshipPowerOfGuidance />
				<MentorshipDifferent />
				<MentorshipFeatures />
				<MentorshipVerifiedExcellence />
				<MentorshipAdvancedTools />
				<MentorshipHowItWorks />
				<MentorshipParentalPartnership />
				<MentorshipProvenOutcomes />
				<MentorshipCTA />
				<Ready />
			</Curve>
		</>
	);
}

