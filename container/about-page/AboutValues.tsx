"use client";
import { motion } from "framer-motion";
import { FlaskConical, Target, Eye, Users, Heart, Sparkles } from "lucide-react";

const values = [
	{
		icon: FlaskConical,
		title: "Science Over Superstition",
		description: "Learning is not luck. It is measurable, improvable, and predictable. We apply adult learning principles to increase engagement and outcomes.",
	},
	{
		icon: Target,
		title: "Strategy Over Intensity",
		description: "Consistency and deliberate practice outperform brute-force studying. Strategic learners feel more in control of their preparation journey.",
	},
	{
		icon: Eye,
		title: "Clarity Over Chaos",
		description: "Students deserve to know exactly where they stand, every day. Clarity naturally improves psychological resilience.",
	},
	{
		icon: Users,
		title: "Equity Over Access Gaps",
		description: "High-quality, personalized preparation should be available to every student—regardless of geography or background.",
	},
	{
		icon: Heart,
		title: "Empowerment Over Pressure",
		description: "We design systems that reduce cognitive burden, build confidence, and support long-term growth.",
	},
];

export default function AboutValues() {
	return (
		<section className="w-full bg-beige/20 padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-6">
						Core Values — What We Stand For
					</h2>
					<h3 className="text-2xl font-semibold font-FoundersGrotesk text-darkBlue mb-4">
						Our Guiding Principles
					</h3>
					<div className="space-y-3 mb-8">
						<p className="paragraph text-primaryYellow font-semibold text-lg italic">
							"Don't just study harder. Study scientifically."
						</p>
						<p className="paragraph text-primaryYellow font-semibold text-lg italic">
							"Where your effort meets strategy."
						</p>
					</div>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-6 mb-12">
					{values.map((value, index) => {
						const Icon = value.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ y: -5, scale: 1.02 }}
								className="science-card p-6 rounded-xl">
								<div className="mb-4">
									<Icon
										size={32}
										className="text-primaryYellow"
									/>
								</div>
								<h3 className="text-xl font-semibold font-FoundersGrotesk text-darkBlue mb-3">
									{value.title}
								</h3>
								<p className="paragraph text-grayBlue">
									{value.description}
								</p>
							</motion.div>
						);
					})}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="bg-darkBlue p-8 rounded-xl text-center">
					<div className="flex justify-center mb-4">
						<Sparkles size={40} className="text-primaryYellow" />
					</div>
					<h3 className="text-2xl font-bold font-FoundersGrotesk text-offWhite mb-4">
						The Gestalty Advantage
					</h3>
					<p className="paragraph text-offWhite/80 max-w-3xl mx-auto">
						This psychology + academics integrated system mirrors real-world preparation challenges while offering data-driven, emotionally sustainable learning pathways that promote intrinsic excellence.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

