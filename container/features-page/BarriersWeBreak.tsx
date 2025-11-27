"use client";
import { motion } from "framer-motion";
import { BookOpen, RefreshCw, TrendingUp, Users, Eye, ArrowRight } from "lucide-react";

const challenges = [
	{
		id: 1,
		challenge: "Overwhelm from Unstructured Content",
		method: "Split Syllabus Engine breaks massive syllabi into manageable daily/weekly chunks",
		icon: BookOpen,
	},
	{
		id: 2,
		challenge: "Confusion About What to Revise",
		method: "AI-powered revision reminders based on cognitive forgetting curves",
		icon: RefreshCw,
	},
	{
		id: 3,
		challenge: "Poor Retention and Burnout",
		method: "Effort Quality Index measures depth of understanding, not just time spent",
		icon: TrendingUp,
	},
	{
		id: 4,
		challenge: "Limited Personalized Guidance",
		method: "1:1 mentor session with customized study plans and expert feedback",
		icon: Users,
	},
	{
		id: 5,
		challenge: "Parents Left in the Dark",
		method: "Multi-layer dashboards provide real-time visibility for students, mentors, and parents",
		icon: Eye,
	},
];

export default function BarriersWeBreak() {
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
						The Barriers We Break
					</h2>
					<p className="paragraph text-grayBlue max-w-3xl mx-auto mb-8">
						We don't just fix education's pain points—we dismantle them with science-backed tools
					</p>
					<h3 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold font-FoundersGrotesk text-darkBlue mb-12">
						The Challenge We Address
					</h3>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
					{challenges.map((item, index) => {
						const Icon = item.icon;
						return (
							<motion.div
								key={item.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ y: -5, scale: 1.02 }}
								className="group relative">
								<div className="relative bg-offWhite border-2 border-grayBlue/20 hover:border-primaryYellow/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col min-h-[250px]">
									<div className="mb-4">
										<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primaryYellow/10 border border-primaryYellow/30 group-hover:bg-primaryYellow/20 transition-colors">
											<Icon size={24} className="text-primaryYellow group-hover:scale-110 transition-transform duration-300" />
										</div>
									</div>

									<div className="flex-grow">
										<h4 className="text-xl font-bold font-FoundersGrotesk text-darkBlue mb-3 leading-tight">
											Challenge {item.id}: {item.challenge}
										</h4>
										<div className="mb-3 flex items-center gap-2">
											<ArrowRight
												size={18}
												className="text-primaryYellow"
											/>
											<span className="text-sm font-semibold text-primaryYellow">Method:</span>
										</div>
										<p className="paragraph text-grayBlue leading-relaxed">
											{item.method}
										</p>
									</div>

									<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<ArrowRight
											size={20}
											className="text-primaryYellow rotate-[-45deg]"
										/>
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

