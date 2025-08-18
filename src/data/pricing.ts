export type PricingBullet = string

export interface PricingPlan {
	name: string
	price: string
	bullets: PricingBullet[]
}

export const PRICING_PLANS: PricingPlan[] = [
	{
		name: "Standard — $2,499 + $99/mo",
		price: "$2,499 + $99/mo",
		bullets: [
			"Tap‑to‑call header & sticky mobile actions",
			"‘Materials we accept’ page (fewer bad leads)",
			"Quote/Contact forms wired to your inbox",
			"Google Business Profile basics",
			"Hosting, SSL, backups, updates",
		],
	},
	{
		name: "Premium — $5,499 + $199/mo",
		price: "$5,499 + $199/mo",
		bullets: [
			"Everything in Standard",
			"Multi‑location, multi‑materials pages",
			"Hiring funnel (short app w/ file upload)",
			"Photo galleries & reviews embed",
			"Monthly content updates",
		],
	},
]
