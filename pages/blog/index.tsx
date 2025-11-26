"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

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
				<div className="w-full min-h-screen padding-x py-[120px] flex items-center justify-center">
					<div className="max-w-[1200px] mx-auto text-center">
						<h1 className="text-6xl font-bold font-FoundersGrotesk text-darkBlue mb-6">
							Blog
						</h1>
						<p className="text-xl font-NeueMontreal text-darkBlue/70">
							Insights, tips, and strategies for exam preparation success.
						</p>
					</div>
				</div>
				<Ready />
			</Curve>
		</>
	);
}

