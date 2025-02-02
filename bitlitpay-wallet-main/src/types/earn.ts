export type Tier = "welcome" | "bronze" | "silver" | "gold" | "platinum"

export type TierDetails = {
  name: string
  minSpend: string
  points: number
  maxPoints: number
  maxSats: number
  maxNaira: string
  color: string
}

export const tiers: Record<Tier, TierDetails> = {
  welcome: {
    name: "Welcome Tier",
    minSpend: "1,000",
    points: 1,
    maxPoints: 10000,
    maxSats: 2500,
    maxNaira: "3,854",
    color: "gray",
  },
  bronze: {
    name: "Bronze Tier",
    minSpend: "10,000,001",
    points: 2,
    maxPoints: 80000,
    maxSats: 20000,
    maxNaira: "30,837",
    color: "bronze",
  },
  silver: {
    name: "Silver Tier",
    minSpend: "40,000,001",
    points: 3,
    maxPoints: 180000,
    maxSats: 45000,
    maxNaira: "69,383",
    color: "silver",
  },
  gold: {
    name: "Gold Tier",
    minSpend: "100,000,001",
    points: 4,
    maxPoints: 400000,
    maxSats: 100000,
    maxNaira: "154,185",
    color: "gold",
  },
  platinum: {
    name: "Platinum Tier",
    minSpend: "200,000,001",
    points: 5,
    maxPoints: 1000000,
    maxSats: 250000,
    maxNaira: "385,462",
    color: "platinum",
  },
}