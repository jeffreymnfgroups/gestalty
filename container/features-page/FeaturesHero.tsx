"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function FeaturesHero() {
	return (
		<section className="w-full min-h-screen bg-offWhite relative overflow-hidden neuron-pattern padding-y flex items-center">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-4xl text-center mx-auto">
					<div className="flex justify-center mb-6">
						<Sparkles size={48} className="text-primaryYellow" />
					</div>
					<h1 className="heading font-bold font-FoundersGrotesk text-darkBlue mb-6">
						Powerful Features for Serious Aspirants
					</h1>
					<p className="sub-paragraph text-grayBlue mb-8">
						Every feature is designed with cognitive science principles to maximize your
						learning efficiency and exam performance.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

