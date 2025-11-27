"use client";
import { motion } from "framer-motion";
import { Award, Clock, BookOpen, GraduationCap, ShieldCheck } from "lucide-react";

const qualificationStandards = [
	{
		icon: Award,
		title: "Documented Success",
		description: "Verified exam achievement with rank cards and credentials",
	},
	{
		icon: Clock,
		title: "Recent Experience",
		description: "Success within the last 3–5 years for relevant insights",
	},
	{
		icon: BookOpen,
		title: "Subject Expertise",
		description: "Deep knowledge in specific domains and topics",
	},
	{
		icon: GraduationCap,
		title: "Professional Training",
		description: "Completion of Gestalty's comprehensive mentor program",
	},
	{
		icon: ShieldCheck,
		title: "Background Verification",
		description: "Thorough screening and validation process",
	},
];

export default function MentorshipVerifiedExcellence() {
	return (
		<section className="w-full bg-darkBlue padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-offWhite mb-4">
						Our Mentors: Verified Excellence
					</h2>
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-primaryYellow mb-6">
						Rigorous Qualification Standards
					</h3>
					<p className="paragraph text-offWhite/80 max-w-3xl mx-auto">
						Every Gestalty mentor meets stringent criteria:
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
					{qualificationStandards.map((standard, index) => {
						const Icon = standard.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ y: -5, scale: 1.02 }}
								className="bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-xl p-6 hover:border-primaryYellow/50 transition-all duration-300">
								<div className="mb-4">
									<div className="w-14 h-14 rounded-xl bg-primaryYellow/20 flex items-center justify-center mb-4">
										<Icon size={28} className="text-primaryYellow" />
									</div>
									<h4 className="text-xl font-semibold font-FoundersGrotesk text-offWhite mb-3">
										{standard.title}
									</h4>
									<p className="paragraph text-offWhite/80">
										{standard.description}
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

