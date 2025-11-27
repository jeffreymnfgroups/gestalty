"use client";
import { motion } from "framer-motion";
import {
	BarChart3,
	FlaskConical,
	AlertCircle,
	Users,
	GraduationCap,
	Sparkles,
} from "lucide-react";

const differentiators = [
	{
		id: 1,
		title: "We Turn Feelings Into Facts",
		description: "Convert \"I feel prepared\" into hard metrics showing exactly where you stand and what needs work. No more guesswork—just clarity.",
		icon: BarChart3,
	},
	{
		id: 2,
		title: "We Blend Multiple Sciences",
		description: "Statistics, cognitive psychology, and evidence-based pedagogy unite for genuine impact. Not hype—real, measurable learning transformation.",
		icon: FlaskConical,
	},
	{
		id: 3,
		title: "We Intervene Before It's Too Late",
		description: "Intelligent alerts and strategic interventions arrive weeks before exams based on data trends—proactive guidance, not reactive panic.",
		icon: AlertCircle,
	},
	{
		id: 4,
		title: "We Connect Your Support System",
		description: "Students, mentors, and parents collaborate in one closed-loop system ensuring transparent, real-time visibility and coordinated support.",
		icon: Users,
	},
	{
		id: 5,
		title: "We Build Lifelong Skills",
		description: "Develop metacognitive abilities and strategic learning approaches that serve success far beyond a single competitive exam.",
		icon: GraduationCap,
	},
];

export default function WhyGestaltyDifferent() {
	return (
		<section className="w-full bg-beige/20 padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center">
					<div className="flex justify-center mb-6">
						<Sparkles size={48} className="text-primaryYellow" />
					</div>
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-6">
						Beyond Traditional Edtech: A Live Learning Engine
					</h2>
					<p className="paragraph text-grayBlue max-w-4xl mx-auto mb-12">
						Gestalty transforms learning into a living system—predictive, adaptive, and measurable. Plan intelligently, act strategically, and grow into a lifelong thinker who succeeds far beyond exams.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
					{differentiators.map((item, index) => {
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
								<div className="bg-offWhite border-2 border-grayBlue/20 hover:border-primaryYellow/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
									<div className="mb-4">
										<div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primaryYellow/10 border border-primaryYellow/30 group-hover:bg-primaryYellow/20 transition-colors">
											<Icon
												size={28}
												className="text-primaryYellow group-hover:scale-110 transition-transform duration-300"
											/>
										</div>
									</div>
									<h3 className="text-xl font-bold font-FoundersGrotesk text-darkBlue mb-3">
										Differentiator {item.id}: {item.title}
									</h3>
									<p className="paragraph text-grayBlue leading-relaxed">
										{item.description}
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

