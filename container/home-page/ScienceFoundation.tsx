"use client";
import { motion } from "framer-motion";
import { Brain, Zap, BarChart3, Users, Check } from "lucide-react";

const pillars = [
	{
		number: 1,
		title: "Cognitive Science Foundation",
		description: "Leverages psychology and proven pedagogy for science-backed learning",
		icon: Brain,
		bullets: [
			"Tracks learning with measurable metrics using metacognitive analytics and psychological theory",
			"Strengthened by advanced statistical tools",
			"Employs proven cognitive methods and strategic revision reminders",
			"Actively counters biases like Illusion of Fluency and Overconfidence Bias"
		]
	},
	{
		number: 2,
		title: "Adaptive Learning Experience",
		description: "Personalizes your journey using real-time feedback and smart algorithms",
		icon: Zap,
		bullets: [
			"Delivers a personalized journey adapting in real-time to strengths, weaknesses, and learning pace",
			"Smart algorithms adjust content and schedules based on performance",
			"Keeps progress efficient and motivation consistently high"
		]
	},
	{
		number: 3,
		title: "Data-Driven Insights",
		description: "Uses data analytics and statistical models to optimize study efficiency",
		icon: BarChart3,
		bullets: [
			"Provides real-time performance analytics and statistical scoring",
			"Mathematical models identify gaps between perceived and actual completion",
			"Compares actual vs. ideal performance, calibrating subjective effort to real progress with statistical precision"
		]
	},
	{
		number: 4,
		title: "Expert Mentorship",
		description: "Provides one-on-one guidance and accountability partnerships with experienced mentors",
		icon: Users,
		bullets: [
			"Offers personalized guidance from NEET/UPSC achievers and academic experts",
			"Mentors leverage your dashboard for precise, data-driven interventions",
			"Builds strategic partnerships for planning and ongoing motivational support"
		]
	}
];

export default function ScienceFoundation() {
	return (
		<section className="w-full bg-darkBlue padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 sm:mb-16 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-offWhite mb-4">
						A System Built on Science, Designed for Success
					</h2>
					<p className="text-lg sm:text-xl font-medium font-NeueMontreal text-primaryYellow mb-4">
						From Preparation to Mastery — Science Guides Your Path
					</p>
					<p className="paragraph text-offWhite/80 max-w-4xl mx-auto mb-8">
						Gestalty unites cognitive psychology, statistical analysis, and advanced pedagogy into a preparation system built around how your mind actually learns.
					</p>
					<h3 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold font-FoundersGrotesk text-offWhite">
						The Four Pillars of Gestalty
					</h3>
				</motion.div>

				{/* Pillars Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-4 xl:gap-6">
					{pillars.map((pillar, index) => {
						const Icon = pillar.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ scale: 1.02 }}
								className="bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-xl p-6 sm:p-8 hover:border-primaryYellow/50 hover:shadow-xl transition-all duration-300 group">
								{/* Pillar Number Badge */}
								<div className="flex items-center justify-between mb-4">
									<span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primaryYellow/20 flex items-center justify-center text-primaryYellow font-bold font-FoundersGrotesk text-lg sm:text-xl">
										{pillar.number}
									</span>
									<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primaryYellow/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<Icon size={32} className="text-primaryYellow" />
									</div>
								</div>

								{/* Title */}
								<h4 className="text-xl sm:text-2xl font-bold font-FoundersGrotesk text-offWhite mb-3">
									{pillar.title}
								</h4>

								{/* Description */}
								<p className="paragraph text-offWhite/80 mb-4">
									{pillar.description}
								</p>

								{/* Bullet Points */}
								<ul className="space-y-2.5">
									{pillar.bullets.map((bullet, bulletIndex) => (
										<li key={bulletIndex} className="flex items-start gap-2.5">
											<Check size={18} className="text-primaryYellow mt-0.5 flex-shrink-0" />
											<span className="text-sm sm:text-base text-offWhite/70 leading-relaxed">
												{bullet}
											</span>
										</li>
									))}
								</ul>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

