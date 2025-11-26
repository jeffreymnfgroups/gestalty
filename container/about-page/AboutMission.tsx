"use client";
import { motion } from "framer-motion";
import { Lightbulb, Eye, Rocket } from "lucide-react";

const missionPoints = [
	{
		icon: Lightbulb,
		title: "Mission",
		description: "To empower every aspirant with science-driven learning tools that maximize their potential and transform exam preparation from a challenge into a systematic journey to success.",
	},
	{
		icon: Eye,
		title: "Vision",
		description: "To become the world's most trusted cognitive learning platform, where every student achieves their academic goals through evidence-based, personalized study systems.",
	},
	{
		icon: Rocket,
		title: "Purpose",
		description: "We believe that with the right tools, methodology, and support, every serious aspirant can excel. Our purpose is to make elite-level preparation accessible to all.",
	},
];

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
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-offWhite mb-4">
						Our Mission, Vision & Purpose
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{missionPoints.map((point, index) => {
						const Icon = point.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								className="bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-xl p-8 hover:border-primaryYellow/50 transition-all duration-300">
								<div className="mb-6">
									<Icon
										size={40}
										className="text-primaryYellow"
									/>
								</div>
								<h3 className="text-xl font-semibold font-FoundersGrotesk text-offWhite mb-4">
									{point.title}
								</h3>
								<p className="paragraph text-offWhite/80">
									{point.description}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

