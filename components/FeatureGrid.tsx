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
	const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

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
						whileHover={{ y: -5 }}
						className="science-card p-6 rounded-xl cursor-pointer group">
						<div className="mb-4">
							<Icon
								size={32}
								className="text-primaryYellow group-hover:scale-110 transition-transform duration-300"
							/>
						</div>
						<h3 className="text-xl font-semibold font-FoundersGrotesk text-darkBlue mb-2">
							{feature.title}
						</h3>
						<p className="paragraph text-grayBlue">
							{feature.description}
						</p>
					</motion.div>
				);
			})}
		</div>
	);
}

