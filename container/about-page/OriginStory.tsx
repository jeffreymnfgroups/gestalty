"use client";
import { motion } from "framer-motion";
import { Search, Lightbulb } from "lucide-react";

export default function OriginStory() {
	return (
		<section className="w-full bg-darkBlue py-20 lg:py-24 rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto px-8 lg:px-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12">
					<div className="flex justify-center gap-6 mb-8">
						<div className="bg-primaryYellow/10 rounded-full p-5">
							<Search className="w-16 h-16 text-primaryYellow" />
						</div>
						<div className="bg-primaryYellow/10 rounded-full p-5">
							<Lightbulb className="w-16 h-16 text-primaryYellow" />
						</div>
					</div>
					<h2 className="text-4xl lg:text-5xl font-bold font-FoundersGrotesk text-offWhite mb-6">
						The Problem We Diagnosed. The System We Designed.
					</h2>
					<p className="text-2xl lg:text-3xl font-medium font-NeueMontreal text-primaryYellow">
						The Blueprint Behind Gestalty
					</p>
				</motion.div>
			</div>
		</section>
	);
}

