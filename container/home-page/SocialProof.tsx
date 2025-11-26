"use client";
import { motion } from "framer-motion";
import { Quote, TrendingUp, Target, Sparkles } from "lucide-react";

const pullQuote = "Consistency is more powerful than intensity.";

const comparisonData = [
	{
		aspect: "Study Approach",
		traditional: {
			description: '"I studied 8 hours"',
			progress: "8% real progress",
			focus: "Focus on quantity",
		},
		gestalty: {
			description: "8 hours in balanced knowledge acquisition",
			progress: "68% progress",
			focus: "Focus on quality, retention, and application",
		},
	},
];

const supportingQuote = "What gets scheduled gets done. What gets tracked gets optimized.";

export default function SocialProof() {
	return (
		<section className="w-full bg-gradient-to-b from-beige/30 via-beige/20 to-beige/30 padding-y rounded-t-[20px] z-20 relative mt-[-15px] overflow-hidden">
			{/* Subtle Background Pattern */}
			<div
				className="absolute inset-0 opacity-[0.02]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2319254c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
				}}
			/>

			<div className="max-w-[1600px] mx-auto padding-x relative z-10">
				{/* Pull Quote Section */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
					className="mb-20 sm:mb-24 lg:mb-28">
					<div className="relative group">
						{/* Main Card */}
						<div 
							className="relative bg-gradient-to-br from-primaryYellow/25 via-primaryYellow/15 to-beige/40 rounded-3xl sm:rounded-[40px] p-10 sm:p-14 lg:p-20 border border-primaryYellow/40 backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-2xl"
							style={{
								boxShadow: "0 20px 60px rgba(251, 193, 13, 0.2), 0 0 0 1px rgba(251, 193, 13, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
							}}>
							{/* Subtle Texture Overlay */}
							<div 
								className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
								style={{
									backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
								}}
							/>

							{/* Decorative Quote Marks */}
							<div className="absolute top-8 sm:top-10 left-8 sm:left-10 lg:left-14 opacity-20">
								<Quote
									size={80}
									className="text-primaryYellow sm:w-20 sm:h-20 lg:w-24 lg:h-24"
								/>
							</div>
							<div className="absolute bottom-8 sm:bottom-10 right-8 sm:right-10 lg:right-14 opacity-20 rotate-180">
								<Quote
									size={80}
									className="text-primaryYellow sm:w-20 sm:h-20 lg:w-24 lg:h-24"
								/>
							</div>

							{/* Content */}
							<div className="relative z-10 text-center">
								<motion.p
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.2 }}
									className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-bold font-FoundersGrotesk text-darkBlue leading-[1.15] italic max-w-5xl mx-auto tracking-[-0.02em]">
									"{pullQuote}"
								</motion.p>
							</div>

							{/* Glow Effect on Hover */}
							<div className="absolute inset-0 bg-gradient-to-r from-primaryYellow/0 via-primaryYellow/10 to-primaryYellow/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
						</div>
					</div>
				</motion.div>

				{/* Comparison Section */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
					className="mb-20 sm:mb-24 lg:mb-28">
					<div 
						className="bg-offWhite rounded-2xl sm:rounded-3xl overflow-hidden border border-darkBlue/10 transition-all duration-300 hover:shadow-2xl"
						style={{
							boxShadow: "0 10px 40px rgba(25, 37, 76, 0.08), 0 0 0 1px rgba(25, 37, 76, 0.05)",
						}}>
						<div className="flex flex-row">
							{/* Left Side - Traditional Method */}
							<div className="flex-1 border-r border-darkBlue/10">
								{/* Heading */}
								<div className="p-6 sm:p-8 lg:p-10 border-b border-darkBlue/10 bg-gradient-to-br from-grayBlue/5 to-transparent">
									<div className="flex items-center gap-3">
										<div className="p-2.5 rounded-xl bg-grayBlue/10 border border-grayBlue/20">
											<Target size={24} className="text-grayBlue" />
										</div>
										<h3 className="text-lg sm:text-xl lg:text-2xl font-semibold font-FoundersGrotesk text-darkBlue tracking-tight">
											Traditional Method
										</h3>
									</div>
								</div>
								
								{/* Details */}
								<div className="p-6 sm:p-8 lg:p-10">
									{comparisonData.map((row, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
											className="space-y-4">
											<div>
												<p className="paragraph font-semibold font-NeueMontreal text-grayBlue mb-2 leading-relaxed">
													{row.traditional.description}
												</p>
												<div className="flex items-baseline gap-2 mb-3">
													<span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-FoundersGrotesk text-grayBlue/50">
														→
													</span>
													<span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-FoundersGrotesk text-grayBlue/60">
														{row.traditional.progress}
													</span>
												</div>
											</div>
											<div className="pt-4 border-t border-grayBlue/20">
												<p className="small-text text-grayBlue italic font-medium">
													{row.traditional.focus}
												</p>
											</div>
										</motion.div>
									))}
								</div>
							</div>

							{/* Right Side - Gestalty */}
							<div className="flex-1 bg-gradient-to-br from-primaryYellow/8 via-primaryYellow/5 to-transparent relative overflow-hidden">
								{/* Heading */}
								<div className="p-6 sm:p-8 lg:p-10 border-b border-primaryYellow/20 bg-gradient-to-br from-primaryYellow/25 to-primaryYellow/10 relative overflow-hidden">
									<div className="absolute top-0 right-0 w-32 h-32 bg-primaryYellow/10 rounded-full blur-3xl" />
									<div className="flex items-center gap-3 relative z-10">
										<div className="p-2.5 rounded-xl bg-primaryYellow/20 border border-primaryYellow/40 shadow-lg">
											<TrendingUp size={24} className="text-primaryYellow" />
										</div>
										<h3 className="text-lg sm:text-xl lg:text-2xl font-semibold font-FoundersGrotesk text-darkBlue tracking-tight">
											Gestalty
										</h3>
									</div>
								</div>
								
								{/* Details */}
								<div className="p-6 sm:p-8 lg:p-10 relative z-10">
									{comparisonData.map((row, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, x: 20 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
											className="space-y-4">
											<div>
												<p className="paragraph font-semibold font-NeueMontreal text-darkBlue mb-2 leading-relaxed">
													{row.gestalty.description}
												</p>
												<div className="flex items-baseline gap-2 mb-3">
													<span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-FoundersGrotesk text-primaryYellow/80">
														→
													</span>
													<span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-FoundersGrotesk text-primaryYellow">
														{row.gestalty.progress}
													</span>
												</div>
											</div>
											<div className="pt-4 border-t border-primaryYellow/30">
												<p className="small-text text-darkBlue font-semibold">
													{row.gestalty.focus}
												</p>
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Supporting Quote Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.7, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
					className="text-center">
					<div 
						className="relative inline-block max-w-4xl mx-auto bg-gradient-to-br from-offWhite via-offWhite/95 to-offWhite/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-10 sm:p-12 lg:p-16 border border-primaryYellow/30 transition-all duration-300 hover:shadow-xl hover:border-primaryYellow/50 group"
						style={{
							boxShadow: "0 10px 40px rgba(25, 37, 76, 0.08), 0 0 0 1px rgba(251, 193, 13, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
						}}>
						{/* Decorative Elements */}
						<div className="absolute top-6 left-6 opacity-10 group-hover:opacity-20 transition-opacity">
							<Sparkles size={24} className="text-primaryYellow" />
						</div>
						<div className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
							<Sparkles size={24} className="text-primaryYellow" />
						</div>

						<div className="relative z-10">
							<motion.div
								initial={{ scale: 0.9, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.6 }}
								className="mb-6">
								<Quote
									size={40}
									className="text-primaryYellow/50 mx-auto"
								/>
							</motion.div>
							<p className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] xl:text-[40px] font-medium font-NeueMontreal text-darkBlue leading-[1.5] italic tracking-tight">
								"{supportingQuote}"
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
