"use client";
import { motion } from "framer-motion";
import { Search, Lightbulb } from "lucide-react";

export default function OriginStory() {
	return (
		<section className="w-full bg-darkBlue padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12">
					<div className="flex justify-center gap-4 mb-6">
						<Search size={48} className="text-primaryYellow" />
						<Lightbulb size={48} className="text-primaryYellow" />
					</div>
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-offWhite mb-4">
						The Problem We Diagnosed. The System We Designed.
					</h2>
					<p className="text-xl font-medium font-NeueMontreal text-primaryYellow">
						The Blueprint Behind Gestalty
					</p>
				</motion.div>
			</div>
		</section>
	);
}

