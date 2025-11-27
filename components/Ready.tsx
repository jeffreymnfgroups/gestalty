"use client";
import Link from "next/link";
import { useRef } from "react";
import { TextMask } from "@/animation";
import { ArrowUpRight } from "lucide-react";
import { Eyes, RoundButton, Rounded } from "@/components";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Ready() {
	const container = useRef(null);
	const headline = ["Are You Ready to Join", "the Cognitive Revolution", "and Build Knowledge", "the Right Way?"];

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const mq = useTransform(scrollYProgress, [0, 1], [0, -700]);

	return (
		<section
			className="w-full relative z-30 min-h-screen sm:h-screen xm:h-screen bg-primaryYellow padding-y rounded-t-[20px] mt-[-20px]"
			ref={container}>
			<div className="w-full h-full flex justify-center gap-[40px] sm:gap-[30px] xm:gap-[25px] items-center flex-col max-w-[1600px] mx-auto padding-x">
				{/* Headline */}
				<div className="flex flex-col gap-[15px] sm:gap-[12px] xm:gap-[10px] text-center">
					<h1 className="text-[180px] leading-[160px] lg:text-[150px] lg:leading-[130px] md:text-[120px] md:leading-[100px] sm:text-[80px] sm:leading-[70px] xm:text-[56px] xm:leading-[50px] tracking-[-2.5px] font-bold font-FoundersGrotesk text-darkBlue uppercase pointer-events-none">
						<TextMask>{headline}</TextMask>
					</h1>
				</div>

				{/* Sub-Headline */}
				<p className="text-[28px] leading-[38px] lg:text-[24px] lg:leading-[34px] md:text-[22px] md:leading-[32px] sm:text-[20px] sm:leading-[30px] xm:text-[18px] xm:leading-[28px] font-medium font-NeueMontreal text-darkBlue text-center max-w-[900px]">
					This isn't about doing more. It's about doing what works. Start your high-order learning journey now.
				</p>

				{/* Motivational Quote */}
				<div className="relative py-[20px] sm:py-[15px] xm:py-[12px]">
					<div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[60px] h-[2px] bg-darkBlue/30"></div>
					<blockquote className="text-[24px] leading-[36px] lg:text-[22px] lg:leading-[34px] md:text-[20px] md:leading-[32px] sm:text-[18px] sm:leading-[28px] xm:text-[16px] xm:leading-[26px] font-normal font-NeueMontreal text-darkBlue/90 text-center italic max-w-[700px]">
						"Every hour spent studying is a decision — make it wisely."
					</blockquote>
					<div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-[60px] h-[2px] bg-darkBlue/30"></div>
				</div>

				{/* Closing Statement */}
				<p className="text-[20px] leading-[32px] lg:text-[18px] lg:leading-[30px] md:text-[17px] md:leading-[28px] sm:text-[16px] sm:leading-[26px] xm:text-[15px] xm:leading-[24px] font-normal font-NeueMontreal text-darkBlue/85 text-center max-w-[800px]">
					High performers make better decisions — not just about what to study, but when, how, and how much. Poor decision-making leads to wasted time, overconfidence, or fear loops.
					<br className="hidden sm:block" />
					<span className="font-semibold mt-[10px] block sm:inline">Transform your preparation. Master your exam. Achieve your dream.</span>
				</p>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-[15px] sm:gap-[20px] mt-[20px] sm:mt-[30px]">
					<div className="flex items-center justify-between bg-darkBlue cursor-pointer rounded-full group glow-yellow-hover">
						<RoundButton
							href="/contact"
							title="Start Your Free Trial"
							className="bg-darkBlue text-offWhite"
							bgcolor="#19254c"
							style={{ color: "#fefefe" }}
						/>
					</div>
					<div className="flex items-center justify-between bg-transparent cursor-pointer rounded-full group border-2 border-darkBlue">
						<Link
							className="xl:text-[18px] xl:leading-[28px] text-[14px] leading-[24px] uppercase font-normal font-NeueMontreal"
							href="/contact">
							<Rounded
								className="py-[6px]"
								backgroundColor="#19254c">
								<p className="z-10 px-[10px] ml-[15px] py-[6px] text-offWhite">
									Talk to an Expert
								</p>
								<div className="bg-darkBlue group-hover:bg-primaryYellow text-offWhite p-[10px] rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] transition-all z-10 transform duration-[0.3s] ease-[.215,.61,.355,1]">
									<ArrowUpRight
										strokeWidth={1.5}
										size={30}
										className="scale-[0] group-hover:scale-[1]"
									/>
								</div>
							</Rounded>
						</Link>
					</div>
				</div>
			</div>
			<motion.div
				className="w-full absolute top-[50%] transform translate-y-[-50%] gap-[30px] flex items-center justify-center"
				style={{ y: mq }}>
				<Eyes className="w-[200px] h-[200px] md:w-[170px] md:h-[170px] sm:w-[150px] sm:h-[150px] xm:w-[150px] xm:h-[150px] sm:flex-col xm:flex-col" />
			</motion.div>
		</section>
	);
}
