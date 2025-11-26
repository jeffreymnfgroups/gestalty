"use client";
import { motion } from "framer-motion";
import { Award, BookOpen, Brain, GraduationCap } from "lucide-react";

const badges = [
	{ icon: Brain, label: "Scientific Methodology", color: "text-heroPrimary" },
	{ icon: BookOpen, label: "NEET", color: "text-heroPrimary" },
	{ icon: GraduationCap, label: "UPSC", color: "text-heroPrimary" },
	{ icon: Award, label: "JEE", color: "text-heroPrimary" },
];

export default function TrustBadges() {
	return (
		<div className="flex items-center gap-4 flex-wrap">
			{badges.map((badge, index) => {
				const Icon = badge.icon;
				return (
					<motion.div
						key={index}
						className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-heroPrimary/30 hover:border-heroPrimary transition-colors shadow-sm"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							delay: 2.2 + index * 0.1,
							duration: 0.4,
							ease: [0.33, 1, 0.68, 1],
						}}
						whileHover={{ scale: 1.05 }}>
						<Icon className={`w-5 h-5 ${badge.color}`} />
						<span className="text-sm text-secondry/80 font-NeueMontreal">
							{badge.label}
						</span>
					</motion.div>
				);
			})}
		</div>
	);
}

