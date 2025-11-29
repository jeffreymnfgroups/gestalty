"use client";
import { motion } from "framer-motion";
import { Brain, Target } from "lucide-react";

export default function AboutHero() {
	return (
		<section className="w-full min-h-screen bg-offWhite relative overflow-hidden py-24 lg:py-32 flex items-center border-b-2 border-darkBlue/10">
			<div className="max-w-[1600px] mx-auto px-8 lg:px-16">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-6xl">
					<h1 className="text-6xl lg:text-7xl font-bold font-FoundersGrotesk text-darkBlue leading-tight mb-6">
						Gestalty: The Precision-Engineered Learning Solution for Competitive Exam Mastery
					</h1>
					<p className="text-2xl lg:text-3xl text-primaryYellow font-semibold mb-4">
						Built for Learners, Backed by Science
					</p>
				</motion.div>
			</div>
		</section>
	);
}

