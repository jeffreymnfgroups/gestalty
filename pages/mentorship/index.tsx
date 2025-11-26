"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import { MentorshipHero, MentorshipPrograms, MentorshipSuccess } from "@/container";

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
				<MentorshipPrograms />
				<MentorshipSuccess />
				<Ready />
			</Curve>
		</>
	);
}

