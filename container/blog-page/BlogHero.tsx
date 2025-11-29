"use client";
import { motion } from "framer-motion";
import { Search, BookOpen } from "lucide-react";
import { useState } from "react";

export default function BlogHero() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<section className="w-full min-h-screen bg-offWhite relative overflow-hidden neuron-pattern padding-y flex items-center">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-5xl mx-auto text-center">
					{/* <div className="flex justify-center mb-6">
						<BookOpen size={64} className="text-primaryYellow" />
					</div> */}
					<h1 className="heading font-bold font-FoundersGrotesk text-darkBlue mb-6">
						Insights for Exam Success
					</h1>
					<p className="sub-paragraph text-grayBlue mb-8 max-w-3xl mx-auto">
						Evidence-based learning strategies, cognitive science research, and success stories from top performers. Everything you need to transform your exam preparation.
					</p>
					
					{/* Search Bar */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="max-w-2xl mx-auto mb-8">
						<div className="relative">
							<Search className="absolute left-6 top-1/2 -translate-y-1/2 text-grayBlue" size={24} />
							<input
								type="text"
								placeholder="Search articles, tips, strategies..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full pl-16 pr-6 py-5 rounded-full border-2 border-primaryYellow/40 bg-white text-darkBlue font-NeueMontreal text-lg focus:outline-none focus:border-primaryYellow transition-all shadow-sm hover:shadow-md"
							/>
						</div>
					</motion.div>

					{/* Category Pills */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="flex flex-wrap gap-3 justify-center">
						{["All", "Study Tips", "Science of Learning", "Success Stories", "Exam Strategy", "Mental Health"].map((category, index) => (
							<button
								key={index}
								className={`px-6 py-3 rounded-full font-semibold font-NeueMontreal transition-all hover:scale-105 ${
									index === 0
										? "bg-primaryYellow text-darkBlue shadow-md"
										: "bg-white border-2 border-primaryYellow/40 text-darkBlue hover:border-primaryYellow hover:shadow-md"
								}`}>
								{category}
							</button>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

