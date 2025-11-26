"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScienceCardProps {
	title: string;
	description: string;
	icon?: ReactNode;
	className?: string;
}

export default function ScienceCard({ title, description, icon, className = "" }: ScienceCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			whileHover={{ y: -5, scale: 1.02 }}
			className={`science-card p-6 rounded-xl ${className}`}>
			{icon && (
				<div className="mb-4 text-primaryYellow">
					{icon}
				</div>
			)}
			<h3 className="text-xl font-semibold font-FoundersGrotesk text-darkBlue mb-3">
				{title}
			</h3>
			<p className="paragraph text-grayBlue">
				{description}
			</p>
		</motion.div>
	);
}

