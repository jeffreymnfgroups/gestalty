"use client";
import { motion } from "framer-motion";
import {
	TrendingUp,
	BarChart3,
	AlertTriangle,
	FileCheck,
	Target,
	CheckCircle2,
} from "lucide-react";

const metrics = [
	{
		id: 1,
		name: "Topic Progression Tracker",
		description: "Monitor completion rates and mastery levels across all subjects and topics in real-time.",
		icon: TrendingUp,
	},
	{
		id: 2,
		name: "Effort Quality Index",
		description: "Measure the effectiveness of your study sessions—balanced effort across all learning stages delivers 68% better progress than reading-only approaches.",
		icon: BarChart3,
		highlight: "68% better progress",
	},
	{
		id: 3,
		name: "Duplication & Triplication Alerts",
		description: "Automatic detection prevents wasted effort on already-mastered content, redirecting focus to gaps.",
		icon: AlertTriangle,
	},
	{
		id: 4,
		name: "Syntax Alignment Checker",
		description: "Ensure your preparation language matches exam requirements and answer-writing standards.",
		icon: FileCheck,
	},
	{
		id: 5,
		name: "Completion Overestimation Ratio (COR)",
		description: "Weekly audits grade your learning acquisition process. If Actual learning % < 50%, trigger emergency practice and revision protocols.",
		icon: Target,
	},
];

const implementationPoints = [
	"Weekly progress audits for every topic",
	"Emergency alerts when actual completion falls behind perception",
	"Strategic recommendations to maximize lowest-weighted activities",
];

export default function AdvancedAnalyticsEngine() {
	return (
		<section className="w-full bg-offWhite padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-4">
						Intelligent Metrics That Drive Strategic Decisions
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 mb-12">
					{metrics.map((metric, index) => {
						const Icon = metric.icon;
						return (
							<motion.div
								key={metric.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ y: -5, scale: 1.02 }}
								className="bg-offWhite border-2 border-grayBlue/20 hover:border-primaryYellow/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
								<div className="mb-4">
									<div className="w-12 h-12 rounded-lg bg-primaryYellow/10 border border-primaryYellow/30 flex items-center justify-center group-hover:bg-primaryYellow/20 transition-colors">
										<Icon
											size={24}
											className="text-primaryYellow group-hover:scale-110 transition-transform duration-300"
										/>
									</div>
								</div>
								<h3 className="text-xl font-semibold font-FoundersGrotesk text-darkBlue mb-3">
									Metric {metric.id}: {metric.name}
								</h3>
								<p className="paragraph text-grayBlue mb-3">
									{metric.description}
								</p>
								{metric.highlight && (
									<div className="mt-3 inline-block px-4 py-2 rounded-full bg-primaryYellow/10 border border-primaryYellow/30">
										<span className="text-sm font-semibold text-primaryYellow">
											{metric.highlight}
										</span>
									</div>
								)}
							</motion.div>
						);
					})}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="bg-beige/20 rounded-xl p-8 border-2 border-grayBlue/20">
					<h3 className="text-2xl font-bold font-FoundersGrotesk text-darkBlue mb-6 flex items-center gap-3">
						<Target className="text-primaryYellow" size={28} />
						Practical Implementation:
					</h3>
					<ul className="space-y-4">
						{implementationPoints.map((point, index) => (
							<motion.li
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
								className="flex items-start gap-3">
								<CheckCircle2
									size={20}
									className="text-primaryYellow mt-1 flex-shrink-0"
								/>
								<span className="paragraph text-grayBlue">{point}</span>
							</motion.li>
						))}
					</ul>
				</motion.div>
			</div>
		</section>
	);
}

