"use client";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function AboutMission() {
	return (
		<section className="w-full bg-darkBlue py-20 lg:py-28 rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto px-8 lg:px-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center">
					<h2 className="text-4xl lg:text-5xl font-bold font-FoundersGrotesk text-offWhite mb-12">
						Vision & Mission
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-10 mb-12">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="bg-white/10 border-2 border-primaryYellow/30 rounded-2xl p-10 hover:border-primaryYellow hover:bg-white/15 transition-all duration-300">
						<div className="mb-6">
							<Eye
								className="w-14 h-14 text-primaryYellow"
							/>
						</div>
						<h3 className="text-2xl lg:text-3xl font-semibold font-FoundersGrotesk text-offWhite mb-5">
							Vision: Creating Equitable Excellence
						</h3>
						<p className="text-lg lg:text-xl text-offWhite/80 leading-relaxed">
							We build a learning ecosystem where every aspirant can access personalized, research-validated preparation tools that unleash true potential, enable measurable excellence, foster cognitive mastery, transform opportunity into achievement.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="bg-white/10 border-2 border-primaryYellow/30 rounded-2xl p-10 hover:border-primaryYellow hover:bg-white/15 transition-all duration-300">
						<div className="mb-6">
							<Target
								className="w-14 h-14 text-primaryYellow"
							/>
						</div>
						<h3 className="text-2xl lg:text-3xl font-semibold font-FoundersGrotesk text-offWhite mb-5">
							Mission: From Fragmentation to Integration
						</h3>
						<p className="text-lg lg:text-xl text-offWhite/80 leading-relaxed">
							We transform fragmented learning behaviors into strategic metrics that foster cohesive, outcome-driven study experiences—consolidating acquired knowledge into clear, actionable direction at every stage of the learning journey.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

