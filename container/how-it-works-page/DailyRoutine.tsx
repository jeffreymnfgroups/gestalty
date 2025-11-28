"use client";
import { motion } from "framer-motion";
import { Sun, SunMedium, Moon, Star } from "lucide-react";

const timeSlots = [
	{
		time: "Morning",
		icon: Sun,
		activities: [
			"Review dashboard: yesterday's progress and today's goals",
			"Focused reading with real-time feedback",
		],
	},
	{
		time: "Afternoon",
		icon: SunMedium,
		activities: [
			"Practice sessions with instant analysis",
			"Target weak areas through challenge exercises",
			"Micro-learning with bite-sized modules",
		],
	},
	{
		time: "Evening",
		icon: Moon,
		activities: [
			"Weekly mentor session: personalized guidance",
			"Peer discussion for accountability",
			"Reflect on daily progress and improvements",
		],
	},
	{
		time: "Night",
		icon: Star,
		activities: [
			"Metacognitive reflection: assess what worked and adjust plans",
			"Review consistency scores and AI recommendations",
		],
	},
];

const routineAnimations = {
	container: {
		initial: { opacity: 0 },
		whileInView: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
		viewport: { once: true, margin: "-100px" },
	},
	item: {
		initial: { opacity: 0, x: -20 },
		whileInView: { opacity: 1, x: 0, transition: { duration: 0.5 } },
	},
};

export default function DailyRoutine() {
	return (
		<section className="w-full padding-x py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-lightBeige to-offWhite">
			<div className="max-w-[1200px] mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12 sm:mb-16"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-FoundersGrotesk text-darkBlue mb-4">
						Your Daily Routine with Gestalty: Structured & Efficient
					</h2>
					<p className="text-lg sm:text-xl font-NeueMontreal text-darkBlue/70">
						A Day in the Life with Gestalty
					</p>
				</motion.div>

				<motion.div
					variants={routineAnimations.container}
					initial="initial"
					whileInView="whileInView"
					viewport={routineAnimations.container.viewport}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
				>
					{timeSlots.map((slot, index) => {
						const Icon = slot.icon;
						return (
						<motion.div
							key={slot.time}
							variants={routineAnimations.item}
							viewport={{ once: true }}
							className="bg-white rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-300 border border-darkBlue/5 hover:border-primaryYellow/30"
						>
								<div className="flex items-center gap-3 mb-4">
									<div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primaryYellow/30 to-primaryYellow/10 rounded-full flex items-center justify-center">
										<Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primaryYellow" strokeWidth={2.5} />
									</div>
									<h3 className="text-xl sm:text-2xl font-bold font-FoundersGrotesk text-darkBlue">
										{slot.time}
									</h3>
								</div>
								<ul className="space-y-3">
									{slot.activities.map((activity, activityIndex) => (
										<li key={activityIndex} className="flex items-start gap-2 text-darkBlue/70 font-NeueMontreal">
											<span className="text-primaryYellow mt-1.5 flex-shrink-0">•</span>
											<span className="text-sm sm:text-base leading-relaxed">{activity}</span>
										</li>
									))}
								</ul>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}

