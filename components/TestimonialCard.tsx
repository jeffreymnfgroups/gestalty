"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
	name: string;
	exam?: string;
	rating: number;
	text: string;
	className?: string;
}

export default function TestimonialCard({
	name,
	exam,
	rating,
	text,
	className = "",
}: TestimonialCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			whileHover={{ y: -5, scale: 1.02 }}
			className={`bg-offWhite rounded-xl p-6 shadow-lg ${className}`}>
			<div className="flex items-center gap-1 mb-4">
				{[...Array(rating)].map((_, i) => (
					<Star
						key={i}
						size={18}
						className="fill-primaryYellow text-primaryYellow"
					/>
				))}
			</div>
			<Quote
				size={24}
				className="text-primaryYellow/50 mb-3"
			/>
			<p className="paragraph text-darkBlue mb-4 italic">
				"{text}"
			</p>
			<div className="flex items-center justify-between">
				<div>
					<p className="font-semibold font-FoundersGrotesk text-darkBlue">
						{name}
					</p>
					{exam && (
						<p className="small-text text-grayBlue">
							{exam} Aspirant
						</p>
					)}
				</div>
			</div>
		</motion.div>
	);
}

