"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { RoundButton } from "@/components";

export default function Form() {
	return (
		<section className="w-full padding-x padding-y bg-offWhite">
			<div className="w-full flex flex-col gap-[15px]">
				<div className="w-full flex gap-[15px] sm:flex-col xm:flex-col">
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="flex gap-[10px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-FoundersGrotesk font-semibold text-darkBlue">
								Hi! My name is
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Enter your name*"
								className="paragraph w-full font-NeueMontreal font-normal text-darkBlue bg-offWhite border-b-2 border-grayBlue/30 focus:border-primaryYellow text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition-all duration-300 ease-in-out sm:w-full xm:w-full hover:border-grayBlue/50"
							/>
						</div>
					</motion.div>
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="flex gap-[10px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-FoundersGrotesk font-semibold text-darkBlue">
								and I'm preparing for
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="NEET / JEE / UPSC / Other*"
								className="paragraph w-full font-NeueMontreal font-normal text-darkBlue bg-offWhite border-b-2 border-grayBlue/30 focus:border-primaryYellow text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition-all duration-300 ease-in-out sm:w-full xm:w-full hover:border-grayBlue/50"
							/>
						</div>
					</motion.div>
				</div>
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-FoundersGrotesk font-semibold text-darkBlue">
								I'm looking for a platform to help me achieve
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Your exam preparation goal*"
								className="paragraph font-NeueMontreal font-normal text-darkBlue bg-offWhite border-b-2 border-grayBlue/30 focus:border-primaryYellow text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition-all duration-300 ease-in-out w-full sm:w-full xm:w-full hover:border-grayBlue/50"
							/>
						</div>
					</div>
				</motion.div>
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-FoundersGrotesk font-semibold text-darkBlue">
								My target exam date is
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Exam date (e.g., May 2025)*"
								className="paragraph font-NeueMontreal font-normal text-darkBlue bg-offWhite border-b-2 border-grayBlue/30 focus:border-primaryYellow text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition-all duration-300 ease-in-out w-full sm:w-full xm:w-full hover:border-grayBlue/50"
							/>
						</div>
					</div>
				</motion.div>
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-FoundersGrotesk font-semibold text-darkBlue">
								I'm interested in a plan that fits my budget of
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Budget range (optional)"
								className="paragraph font-NeueMontreal font-normal text-darkBlue bg-offWhite border-b-2 border-grayBlue/30 focus:border-primaryYellow text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition-all duration-300 ease-in-out w-full sm:w-full xm:w-full hover:border-grayBlue/50"
							/>
						</div>
					</div>
				</motion.div>
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-FoundersGrotesk font-semibold text-darkBlue">
								You can reach me at
							</h2>
						</div>
						<div className="w-full">
							<input
								type="email"
								placeholder="name@example.com"
								className="paragraph font-NeueMontreal font-normal text-darkBlue bg-offWhite border-b-2 border-grayBlue/30 focus:border-primaryYellow text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition-all duration-300 ease-in-out w-full sm:w-full xm:w-full hover:border-grayBlue/50"
							/>
						</div>
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-FoundersGrotesk font-semibold text-darkBlue">
								to start the conversation.
							</h2>
						</div>
					</div>
				</motion.div>
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-FoundersGrotesk font-semibold text-darkBlue">
								Optionally, I'd like to share more about my preparation:
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Current preparation stage, challenges, or specific needs..."
								className="paragraph font-NeueMontreal font-normal text-darkBlue bg-offWhite border-b-2 border-grayBlue/30 focus:border-primaryYellow text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition-all duration-300 ease-in-out w-full sm:w-full xm:w-full hover:border-grayBlue/50"
							/>
						</div>
					</div>
				</motion.div>
			</div>
			<motion.div 
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.7 }}
				className="w-full flex items-center justify-end sm:justify-start xm:justify-start pt-[50px]">
				<div className="flex sm:flex-col xm:flex-col gap-[25px]">
					<div className="flex gap-[10px] items-center">
						<div className="flex gap-[10px]">
							<input
								type="checkbox"
								className="w-[30px] h-[30px] accent-primaryYellow cursor-pointer border-2 border-grayBlue/30 rounded focus:ring-2 focus:ring-primaryYellow/50 transition-all"
							/>
							<p className="paragraph text-darkBlue font-NeueMontreal font-normal">
								I agree with the
							</p>
						</div>
						<Link
							className="paragraph font-medium font-NeueMontreal text-primaryYellow capitalize flex flex-col hover:text-darkBlue transition-colors duration-200"
							href={"/privacy"}>
							Privacy Policy
						</Link>
					</div>
					<div className="w-fit flex items-center justify-between bg-darkBlue cursor-pointer rounded-full group hover:bg-primaryYellow transition-all duration-300">
						<RoundButton
							bgcolor="#19254c"
							href="/"
							title="Start My Journey"
							className="bg-darkBlue text-offWhite group-hover:bg-primaryYellow group-hover:text-darkBlue transition-all duration-300"
							style={{ color: "#fefefe" }}
						/>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
