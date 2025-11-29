"use client";
import { useRef } from "react";
import { TextMask } from "@/animation";
import { RoundButton } from "@/components";

export default function Ready() {
	const headline = ["Are You Ready to Join", "the Cognitive Revolution", "and Build Knowledge", "the Right Way?"];

	return (
		<section
			className="w-full relative z-30 min-h-screen sm:h-screen xm:h-screen bg-academicGold padding-y rounded-t-[24px] mt-[-24px]">
			<div className="w-full h-full flex justify-center gap-[32px] sm:gap-[24px] xm:gap-[20px] items-center flex-col max-w-[1600px] mx-auto padding-x py-[80px] sm:py-[60px] xm:py-[40px]">
				{/* Headline */}
				<div className="flex flex-col gap-[15px] sm:gap-[12px] xm:gap-[10px] text-center">
					<h1 className="text-[120px] leading-[132px] lg:text-[120px] lg:leading-[132px] md:text-[90px] md:leading-[99px] sm:text-[64px] sm:leading-[70px] xm:text-[48px] xm:leading-[53px] tracking-[-1.5px] md:tracking-[-1px] font-semibold font-FoundersGrotesk text-deepNavy uppercase pointer-events-none">
						<TextMask>{headline}</TextMask>
					</h1>
				</div>

				{/* Sub-Headline */}
				<p className="text-[24px] leading-[38px] lg:text-[24px] lg:leading-[38px] md:text-[20px] md:leading-[32px] sm:text-[20px] sm:leading-[32px] xm:text-[18px] xm:leading-[29px] font-normal font-NeueMontreal text-deepNavy text-center max-w-[800px]">
					This isn&apos;t about doing more. It&apos;s about doing what works. Start your high-order learning journey now.
				</p>

				{/* Motivational Quote */}
				<div className="relative max-w-[700px] w-full">
					<blockquote className="bg-deepNavy/5 border-l-4 border-deepNavy px-8 py-6 sm:px-6 sm:py-5 xm:px-5 xm:py-4 rounded-r-2xl transition-all duration-300 hover:bg-deepNavy/8">
						<p className="text-[20px] leading-[32px] lg:text-[20px] lg:leading-[32px] md:text-[18px] md:leading-[29px] sm:text-[18px] sm:leading-[29px] xm:text-[16px] xm:leading-[26px] font-normal font-NeueMontreal text-deepNavy/90 italic">
							&quot;Every hour spent studying is a decision — make it wisely.&quot;
						</p>
					</blockquote>
				</div>

				{/* Closing Statement */}
				<p className="text-[18px] leading-[31px] lg:text-[18px] lg:leading-[31px] md:text-[17px] md:leading-[29px] sm:text-[16px] sm:leading-[27px] xm:text-[15px] xm:leading-[26px] font-normal font-NeueMontreal text-deepNavy/75 text-center max-w-[800px]">
					High performers make better decisions — not just about what to study, but when, how, and how much. Poor decision-making leads to wasted time, overconfidence, or fear loops.
					<br className="hidden sm:block" />
					<span className="font-semibold mt-[10px] block sm:inline text-deepNavy/90">Transform your preparation. Master your exam. Achieve your dream.</span>
				</p>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-[15px] sm:gap-[20px] mt-[24px] sm:mt-[32px]">
					<div className="flex items-center justify-between bg-deepNavy cursor-pointer rounded-full group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
						<RoundButton
							href="/contact"
							title="Start Your Free Trial"
							className="bg-deepNavy text-warmWhite font-medium"
							bgcolor="#0f1a35"
							style={{ color: "#fafaf8" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
