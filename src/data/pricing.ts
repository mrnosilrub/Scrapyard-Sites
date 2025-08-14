export type PricingBullet = string

export interface PricingPlan {
	name: string
	price: string
	bullets: PricingBullet[]
}

export const PRICING_PLANS: PricingPlan[] = [
	{
		name: "Standard Launch — $2,499",
		price: "$2,499",
		bullets: [
			"One‑page site with professional copy and design",
			"Contact form routed to your inbox",
			"Google Maps embed",
			"Basic on‑site SEO",
			"30 days of updates post‑launch",
			"Launch in 7 days",
		],
	},
	{
		name: "Premium Launch — $5,499",
		price: "$5,499",
		bullets: [
			"Multi‑page site with professional copy",
			"Forms on key pages",
			"Location pages with maps and local SEO",
			"Structured data (schema)",
			"60 days of updates post‑launch",
			"Launch in 10 days",
		],
	},
	{
		name: "Care Plan — $99/mo",
		price: "$99/mo",
		bullets: [
			"Unlimited edits with 24‑hour turnaround",
			"Security patches and backups",
			"Uptime monitoring",
			"Quarterly performance reports",
		],
	},
]
