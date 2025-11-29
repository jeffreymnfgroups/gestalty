"use client";
import { motion } from "framer-motion";
import { Filter, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const filterOptions = {
	categories: ["All", "Study Tips", "Science of Learning", "Success Stories", "Exam Strategy", "Mental Health"],
	sortBy: ["Latest", "Popular", "Trending", "Most Read"],
	tags: ["NEET", "UPSC", "JEE", "Spaced Repetition", "Active Recall", "Time Management", "Motivation", "Study Schedule"],
};

export default function BlogFilters() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [selectedSort, setSelectedSort] = useState("Latest");
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [showFilters, setShowFilters] = useState(false);

	const toggleTag = (tag: string) => {
		setSelectedTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
		);
	};

	return (
		<section className="w-full bg-offWhite py-8 sticky top-0 z-30 border-b border-primaryYellow/20 backdrop-blur-sm bg-offWhite/95">
			<div className="max-w-[1600px] mx-auto padding-x">
				{/* Main Filter Bar */}
				<div className="flex flex-wrap items-center justify-between gap-4 mb-4">
					<div className="flex items-center gap-3">
						<Filter className="text-darkBlue" size={24} />
						<h3 className="text-lg font-bold font-FoundersGrotesk text-darkBlue">
							Filter Articles
						</h3>
					</div>

					<button
						onClick={() => setShowFilters(!showFilters)}
						className="flex items-center gap-2 px-5 py-2 bg-white border-2 border-primaryYellow/40 rounded-full font-semibold font-NeueMontreal text-darkBlue hover:border-primaryYellow hover:shadow-md transition-all">
						<SlidersHorizontal size={18} />
						<span>{showFilters ? "Hide" : "Show"} Advanced Filters</span>
					</button>
				</div>

				{/* Category Filter */}
				<div className="flex flex-wrap gap-3 mb-4">
					{filterOptions.categories.map((category, index) => (
						<button
							key={index}
							onClick={() => setSelectedCategory(category)}
							className={`px-5 py-2 rounded-full font-semibold font-NeueMontreal transition-all hover:scale-105 ${
								selectedCategory === category
									? "bg-primaryYellow text-darkBlue shadow-md"
									: "bg-white border-2 border-primaryYellow/40 text-darkBlue hover:border-primaryYellow hover:shadow-sm"
							}`}>
							{category}
						</button>
					))}
				</div>

				{/* Advanced Filters */}
				{showFilters && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="bg-white border-2 border-primaryYellow/40 rounded-2xl p-6 space-y-6">
						{/* Sort By */}
						<div>
							<h4 className="text-base font-bold font-FoundersGrotesk text-darkBlue mb-3">
								Sort By
							</h4>
							<div className="flex flex-wrap gap-3">
								{filterOptions.sortBy.map((sort, index) => (
									<button
										key={index}
										onClick={() => setSelectedSort(sort)}
										className={`px-4 py-2 rounded-full font-semibold font-NeueMontreal text-sm transition-all ${
											selectedSort === sort
												? "bg-darkBlue text-offWhite"
												: "bg-lightBeige text-darkBlue hover:bg-primaryYellow/20"
										}`}>
										{sort}
									</button>
								))}
							</div>
						</div>

						{/* Tags */}
						<div>
							<h4 className="text-base font-bold font-FoundersGrotesk text-darkBlue mb-3">
								Filter by Tags
							</h4>
							<div className="flex flex-wrap gap-3">
								{filterOptions.tags.map((tag, index) => (
									<button
										key={index}
										onClick={() => toggleTag(tag)}
										className={`px-4 py-2 rounded-full font-semibold font-NeueMontreal text-sm transition-all hover:scale-105 ${
											selectedTags.includes(tag)
												? "bg-primaryYellow text-darkBlue shadow-md"
												: "bg-lightBeige text-darkBlue hover:bg-primaryYellow/20"
										}`}>
										{tag}
										{selectedTags.includes(tag) && (
											<span className="ml-2">✓</span>
										)}
									</button>
								))}
							</div>
						</div>

						{/* Active Filters Summary */}
						{(selectedCategory !== "All" || selectedTags.length > 0) && (
							<div className="pt-4 border-t border-gray-200">
								<div className="flex items-center justify-between">
									<p className="text-sm font-NeueMontreal text-grayBlue">
										<span className="font-semibold text-darkBlue">
											{selectedTags.length + (selectedCategory !== "All" ? 1 : 0)}
										</span>{" "}
										active filter(s)
									</p>
									<button
										onClick={() => {
											setSelectedCategory("All");
											setSelectedTags([]);
										}}
										className="text-sm font-semibold font-NeueMontreal text-primaryYellow hover:text-darkBlue transition-colors">
										Clear All
									</button>
								</div>
							</div>
						)}
					</motion.div>
				)}
			</div>
		</section>
	);
}

