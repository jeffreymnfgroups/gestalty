export const heroAnimations = {
	backgroundFade: {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: [0.33, 1, 0.68, 1],
			},
		},
	},
	headlineWord: {
		initial: { opacity: 0, y: 20 },
		animate: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay: 0.5 + i * 0.1,
				ease: [0.33, 1, 0.68, 1],
			},
		}),
	},
	secondaryText: {
		initial: { opacity: 0, y: 20 },
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay: 1,
				ease: [0.33, 1, 0.68, 1],
			},
		},
	},
	valueProp: {
		initial: { opacity: 0, y: 20 },
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay: 1.2,
				ease: [0.33, 1, 0.68, 1],
			},
		},
	},
	ctaButton: {
		initial: { opacity: 0, scale: 0.8 },
		animate: (i: number) => ({
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				delay: 1.5 + i * 0.1,
				ease: [0.33, 1, 0.68, 1],
			},
		}),
	},
	dashboardPreview: {
		initial: { opacity: 0, scale: 0.95 },
		animate: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				delay: 2,
				ease: [0.33, 1, 0.68, 1],
			},
		},
	},
	statCounter: {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				duration: 0.6,
				delay: 2,
				ease: [0.33, 1, 0.68, 1],
			},
		},
	},
	headlineHover: {
		hover: {
			scale: 1.02,
			transition: {
				duration: 0.3,
				ease: [0.33, 1, 0.68, 1],
			},
		},
	},
};

