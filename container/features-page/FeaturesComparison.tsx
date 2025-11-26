"use client";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
	{
		feature: "AI-Powered Personalization",
		gestalty: true,
		traditional: false,
	},
	{
		feature: "Spaced Repetition System",
		gestalty: true,
		traditional: false,
	},
	{
		feature: "Adaptive Assessments",
		gestalty: true,
		traditional: false,
	},
	{
		feature: "Performance Analytics",
		gestalty: true,
		traditional: false,
	},
	{
		feature: "Expert Mentorship",
		gestalty: true,
		traditional: "Limited",
	},
	{
		feature: "Science-Based Methods",
		gestalty: true,
		traditional: false,
	},
];

export default function FeaturesComparison() {
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
						Why Choose Gestalty?
					</h2>
					<p className="paragraph text-grayBlue max-w-2xl mx-auto">
						See how Gestalty compares to traditional study methods.
					</p>
				</motion.div>

				<div className="bg-offWhite rounded-xl overflow-hidden shadow-lg">
					<div className="grid grid-cols-3 gap-0 border-b-2 border-darkBlue/10">
						<div className="p-6 font-semibold font-FoundersGrotesk text-darkBlue bg-primaryYellow/10">
							Feature
						</div>
						<div className="p-6 font-semibold font-FoundersGrotesk text-darkBlue text-center bg-primaryYellow/20">
							Gestalty
						</div>
						<div className="p-6 font-semibold font-FoundersGrotesk text-grayBlue text-center">
							Traditional Methods
						</div>
					</div>
					{comparisonData.map((row, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className="grid grid-cols-3 gap-0 border-b border-darkBlue/5 hover:bg-primaryYellow/5 transition-colors">
							<div className="p-6 paragraph text-darkBlue">
								{row.feature}
							</div>
							<div className="p-6 flex items-center justify-center">
								{row.gestalty === true ? (
									<Check size={24} className="text-primaryYellow" />
								) : (
									<X size={24} className="text-grayBlue/30" />
								)}
							</div>
							<div className="p-6 flex items-center justify-center">
								{row.traditional === true ? (
									<Check size={24} className="text-grayBlue/50" />
								) : row.traditional === "Limited" ? (
									<span className="small-text text-grayBlue">Limited</span>
								) : (
									<X size={24} className="text-grayBlue/30" />
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

