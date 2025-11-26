"use client";
import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Zap } from "lucide-react";

const values = [
	{
		icon: CheckCircle,
		title: "Excellence",
		description: "We strive for the highest standards in everything we do, from content quality to user experience.",
	},
	{
		icon: Users,
		title: "Student-Centric",
		description: "Every decision we make is driven by what's best for our students' success and learning outcomes.",
	},
	{
		icon: Award,
		title: "Scientific Rigor",
		description: "We base our methods on proven research and continuously validate our approaches with data.",
	},
	{
		icon: Zap,
		title: "Innovation",
		description: "We constantly explore new technologies and methodologies to improve learning effectiveness.",
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
					className="mb-16 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-4">
						Our Values
					</h2>
					<p className="paragraph text-grayBlue max-w-2xl mx-auto">
						These principles guide everything we do and shape how we serve our community.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
			</div>
		</section>
	);
}

