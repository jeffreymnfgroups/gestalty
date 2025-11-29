"use client";
import { motion } from "framer-motion";
import { BookOpen, Brain, Trophy, Target, Heart } from "lucide-react";
import Link from "next/link";

const categories = [
	{
		name: "Study Tips",
		icon: BookOpen,
		description: "Practical techniques to optimize your study sessions",
		postCount: 24,
		color: "primaryYellow",
	},
	{
		name: "Science of Learning",
		icon: Brain,
		description: "Cognitive science research applied to exam prep",
		postCount: 18,
		color: "darkBlue",
	},
	{
		name: "Success Stories",
		icon: Trophy,
		description: "Real stories from top performers and their strategies",
		postCount: 15,
		color: "primaryYellow",
	},
	{
		name: "Exam Strategy",
		icon: Target,
		description: "Strategic approaches to tackle competitive exams",
		postCount: 21,
		color: "darkBlue",
	},
	{
		name: "Mental Health",
		icon: Heart,
		description: "Managing stress, anxiety, and building resilience",
		postCount: 12,
		color: "primaryYellow",
	},
];

export default function BlogCategories() {
	return (
		<section className="w-full bg-darkBlue padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-offWhite mb-4">
						Explore by Category
					</h2>
					<p className="paragraph text-lightBeige">
						Find the insights most relevant to your preparation journey
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
					{categories.map((category, index) => {
						const Icon = category.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}>
								<Link
									href={`/blog/category/${category.name.toLowerCase().replace(" ", "-")}`}
									className="block h-full">
									<div className="bg-white border-2 border-primaryYellow/40 rounded-2xl p-6 h-full hover:border-primaryYellow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
										<div className="flex flex-col items-center text-center">
											<div className={`mb-4 p-4 rounded-full ${
												category.color === "primaryYellow" 
													? "bg-primaryYellow/20" 
													: "bg-darkBlue/10"
											}`}>
												<Icon 
													size={32} 
													className={category.color === "primaryYellow" 
														? "text-primaryYellow" 
														: "text-darkBlue"
													} 
												/>
											</div>
											<h3 className="text-xl font-bold font-FoundersGrotesk text-darkBlue mb-2">
												{category.name}
											</h3>
											<p className="text-sm text-grayBlue mb-4 font-NeueMontreal">
												{category.description}
											</p>
											<div className="mt-auto">
												<span className="inline-flex items-center justify-center bg-primaryYellow/10 text-darkBlue px-4 py-2 rounded-full text-sm font-semibold font-NeueMontreal group-hover:bg-primaryYellow transition-colors">
													{category.postCount} Articles
												</span>
											</div>
										</div>
									</div>
								</Link>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

