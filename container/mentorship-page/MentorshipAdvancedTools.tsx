"use client";
import { motion } from "framer-motion";
import { Calendar, TrendingUp, Bell } from "lucide-react";

const mentorTools = [
	{
		icon: Calendar,
		title: "Bookable Sessions",
		description: "Calendar-integrated scheduling for 30 or 60-minute consultations",
	},
	{
		icon: TrendingUp,
		title: "Student Progress Tracker",
		description: "Real-time analytics on effort, time investment, consistency, and revision adherence",
	},
	{
		icon: Bell,
		title: "Intelligent Feedback Dashboard",
		description: "Automated alerts for student deviation, effort decline, or revision gaps",
	},
];

export default function MentorshipAdvancedTools() {
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
						Advanced Mentor Tools & Technology
					</h2>
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-primaryYellow mb-6">
						Seamless Session Management
					</h3>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
					{mentorTools.map((tool, index) => {
						const Icon = tool.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.15 }}
								whileHover={{ y: -5, scale: 1.02 }}
								className="science-card p-8 rounded-xl">
								<div className="mb-6">
									<div className="w-16 h-16 rounded-xl bg-primaryYellow/20 flex items-center justify-center mb-4">
										<Icon size={32} className="text-primaryYellow" />
									</div>
									<h4 className="text-xl font-semibold font-FoundersGrotesk text-darkBlue mb-3">
										{tool.title}
									</h4>
									<p className="paragraph text-grayBlue">
										{tool.description}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

