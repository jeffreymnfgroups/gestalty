"use client";
import { motion } from "framer-motion";
import { Clock, User, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogFeatured() {
	const featuredPost = {
		id: 1,
		title: "The Science of Spaced Repetition: How to Remember Everything You Study",
		excerpt: "Discover the cognitive science behind spaced repetition and how it can transform your exam preparation. Learn the exact techniques used by top performers to achieve 95%+ retention rates.",
		category: "Science of Learning",
		image: "/insights1.png",
		author: "Dr. Sarah Johnson",
		authorAvatar: "/team1.jpeg",
		date: "Nov 15, 2025",
		readingTime: "12 min read",
	};

	return (
		<section className="w-full bg-lightBeige padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-4">
						Featured Article
					</h2>
					<p className="paragraph text-grayBlue">
						Our most impactful insights on exam success
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="bg-white border-2 border-primaryYellow/40 rounded-3xl overflow-hidden shadow-lg hover:border-primaryYellow hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 glow-yellow-hover">
					<div className="grid lg:grid-cols-2 gap-0">
						{/* Image */}
						<div className="relative h-[400px] lg:h-auto overflow-hidden">
							<Image
								src={featuredPost.image}
								alt={featuredPost.title}
								fill
								className="object-cover hover:scale-105 transition-transform duration-500"
							/>
							<div className="absolute top-6 left-6">
								<span className="bg-primaryYellow text-darkBlue px-4 py-2 rounded-full font-semibold font-NeueMontreal text-sm shadow-md">
									{featuredPost.category}
								</span>
							</div>
						</div>

						{/* Content */}
						<div className="p-8 lg:p-12 flex flex-col justify-center">
							<h3 className="text-3xl lg:text-4xl font-bold font-FoundersGrotesk text-darkBlue mb-6 leading-tight">
								{featuredPost.title}
							</h3>
							<p className="paragraph text-grayBlue mb-8 leading-relaxed">
								{featuredPost.excerpt}
							</p>

							{/* Meta Info */}
							<div className="flex flex-wrap items-center gap-6 mb-8 text-grayBlue">
								<div className="flex items-center gap-2">
									<Image
										src={featuredPost.authorAvatar}
										alt={featuredPost.author}
										width={40}
										height={40}
										className="rounded-full"
									/>
									<span className="font-NeueMontreal font-semibold">
										{featuredPost.author}
									</span>
								</div>
								<div className="flex items-center gap-2">
									<Clock size={18} />
									<span className="font-NeueMontreal">{featuredPost.readingTime}</span>
								</div>
								<span className="font-NeueMontreal">{featuredPost.date}</span>
							</div>

							{/* CTA */}
							<Link
								href={`/blog/${featuredPost.id}`}
								className="group inline-flex items-center gap-3 bg-darkBlue text-offWhite px-8 py-4 rounded-full font-semibold font-FoundersGrotesk hover:bg-primaryYellow hover:text-darkBlue transition-all hover:scale-105 w-fit">
								<span>Read Full Article</span>
								<ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

