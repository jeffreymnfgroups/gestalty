"use client";
import Image from "next/image";
import { useState } from "react";
import { aboutImg } from "@/public";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import { Heading, RoundButton } from "@/components";

export default function About() {
	const [hovered, setHovered] = useState(false);

	return (
		<section className="w-full bg-offWhite padding-y relative">
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<h2 className="sub-heading font-medium font-NeueMontreal text-darkBlue">
					Gestalty is an advanced exam preparation platform for&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer text-primaryYellow">
						high-performing aspirants
					</span>
					&nbsp;preparing for <br className="sm:hidden xm:hidden" />
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						NEET,
					</span>
					&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						JEE,
					</span>
					&nbsp;and&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						UPSC.
					</span>
				</h2>
			</div>
			<div className="w-full border-y border-darkBlue/20 my-[50px] py-[20px]">
				<div className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3 className="sub-paragraph font-medium text-darkBlue font-NeueMontreal">
							What makes us different?
						</h3>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full">
						<div className="w-full flex gap-[30px] h-full items-end sm:items-start sm:flex-col xm:items-start xm:flex-col">
							<div className="w-[40%] sm:w-[60%] xm:w-[60%]">
								<p className="sub-paragraph font-medium font-NeueMontreal text-darkBlue tracking-wide">
									We combine cognitive science research with AI-powered technology
									to create personalized learning experiences that maximize retention
									and performance.
								</p>
								<p className="sub-paragraph font-medium font-NeueMontreal text-darkBlue pt-[30px] tracking-wide">
									Every feature is designed using proven learning methodologies,
									ensuring your study time is efficient, effective, and aligned
									with how your brain actually learns.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
				<div className="flex flex-col gap-[30px]">
					<Heading title="Our approach:" />
					<div
						className="w-fit flex items-center justify-between bg-primaryYellow cursor-pointer rounded-full group"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<RoundButton
							href="/about"
							title="learn more"
							bgcolor="#fbc10d"
							className="bg-primaryYellow text-darkBlue"
							style={{ color: "#19254c" }}
						/>
					</div>
				</div>
				<div
					className={`w-[50%] sm:w-full xm:w-full transition transform duration-[1.5s] ease-[.215,.61,.355,1] rounded-[15px] overflow-hidden ${
						hovered && "scale-[0.96]"
					}`}>
					<Image
						src={aboutImg}
						alt="about-img"
						className={`w-full h-full transition transform duration-[2s] ease-[.215,.61,.355,1] ${
							hovered && "scale-[1.09]"
						}`}
						placeholder="empty"
					/>
				</div>
			</div>
		</section>
	);
}
