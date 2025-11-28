import "@/styles/globals.css";
import { Footer } from "@/components";
import Header from "@/components/header";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

export default function App({
	Component,
	pageProps,
	router,
}: {
	Component: any;
	pageProps: any;
	router: any;
}) {
	return (
		<>
			<Head>
				<title>Gestalty - Cognitive Precision Learning Platform for Competitive Exams</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Header />
			<AnimatePresence mode="wait">
				<Component
					key={router.route}
					{...pageProps}
				/>
			</AnimatePresence>
			<Footer />
		</>
	);
}
