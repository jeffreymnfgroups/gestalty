"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
	{
		name: "Priya Sharma",
		exam: "NEET",
		rating: 5,
		text: "Gestalty's AI-guided approach helped me improve my rank by 2000 positions. The cognitive science methods actually work!",
	},
	{
		name: "Arjun Patel",
		exam: "JEE",
		rating: 5,
		text: "The adaptive assessments and personalized study plans made all the difference. I finally cracked JEE Advanced!",
	},
	{
		name: "Sneha Reddy",
		exam: "UPSC",
		rating: 5,
		text: "The spaced repetition system and mentorship program transformed my preparation. Highly recommend for serious aspirants.",
	},
];

export default function SocialProof() {
	return (
		<section className="w-full bg-beige/30 padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-4">
						Trusted by Top Performers
					</h2>
					<p className="paragraph text-grayBlue max-w-2xl mx-auto">
						Join thousands of aspirants who've achieved their goals with Gestalty.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="bg-offWhite rounded-xl p-6 shadow-lg">
							<div className="flex items-center gap-1 mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
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
								"{testimonial.text}"
							</p>
							<div className="flex items-center justify-between">
								<div>
									<p className="font-semibold font-FoundersGrotesk text-darkBlue">
										{testimonial.name}
									</p>
									<p className="small-text text-grayBlue">
										{testimonial.exam} Aspirant
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="mt-12 text-center">
					<div className="inline-flex items-center gap-4 bg-darkBlue/10 rounded-full px-8 py-4">
						<div className="flex items-center gap-1">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									size={20}
									className="fill-primaryYellow text-primaryYellow"
								/>
							))}
						</div>
						<p className="paragraph font-semibold text-darkBlue">
							4.8/5 Average Rating
						</p>
						<p className="paragraph text-grayBlue">
							from 10,000+ students
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

