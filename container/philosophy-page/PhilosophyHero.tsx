"use client";
import { motion } from "framer-motion";
import { CognitiveVisual } from "@/components";

export default function PhilosophyHero() {
	return (
		<section className="w-full min-h-screen bg-darkBlue relative overflow-hidden padding-y flex items-center">
			<div className="absolute inset-0 opacity-20">
				<CognitiveVisual variant="network" />
			</div>
			<div className="max-w-[1600px] mx-auto padding-x relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-4xl">
					<h1 className="heading font-bold font-FoundersGrotesk text-offWhite mb-6">
						Philosophy & Science
					</h1>
					<p className="sub-paragraph text-offWhite/80 mb-8">
						At Gestalty, we don't guess what works. Every feature, every algorithm, and every
						learning path is built on decades of cognitive science research. We combine
						evidence-based methodologies with cutting-edge technology to create the most
						effective exam preparation system available.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

