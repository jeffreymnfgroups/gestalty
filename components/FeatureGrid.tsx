"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Feature {
	id: number;
	icon: LucideIcon;
	title: string;
	description: string;
}

interface FeatureGridProps {
	features: Feature[];
	columns?: 2 | 3;
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
	const gridCols = columns === 2 ? "md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3";

	return (
		<div className={`grid grid-cols-1 ${gridCols} gap-6`}>
			{features.map((feature, index) => {
				const Icon = feature.icon;
				return (
					<motion.div
						key={feature.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						whileHover={{ y: -5, scale: 1.02 }}
						className="bg-offWhite border-2 border-grayBlue/20 hover:border-primaryYellow/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
						<div className="mb-4">
							<div className="w-12 h-12 rounded-lg bg-primaryYellow/10 border border-primaryYellow/30 flex items-center justify-center group-hover:bg-primaryYellow/20 transition-colors">
								<Icon
									size={24}
									className="text-primaryYellow group-hover:scale-110 transition-transform duration-300"
								/>
							</div>
						</div>
						<h3 className="text-xl font-semibold font-FoundersGrotesk text-darkBlue mb-3">
							{feature.title}
						</h3>
						<p className="paragraph text-grayBlue leading-relaxed">
							{feature.description}
						</p>
					</motion.div>
				);
			})}
		</div>
	);
}

