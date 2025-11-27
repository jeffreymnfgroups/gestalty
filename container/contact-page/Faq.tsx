"use client";
import { useState } from "react";
import { FaqItems, clientsItem } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
	const [activeAccordion, setActiveAccordion] = useState(clientsItem[0].id);
	const toggleAccordion = (itemId: any) => {
		setActiveAccordion((prev) => (prev === itemId ? null : itemId));
	};

	return (
		<section className="w-full padding-y mt-[-10px] bg-offWhite z-30 relative rounded-t-[20px]">
			<h1 className="sub-heading padding-x font-medium font-FoundersGrotesk font-semibold text-darkBlue pb-[50px]">
				Frequently asked <br />
				questions:
			</h1>
			{FaqItems.map((item) => (
				<div
					key={item.id}
					className={`w-full flex py-[10px] flex-col ${
						item.id == 1
							? "border-y border-grayBlue/30"
							: "border-b border-grayBlue/30"
					}`}>
					<div className="w-full flex items-center justify-between sm:gap-[15px] xm:gap-[15px] py-[10px] padding-x">
						<div className="w-[50%] sm:w-full xm:w-full">
							<h1 className="paragraph font-normal font-NeueMontreal text-darkBlue">
								{item.question}
							</h1>
						</div>
						<div className="w-[50%] sm:w-full xm:w-full flex items-center justify-between">
							<div>
								<h3 className="paragraph font-normal font-NeueMontreal text-grayBlue">
									{item.title}
								</h3>
							</div>
							<div className="flex items-end justify-end">
								<button
									className={`paragraph font-normal font-NeueMontreal uppercase transition-all duration-200 ease-in-out ${
										activeAccordion === item.id
											? "text-grayBlue"
											: "text-primaryYellow link-flash hover:text-darkBlue"
									}`}
									onClick={() => toggleAccordion(item.id)}>
									{activeAccordion === item.id ? "close" : "read"}
								</button>
							</div>
						</div>
					</div>
					<div className="w-full flex justify-between padding-x">
						<div className="w-[50%] sm:hidden xm:hidden" />
						<div className="w-[50%] sm:w-full xm:w-full">
							<AnimatePresence>
								{activeAccordion === item.id && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{
											ease: [0.4, 0, 0.2, 1],
											duration: 1.3,
										}}>
										<div className="flex flex-col gap-[20px] py-[30px]">
											<div className="">
												<p className="paragraph tracking-wider font-normal font-NeueMontreal text-darkBlue">
													{item.description}
												</p>
											</div>
											{item.links.map((link) => (
												<div
													key={link.id}
													className="flex pt-[20px] sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px] justify-between gap-[80px]">
													<span className="paragraph tracking-wider font-normal font-NeueMontreal text-primaryYellow font-semibold">
														{link.title}
													</span>
													<p className="paragraph tracking-wider font-normal font-NeueMontreal text-grayBlue">
														{link.description}
													</p>
												</div>
											))}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}
