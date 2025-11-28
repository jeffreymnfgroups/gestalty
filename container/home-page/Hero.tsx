"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { NTA, UPSC, JEE, heroImage1, heroImage2, heroImage3 } from "@/public";

// Assuming heroAnimations is defined elsewhere, but we'll use simple variants here for clarity.
const heroSplitAnimations = {
  textContainer: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { staggerChildren: 0.1, duration: 0.7, ease: "easeOut" } },
  },
  visualContainer: {
    initial: { opacity: 0, x: 50, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
  },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
};

export default function Hero() {
  return (
    <section className="w-full relative pt-16 sm:pt-0 pb-24 sm:pb-28 lg:pb-32 overflow-hidden bg-lightBeige">
      {/* Background Gradient & Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 neuron-pattern z-0"></div>

      <div className="w-full padding-x py-6 sm:py-7 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Flex Container for Split Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 py-8 md:py-12 lg:py-16">

            {/* === LEFT SIDE: TEXT CONTENT === */}
            <motion.div
              className="lg:w-1/2 flex flex-col items-start text-left gap-4 sm:gap-5 z-10"
              variants={heroSplitAnimations.textContainer}
              initial="initial"
              animate="animate"
            >
              {/* Badge/Tag */}
              <motion.div
                variants={heroSplitAnimations.item}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-primaryYellow/20 border border-primaryYellow/40 rounded-full mb-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="w-4 h-4 sm:w-5 sm:h-5 text-primaryYellow flex-shrink-0"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" 
                  />
                </svg>
                <span className="text-xs sm:text-sm font-NeueMontreal font-bold text-darkBlue">
                  Cognitive Precision Learning Platform
                </span>
              </motion.div>

              {/* Primary Headline */}
              <motion.h1
                variants={heroSplitAnimations.item}
                className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[52px] xl:text-[58px] font-bold font-FoundersGrotesk text-darkBlue tracking-[-0.02em] leading-[1.1]"
              >
                The Only Exam Prep System That Puts <span className="relative inline-block">
                  <span className="relative z-10">You in the Top 5%</span>
                  <motion.span
                    className="absolute bottom-1.5 left-0 w-full h-3 bg-primaryYellow/30 -z-0"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    style={{ originX: 0 }}
                  />
                </span> of  <br />
                Successful Aspirants
              </motion.h1>

              {/* Value Proposition */}
              <motion.p
                variants={heroSplitAnimations.item}
                className="text-[15px] sm:text-[16px] md:text-[17px] font-NeueMontreal font-semibold text-grayBlue leading-[1.6] max-w-xl mt-2"
              >
                A cognitive precision learning platform engineered to <span className="font-bold text-darkBlue">master</span>
                {" "}competitive exam preparation with <span className="font-bold text-darkBlue">structure, clarity, control, and confidence.</span>
              </motion.p>
              
              {/* Key Features/Stats as a List for punchiness */}
              <motion.div
                variants={heroSplitAnimations.item}
                className="flex flex-col gap-2 mt-3 text-darkBlue"
              >
                <div className="flex items-center gap-2 text-base sm:text-lg font-bold font-NeueMontreal">
                  <CheckCircle size={18} className="text-primaryYellow flex-shrink-0" strokeWidth={2.5} />
                  <span>Science-Backed Study Methods</span>
                </div>
                <div className="flex items-center gap-2 text-base sm:text-lg font-bold font-NeueMontreal">
                  <CheckCircle size={18} className="text-primaryYellow flex-shrink-0" strokeWidth={2.5} />
                  <span>Adaptive Learning Pathways</span>
                </div>
                <div className="flex items-center gap-2 text-base sm:text-lg font-bold font-NeueMontreal">
                  <CheckCircle size={18} className="text-primaryYellow flex-shrink-0" strokeWidth={2.5} />
                  <span>Personalized Weakness Targeting</span>
                </div>
              </motion.div>


              {/* Dual CTA Buttons */}
              <motion.div
                variants={heroSplitAnimations.item}
                className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8"
              >
                {/* Primary CTA */}
                <Link
                  href="/contact"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-primaryYellow text-darkBlue text-sm sm:text-base font-semibold font-NeueMontreal rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] glow-yellow-hover"
                  style={{
                    boxShadow: "0 6px 24px rgba(251, 193, 13, 0.35)",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    Start Your Top 5% Journey
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </Link>
                {/* Secondary CTA */}
                <Link
                  href="/demo"
                  className="group flex items-center gap-1.5 px-6 sm:px-8 py-3 sm:py-4 border-2 border-darkBlue/30 bg-lightBeige/80 backdrop-blur-sm text-darkBlue text-sm sm:text-base font-semibold font-NeueMontreal rounded-full hover:border-primaryYellow hover:bg-primaryYellow/10 transition-all duration-300 hover:scale-[1.03] science-card"
                >
                  <span>Schedule a Demo</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* === RIGHT SIDE: THREE IMAGE GRID === */}
            <motion.div
              className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-10 lg:mt-0 z-10"
              variants={heroSplitAnimations.visualContainer}
              initial="initial"
              animate="animate"
            >
              <div className="relative w-full max-w-2xl grid grid-cols-2 gap-3 sm:gap-4">
                {/* Top Large Horizontal Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="col-span-2 relative aspect-[2/1] rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer"
                >
                  <Image
                    src={heroImage1}
                    alt="AI-powered learning system"
                    fill
                    className="object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkBlue/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                {/* Bottom Left Vertical Image */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative aspect-square rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer"
                >
                  <Image
                    src={heroImage2}
                    alt="Science-backed learning methods"
                    fill
                    className="object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkBlue/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                {/* Bottom Right Vertical Image */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="relative aspect-square rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer"
                >
                  <Image
                    src={heroImage3}
                    alt="Top 5% success rate"
                    fill
                    className="object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkBlue/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* TrustBar Section - Built for India's Top Competitive Exams */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 lg:mt-24 relative z-10"
        >
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="rounded-3xl p-8 sm:p-10 lg:p-12"
              style={{ backgroundColor: "#e7e3dc" }}
            >
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium font-NeueMontreal text-darkBlue mb-8 sm:mb-10 lg:mb-12 leading-relaxed"
              >
                <span className="inline-block">Built for India's Top Competitive Exams — Trusted by</span>{" "}
                {["NEET", "State PSC", "UPSC", "JEE"].map((exam, index, array) => (
                  <span key={exam} className="inline-flex items-center">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative inline-block mx-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-primaryYellow text-darkBlue rounded-full font-bold text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] tracking-tight shadow-[0_2px_8px_rgba(251,193,13,0.3)] hover:shadow-[0_4px_12px_rgba(251,193,13,0.4)] transition-all duration-300 hover:scale-105"
                    >
                      {exam}
                    </motion.span>
                    {index < array.length - 2 && <span className="mx-1 text-darkBlue/50">,</span>}
                    {index === array.length - 2 && <span className="mx-1 sm:mx-2 text-darkBlue/50">and</span>}
                  </span>
                ))}
                <span className="inline-block ml-1 sm:ml-2">Aspirants</span>
              </motion.h2>

              {/* Scrolling Logos */}
              <div className="relative overflow-hidden">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 lg:w-40 z-10 bg-gradient-to-r from-[#e7e3dc] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 lg:w-40 z-10 bg-gradient-to-l from-[#e7e3dc] to-transparent pointer-events-none" />

                {/* Infinite Scrolling Logos */}
                <div className="overflow-hidden">
                  <motion.div
                    className="flex gap-12 sm:gap-16 lg:gap-20 items-center"
                    animate={{
                      x: ["0%", "-50%"],
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop",
                    }}
                  >
                    {/* Render logos twice for seamless infinite loop */}
                    {Array.from({ length: 2 }).map((_, setIndex) => (
                      <div key={`set-${setIndex}`} className="flex gap-12 sm:gap-16 lg:gap-20 items-center flex-shrink-0">
                        {[
                          { name: "NTA", fullName: "National Testing Agency", logo: NTA },
                          { name: "UPSC", fullName: "Union Public Service Commission", logo: UPSC },
                          { name: "JEE", fullName: "Joint Entrance Examination", logo: JEE },
                          { name: "NEET", fullName: "National Eligibility cum Entrance Test", logo: null },
                          { name: "State PSC", fullName: "State Public Service Commission", logo: null },
                        ].map((exam, index) => (
                          <div key={`${exam.name}-${setIndex}-${index}`} className="flex items-center justify-center flex-shrink-0">
                            {exam.logo ? (
                              <div className="relative w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px]">
                                <Image
                                  src={exam.logo}
                                  alt={exam.name}
                                  fill
                                  className="object-contain"
                                  sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, (max-width: 1024px) 140px, 160px"
                                  placeholder="empty"
                                />
                              </div>
                            ) : (
                              <div className="flex flex-col items-center justify-center">
                                <span className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold font-FoundersGrotesk text-darkBlue tracking-tight">
                                  {exam.name}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}