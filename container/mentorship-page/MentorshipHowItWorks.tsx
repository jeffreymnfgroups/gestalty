"use client";
import { motion } from "framer-motion";
import { Database, Brain, Target } from "lucide-react";

const feedbackTiers = [
	{
		icon: Database,
		tier: "Tier 1",
		title: "Real-Time Data Integration",
		description: "Continuous assessment data enables personalized, immediate feedback",
	},
	{
		icon: Brain,
		tier: "Tier 2",
		title: "Targeted Psychological Interventions",
		description: "Strategy adjustments based on proven cognitive science and experimental results",
	},
	{
		icon: Target,
		tier: "Tier 3",
		title: "Long-Term Adaptive Learning",
		description: "Development of metacognition and deliberate practice for sustained excellence",
	},
];

export default function MentorshipHowItWorks() {
	return (
		<section className="w-full bg-darkBlue padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-offWhite mb-6">
						How Gestalty Mentorship Works
					</h2>
					<p className="paragraph text-offWhite/80 max-w-4xl mx-auto mb-8">
						Gestalty isn't just a productivity tracker—it's your cognitive partner. We connect effort to outcomes, psychology to progress, mentors to mentees, and parents to purpose. It's learning made human—measurable, meaningful, and manageable.
					</p>
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-primaryYellow mb-8">
						3-Tier Feedback Loop
					</h3>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
					{feedbackTiers.map((tier, index) => {
						const Icon = tier.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.15 }}
								whileHover={{ y: -5, scale: 1.02 }}
								className="bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-xl p-8 hover:border-primaryYellow/50 transition-all duration-300 relative">
								<div className="absolute top-4 right-4">
									<span className="px-3 py-1 bg-primaryYellow/20 text-primaryYellow text-sm font-bold font-FoundersGrotesk rounded-full">
										{tier.tier}
									</span>
								</div>
								<div className="mb-6">
									<div className="w-16 h-16 rounded-xl bg-primaryYellow/20 flex items-center justify-center mb-4">
										<Icon size={32} className="text-primaryYellow" />
									</div>
									<h4 className="text-xl font-semibold font-FoundersGrotesk text-offWhite mb-3">
										{tier.title}
									</h4>
									<p className="paragraph text-offWhite/80">
										{tier.description}
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

