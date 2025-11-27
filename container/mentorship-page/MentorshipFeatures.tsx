"use client";
import { motion } from "framer-motion";
import { User, BookOpen, PenTool, BarChart3, Heart } from "lucide-react";

const mentorshipFeatures = [
	{
		icon: User,
		title: "One-on-One Strategic Guidance",
		subtitle: "Individual Attention for Every Aspirant",
		features: [
			"Weekly 1:1 video/call sessions tailored to your unique challenges",
			"Strategic planning powered by your real-time learning data",
			"Honest feedback and immediate course correction",
			"Continuous availability through secure platform messaging",
			"Personalized attention that adapts to your evolving needs",
		],
	},
	{
		icon: BookOpen,
		title: "Comprehensive Study Plan Development",
		subtitle: "Your Custom Roadmap to Success",
		features: [
			"Customized syllabus coverage strategy with realistic, achievable timelines",
			"Prioritized subject sequencing aligned with exam weightage and patterns",
			"Daily, weekly, and monthly accountability milestones",
			"Flexible frameworks that adapt as you progress",
			"Strategic pacing that considers your personal constraints",
		],
	},
	{
		icon: PenTool,
		title: "Exam-Specific Skill Building",
		subtitle: "Master the Art of Performance",
		features: [
			"Answer-writing practice with detailed, actionable evaluation",
			"Mains-specific strategy development and optimization",
			"Mock interview preparation with comprehensive feedback",
			"Current affairs integration and application guidance",
			"Problem-solving strategy refinement for maximum efficiency",
		],
	},
	{
		icon: BarChart3,
		title: "Progress Monitoring & Data Intelligence",
		subtitle: "Insights You Can't See Alone",
		features: [
			"Weekly performance evaluation using advanced platform analytics",
			"Trend analysis identifying improvement patterns or plateaus",
			"Early warning detection of burnout, inefficiency, or strategy drift",
			"Data-driven recommendations for tactical adjustments",
			"Milestone celebration and momentum building",
		],
	},
	{
		icon: Heart,
		title: "Motivational & Emotional Support",
		subtitle: "Resilience for the Long Journey",
		features: [
			"Encouragement and perspective during challenging phases",
			"Guidance from mentors who've experienced the same struggles",
			"Mental health check-ins and stress management strategies",
			"Realistic expectation-setting to prevent overwhelm",
			"Community connection with fellow aspirants on similar paths",
		],
	},
];

export default function MentorshipFeatures() {
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
						Comprehensive Mentorship Features
					</h2>
				</motion.div>

				<div className="space-y-8">
					{mentorshipFeatures.map((feature, index) => {
						const Icon = feature.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="science-card p-8 rounded-xl">
								<div className="flex flex-col md:flex-row gap-6">
									<div className="flex-shrink-0">
										<div className="w-16 h-16 rounded-xl bg-primaryYellow/20 flex items-center justify-center">
											<Icon size={32} className="text-primaryYellow" />
										</div>
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-semibold font-FoundersGrotesk text-darkBlue mb-2">
											{feature.title}
										</h3>
										<p className="paragraph text-primaryYellow font-semibold mb-4">
											{feature.subtitle}
										</p>
										<ul className="space-y-3">
											{feature.features.map((item, itemIndex) => (
												<li key={itemIndex} className="flex items-start gap-3">
													<span className="text-primaryYellow mt-2 flex-shrink-0">•</span>
													<span className="small-text text-grayBlue leading-relaxed">{item}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

