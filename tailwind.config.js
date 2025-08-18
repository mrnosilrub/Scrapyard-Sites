import forms from "@tailwindcss/forms"
import typography from "@tailwindcss/typography"
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
	safelist: [
		"mobile-menu-overlay",
		"menu-open",
		"menu-showing",
		"menu-content",
		"mobile-nav-item",
		"hamburger-icon",
		"hamburger-line",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "2.25rem", // 36px for mobile
				sm: "2.25rem", // 36px for mobile (larger)
				md: "4rem", // 64px for tablet
				lg: "8rem", // 128px for desktop
			},
			screens: {
				sm: "412px",
				md: "768px",
				lg: "1200px",
			},
		},
		extend: {
			fontFamily: {
				sans: [
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"Segoe UI",
					"Roboto",
					"Noto Sans",
					"Ubuntu",
					"Cantarell",
					"Helvetica Neue",
					"Arial",
					"sans-serif",
				],
			},
			colors: {
				brand: {
					orange: "#D75E02",
				},
			},
			scale: {
				98: "0.98",
			},
			boxShadow: {
				header: "0 1px 2px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)",
			},
			spacing: {
				"viewport-mobile": "2.25rem", // 36px
				"viewport-tablet": "4rem", // 64px
				"viewport-desktop": "8rem", // 128px
			},
			screens: {
				"mobile-sm": "360px",
				"mobile-lg": "412px",
			},
		},
	},
	plugins: [forms, typography],
}
