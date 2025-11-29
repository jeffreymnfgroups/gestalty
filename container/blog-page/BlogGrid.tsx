"use client";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
	{
		id: 2,
		title: "10 Evidence-Based Study Techniques That Actually Work",
		excerpt: "Stop wasting time on ineffective study methods. These 10 techniques are backed by cognitive science research.",
		category: "Study Tips",
		image: "/insights2.jpeg",
		author: "Prof. Michael Chen",
		authorAvatar: "/team2.jpeg",
		date: "Nov 10, 2025",
		readingTime: "8 min read",
	},
	{
		id: 3,
		title: "How NEET Toppers Plan Their 300-Day Journey",
		excerpt: "A detailed breakdown of how successful NEET aspirants structure their preparation timeline.",
		category: "Success Stories",
		image: "/insights3.jpeg",
		author: "Priya Sharma",
		authorAvatar: "/team3.jpeg",
		date: "Nov 5, 2025",
		readingTime: "10 min read",
	},
	{
		id: 4,
		title: "The Psychology of Peak Performance Under Pressure",
		excerpt: "Learn how to manage exam anxiety and perform at your best when it matters most.",
		category: "Mental Health",
		image: "/showcase1.jpeg",
		author: "Dr. Sarah Johnson",
		authorAvatar: "/team1.jpeg",
		date: "Oct 28, 2025",
		readingTime: "7 min read",
	},
	{
		id: 5,
		title: "Active Recall vs Passive Reading: The 10X Learning Method",
		excerpt: "Why active recall is 10 times more effective than passive reading for long-term retention.",
		category: "Science of Learning",
		image: "/showcase2.png",
		author: "Prof. Michael Chen",
		authorAvatar: "/team2.jpeg",
		date: "Oct 22, 2025",
		readingTime: "9 min read",
	},
	{
		id: 6,
		title: "Strategic Study Breaks: The 52-17 Rule Explained",
		excerpt: "The scientifically optimal work-break ratio for sustained focus and productivity.",
		category: "Exam Strategy",
		image: "/showcase3.jpeg",
		author: "Dr. Rajesh Kumar",
		authorAvatar: "/team4.png",
		date: "Oct 18, 2025",
		readingTime: "6 min read",
	},
	{
		id: 7,
		title: "From 400 to 680: A NEET Success Story",
		excerpt: "How one student transformed their preparation strategy and achieved their dream score.",
		category: "Success Stories",
		image: "/showcase4.jpeg",
		author: "Priya Sharma",
		authorAvatar: "/team3.jpeg",
		date: "Oct 12, 2025",
		readingTime: "11 min read",
	},
];

export default function BlogGrid() {
	return (
		<section className="w-full bg-offWhite padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-4">
						Latest Articles
					</h2>
					<p className="paragraph text-grayBlue">
						Practical insights to accelerate your exam preparation
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{blogPosts.map((post, index) => (
						<motion.div
							key={post.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-white border-2 border-primaryYellow/40 rounded-2xl overflow-hidden shadow-sm hover:border-primaryYellow hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300">
							{/* Image */}
							<div className="relative h-[240px] overflow-hidden">
								<Image
									src={post.image}
									alt={post.title}
									fill
									className="object-cover hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute top-4 left-4">
									<span className="bg-primaryYellow text-darkBlue px-3 py-1 rounded-full font-semibold font-NeueMontreal text-xs shadow-md">
										{post.category}
									</span>
								</div>
							</div>

							{/* Content */}
							<div className="p-6">
								<h3 className="text-xl font-bold font-FoundersGrotesk text-darkBlue mb-3 leading-tight line-clamp-2">
									{post.title}
								</h3>
								<p className="paragraph text-grayBlue mb-4 line-clamp-3">
									{post.excerpt}
								</p>

								{/* Meta Info */}
								<div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
									<Image
										src={post.authorAvatar}
										alt={post.author}
										width={32}
										height={32}
										className="rounded-full"
									/>
									<div className="flex-1">
										<p className="text-sm font-NeueMontreal font-semibold text-darkBlue">
											{post.author}
										</p>
										<p className="text-xs font-NeueMontreal text-grayBlue">
											{post.date}
										</p>
									</div>
									<div className="flex items-center gap-1 text-grayBlue">
										<Clock size={14} />
										<span className="text-xs font-NeueMontreal">
											{post.readingTime}
										</span>
									</div>
								</div>

								{/* CTA */}
								<Link
									href={`/blog/${post.id}`}
									className="group inline-flex items-center gap-2 text-darkBlue font-semibold font-NeueMontreal hover:text-primaryYellow transition-colors">
									<span>Read More</span>
									<ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
								</Link>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

