"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

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
				<div className="w-full min-h-screen padding-x py-[120px] flex items-center justify-center">
					<div className="max-w-[1200px] mx-auto text-center">
						<h1 className="text-6xl font-bold font-FoundersGrotesk text-darkBlue mb-6">
							How It Works
						</h1>
						<p className="text-xl font-NeueMontreal text-darkBlue/70">
							Learn how Gestalty transforms your exam preparation with science-driven learning.
						</p>
					</div>
				</div>
				<Ready />
			</Curve>
		</>
	);
}

