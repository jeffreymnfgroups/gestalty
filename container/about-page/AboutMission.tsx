"use client";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function AboutMission() {
	return (
		<section className="w-full bg-darkBlue padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-offWhite mb-8">
						Vision & Mission
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 mb-12">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-xl p-8 hover:border-primaryYellow/50 transition-all duration-300">
						<div className="mb-6">
							<Eye
								size={40}
								className="text-primaryYellow"
							/>
						</div>
						<h3 className="text-2xl font-semibold font-FoundersGrotesk text-offWhite mb-4">
							Vision: Creating Equitable Excellence
						</h3>
						<p className="paragraph text-offWhite/80">
							We build a learning ecosystem where every aspirant can access personalized, research-validated preparation tools that unleash true potential, enable measurable excellence, foster cognitive mastery, transform opportunity into achievement.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-xl p-8 hover:border-primaryYellow/50 transition-all duration-300">
						<div className="mb-6">
							<Target
								size={40}
								className="text-primaryYellow"
							/>
						</div>
						<h3 className="text-2xl font-semibold font-FoundersGrotesk text-offWhite mb-4">
							Mission: From Fragmentation to Integration
						</h3>
						<p className="paragraph text-offWhite/80">
							We transform fragmented learning behaviors into strategic metrics that foster cohesive, outcome-driven study experiences—consolidating acquired knowledge into clear, actionable direction at every stage of the learning journey.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

