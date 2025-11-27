"use client";
import { motion } from "framer-motion";
import { Brain, Target, BarChart3, Quote } from "lucide-react";

const whatItMeans = [
	{
		icon: Brain,
		title: "A mindset",
		description: "Think like a strategist",
	},
	{
		icon: BarChart3,
		title: "A method",
		description: "Track like an analyst",
	},
	{
		icon: Target,
		title: "A measurable system",
		description: "Adapt like a top performer",
	},
];

export default function BusinessAcumenToLearningAcumen() {
	return (
		<section className="w-full bg-offWhite padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-6">
						The Philosophy: From Business Acumen to Learning Acumen
					</h2>
					<p className="paragraph text-grayBlue max-w-4xl mx-auto mb-8">
						Learning Acumen is not a tool. It's a philosophy turned into a system.
					</p>
					<p className="paragraph text-grayBlue max-w-4xl mx-auto mb-8">
						Inspired by the concept of Business Acumen—the ability to make sound decisions and drive organization value—we introduce the idea of Learning Acumen: the learner's ability to strategically allocate time, manage mental resources, adapt to feedback, and continuously align their actions with long-term learning goals.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 max-w-5xl mx-auto">
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue mb-6 text-center">
						The Strategic Parallel
					</h3>
					<div className="bg-darkBlue/5 border-l-4 border-primaryYellow p-8 rounded-r-xl">
						<p className="paragraph text-grayBlue">
							Support functions in business like Finance and HR often struggle to prove their value because they don't align with outcomes. Similarly, students who focus only on reading or note-making—without connecting it to retention, revision, or performance—experience frustration and stagnation. That gap is what this system seeks to close.
						</p>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12">
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue mb-8 text-center">
						What It Means
					</h3>
					<p className="paragraph text-grayBlue max-w-3xl mx-auto text-center mb-8">
						Learning Acumen is:
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 max-w-5xl mx-auto">
						{whatItMeans.map((item, index) => {
							const Icon = item.icon;
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									whileHover={{ y: -5, scale: 1.02 }}
									className="science-card p-6 rounded-xl text-center">
									<div className="mb-4 flex justify-center">
										<Icon size={40} className="text-primaryYellow" />
									</div>
									<h4 className="text-xl font-semibold font-FoundersGrotesk text-darkBlue mb-2">
										{item.title}
									</h4>
									<p className="paragraph text-grayBlue">
										{item.description}
									</p>
								</motion.div>
							);
						})}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto text-center">
					<div className="bg-darkBlue/5 border-l-4 border-primaryYellow p-8 rounded-r-xl">
						<div className="flex items-start gap-4">
							<Quote size={32} className="text-primaryYellow flex-shrink-0 mt-1" />
							<div>
								<p className="paragraph text-grayBlue text-lg italic">
									When learners operate this way, success becomes the natural byproduct of execution.
								</p>
								<p className="paragraph text-grayBlue mt-4">
									It transforms aspirants from passive readers into active learners. In doing so, it bridges the gap between potential and performance.
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

