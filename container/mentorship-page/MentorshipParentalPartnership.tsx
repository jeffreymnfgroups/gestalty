"use client";
import { motion } from "framer-motion";
import { BarChart3, Users, MessageSquare } from "lucide-react";

const parentalFeatures = [
	{
		icon: BarChart3,
		title: "Comprehensive Dashboard",
		description: "Track consistency, plan adherence, and performance trends",
	},
	{
		icon: Users,
		title: "Mentor Collaboration",
		description: "Optional participation in periodic review sessions",
	},
	{
		icon: MessageSquare,
		title: "Transparent Communication",
		description: "Clear insights into learning behaviors and outcomes",
	},
];

export default function MentorshipParentalPartnership() {
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
						Parental Partnership
					</h2>
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-primaryYellow mb-6">
						Stay Connected to Your Child's Progress
					</h3>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
					{parentalFeatures.map((feature, index) => {
						const Icon = feature.icon;
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
										{feature.title}
									</h4>
									<p className="paragraph text-grayBlue">
										{feature.description}
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

