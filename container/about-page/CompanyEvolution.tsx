"use client";
import { motion } from "framer-motion";
import { Search, Layers, Cog, Rocket, CheckCircle2 } from "lucide-react";

const phases = [
	{
		phase: "Phase 1 — The Research",
		duration: "3 Years",
		icon: Search,
		description: "Identified the psychological and behavioral gaps in competitive exam preparation through extensive field research and student interviews.",
	},
	{
		phase: "Phase 2 — The Framework",
		duration: "2 Years",
		icon: Layers,
		description: "Developed the Gestalty Cognitive Learning Model: Tracking readiness scores, Measuring retention patterns, Monitoring discipline and consistency, Assessing conceptual strength",
	},
	{
		phase: "Phase 3 — The System",
		duration: "1 Year",
		icon: Cog,
		description: "Built a fully integrated platform combining: Real-time analytics, Behavioral scoring algorithms, Strategic revision tracking, Mentor-enabled guidance systems",
	},
	{
		phase: "Phase 4 — The Impact",
		duration: "Present",
		icon: Rocket,
		description: "Aspirants now graduate from passive learners to: Strategic thinkers who plan with precision, Resilient performers who overcome setbacks, Data-backed achievers who measure progress objectively",
	},
];

export default function CompanyEvolution() {
	return (
		<section className="w-full bg-darkBlue padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-offWhite mb-4">
						Company Evolution & Milestones
					</h2>
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-offWhite mb-6">
						The Journey to Excellence
					</h3>
				</motion.div>

				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primaryYellow/30 hidden md:block" />

					<div className="space-y-12">
						{phases.map((phase, index) => {
							const Icon = phase.icon;
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -30 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.2 }}
									className="relative flex gap-8 items-start">
									{/* Timeline dot */}
									<div className="hidden md:flex flex-shrink-0 w-16 h-16 items-center justify-center">
										<div className="w-16 h-16 rounded-full bg-primaryYellow/20 border-4 border-primaryYellow flex items-center justify-center z-10">
											<Icon size={24} className="text-primaryYellow" />
										</div>
									</div>

									<div className="flex-1 bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-xl p-8 hover:border-primaryYellow/50 transition-all duration-300">
										<div className="flex items-center gap-4 mb-4 md:hidden">
											<div className="w-12 h-12 rounded-full bg-primaryYellow/20 border-2 border-primaryYellow flex items-center justify-center">
												<Icon size={20} className="text-primaryYellow" />
											</div>
											<div>
												<h3 className="text-2xl font-bold font-FoundersGrotesk text-offWhite">
													{phase.phase}
												</h3>
												<p className="paragraph text-primaryYellow font-semibold">
													{phase.duration}
												</p>
											</div>
										</div>
										<div className="hidden md:block mb-4">
											<h3 className="text-2xl font-bold font-FoundersGrotesk text-offWhite mb-2">
												{phase.phase}
											</h3>
											<p className="paragraph text-primaryYellow font-semibold">
												{phase.duration}
											</p>
										</div>
										<p className="paragraph text-offWhite/80 whitespace-pre-line">
											{phase.description}
										</p>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

