"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import {
	BlogHero,
	BlogFeatured,
	BlogGrid,
	BlogCategories,
	BlogNewsletter,
} from "@/container";

export default function Blog() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor={"#fefefe"}>
				<BlogHero />
				<BlogFeatured />
				<BlogGrid />
				<BlogCategories />
				<BlogNewsletter />
				<Ready />
			</Curve>
		</>
	);
}

