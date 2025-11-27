"use client";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components";

const successStories = [
	{
		name: "Rahul Verma",
		exam: "JEE Advanced",
		rating: 5,
		text: "My mentor helped me identify my weak areas and create a focused study plan. I improved my rank from 15,000 to 2,500!",
	},
	{
		name: "Ananya Singh",
		exam: "NEET",
		rating: 5,
		text: "The 1-on-1 mentorship was a game-changer. My mentor's strategic guidance and constant support kept me motivated throughout.",
	},
	{
		name: "Vikram Reddy",
		exam: "UPSC",
		rating: 5,
		text: "The intensive bootcamp program gave me the structure and discipline I needed. Cleared prelims in my first attempt!",
	},
];

export default function MentorshipSuccess() {
	return (
		<section className="w-full bg-darkBlue padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-offWhite mb-4">
						Success Stories
					</h2>
					<p className="paragraph text-offWhite/80 max-w-2xl mx-auto">
						Hear from students who transformed their preparation with our mentorship programs.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
					{successStories.map((story, index) => (
						<TestimonialCard
							key={index}
							name={story.name}
							exam={story.exam}
							rating={story.rating}
							text={story.text}
							className="bg-offWhite"
						/>
					))}
				</div>
			</div>
		</section>
	);
}

