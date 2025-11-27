"use client";
import { motion } from "framer-motion";
import { Link2, Brain, Users, Eye, Target } from "lucide-react";

const connections = [
	{
		icon: Link2,
		title: "Effort to outcome",
		description: "Know what's working",
	},
	{
		icon: Brain,
		title: "Psychology to progress",
		description: "Understand your learning behavior",
	},
	{
		icon: Users,
		title: "Mentors to mentees",
		description: "Enable guided development",
	},
	{
		icon: Eye,
		title: "Parents to purpose",
		description: "Provide transparency and clarity",
	},
];

export default function PlatformEthos() {
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
						Platform Ethos: More Than a Tracker
					</h2>
					<p className="paragraph text-grayBlue max-w-4xl mx-auto mb-8">
						Gestalty is not just a productivity tracker—it's a cognitive partner.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12">
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue mb-8 text-center">
						We Connect
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
						{connections.map((connection, index) => {
							const Icon = connection.icon;
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
										{connection.title}
									</h4>
									<p className="paragraph text-grayBlue">
										{connection.description}
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
						<div className="flex items-center justify-center gap-4 mb-4">
							<Target size={32} className="text-primaryYellow" />
							<h3 className="text-2xl font-bold font-FoundersGrotesk text-darkBlue">
								Our Commitment
							</h3>
						</div>
						<p className="paragraph text-grayBlue text-lg font-semibold">
							Make learning measurable, meaningful, and manageable.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

