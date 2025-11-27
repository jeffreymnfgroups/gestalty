"use client";
import { motion } from "framer-motion";
import { Brain, Target } from "lucide-react";

export default function AboutHero() {
	return (
		<section className="w-full min-h-screen bg-offWhite relative overflow-hidden neuron-pattern padding-y flex items-center">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-5xl">
					<h1 className="heading font-bold font-FoundersGrotesk text-darkBlue mb-6">
						Gestalty: The Precision-Engineered Learning Solution for Competitive Exam Mastery
					</h1>
					<p className="sub-paragraph text-primaryYellow font-semibold mb-8">
						Built for Learners, Backed by Science
					</p>
				</motion.div>
			</div>
		</section>
	);
}

