import { Mountain, Users, Leaf, Coffee, Award, Flower2 } from "lucide-react";

export const siteConfig = {
  name: "HomHoh Coffee",
  tagline: "Mountain coffee from mountain people. Direct from Mae Hong Son, Thailand to Milwaukee, Wisconsin.",
  heroHeading: "Mountain Coffee,\nMountain People",
  heroSubheading: "25 families. Every dollar returned to the people who grow it.",
  heroLabel: "Mae Hong Son, Thailand  \u2192  Milwaukee, Wisconsin",
};

export const navItems = [
  { label: "Our Story", href: "#story" },
  { label: "The Farmer", href: "#farmer" },
  { label: "The Coffee", href: "#coffee" },
  { label: "Impact", href: "#impact" },
  { label: "Where to Buy", href: "#where-to-buy" },
];

export const storyContent = {
  label: "The Story",
  title: "How It Started",
  paragraphs: [
    "Jack has been traveling to Southeast Asia since 2015, propelled by two things: a love of people and a love of good coffee. That combination led him to the mountains of Northern Thailand \u2014 and kept bringing him back for the last seven years.",
    "In Mae Hong Son, he met Manop and his family \u2014 three generations of Karen Tribe farmers tending small plots on misty mountain slopes. The coffee was extraordinary. But more than that, the people were extraordinary.",
    "What started as a connection became a mission: bring this exceptional coffee to Milwaukee, and send every dollar of profit back to the families who grow it.",
  ],
};

export const manopContent = {
  label: "The Farmer",
  title: "Meet Manop",
  part1: {
    subtitle: "From Opium to Coffee",
    paragraphs: [
      "Manop\u2019s father received coffee seeds from the Thai government as part of a program to help Karen families transition away from opium cultivation. From the age of five, Manop worked alongside his family in the fields, learning that coffee could bring both prosperity and dignity.",
      "For over 42 years, he has dedicated himself to nurturing coffee and transforming it into something truly special: specialty coffee.",
    ],
  },
  part2: {
    subtitle: "Building Something Together",
    paragraphs: [
      "When his father passed away, Manop left his government job and returned home to continue the legacy. Out of grief, he found strength \u2014 founding a Collaborative of 25 families committed to working together, protecting their land, and sharing knowledge about specialty coffee.",
      "They embraced organic practices rooted in Karen traditions of living in harmony with the forest. In 2023, Manop became a certified Q Grader through the Coffee Quality Institute\u2019s first program in Thailand \u2014 learning to evaluate, cup, and process coffee with precision.",
    ],
  },
  bridge:
    "This is where Jack\u2019s journey and Manop\u2019s story converge. Two people from opposite sides of the world, connected by coffee and a shared belief: that good things happen when you put people first.",
};

export const coffeeCards = [
  {
    icon: Mountain,
    title: "Origin",
    description:
      "Mae Ho, Mae Hong Son Province. A community forest at 3,280\u20133,940 ft elevation. Shade-grown under 65% canopy coverage alongside avocado and macadamia trees.",
  },
  {
    icon: Users,
    title: "The Collaborative",
    description:
      "25 Karen Tribe families, 49 farmers working together. Organic practices, shared knowledge, and a commitment to protecting their land and traditions.",
  },
  {
    icon: Leaf,
    title: "The Harvest",
    description:
      "Bourbon, Catimor, and Catuai varieties. Hand-picked at peak ripeness, with only ripe cherries selected. Nourished by organic fertilizers from the forest floor.",
  },
  {
    icon: Award,
    title: "GAP Certified",
    description:
      "Certified under Thailand\u2019s Good Agricultural Practices (GAP) \u2014 standards managed by the Ministry of Agriculture ensuring safe, high-quality, and sustainable production.",
  },
  {
    icon: Flower2,
    title: "The Signature",
    description:
      "White floral character with jasmine-like aroma and bright acidity. A delicate note that reflects the soul of Mae Ho \u2014 distinct from any other Thai coffee region.",
  },
  {
    icon: Coffee,
    title: "The Cup",
    description:
      "Roasted locally in Milwaukee and shared with the community. Come say hello, hear the story, and take a bag home.",
  },
];

export const terroirData = [
  { label: "Altitude", value: "3,280\u20133,940 ft ASL" },
  { label: "Climate", value: "Tropical savanna (Aw)" },
  { label: "Shade", value: "65% canopy coverage" },
  { label: "Rainfall", value: "48.6 in/year (May\u2013Oct)" },
  { label: "Temperature", value: "55\u201373\u00b0F nights / 84\u2013100\u00b0F days" },
  { label: "Soil", value: "Organic forest floor" },
  { label: "Varieties", value: "Bourbon, Catimor, Catuai" },
  { label: "Companions", value: "Avocado, macadamia intercropped" },
];

export const cuppingScores = [
  { method: "Natural", score: 85, description: "Sunlight and patience define the natural process" },
  { method: "Honey", score: 84.5, description: "The coffee\u2019s sticky mucilage stays on as beans dry" },
  { method: "Washed", score: 83.5, description: "Cherries carefully pulped, fermented, and rinsed in pure mountain water" },
];

export const impactData = {
  headline: "100%",
  subheading: "of profits returned directly to the 25 farming families",
  breakdown: [
    {
      label: "Direct payment to farmers",
      description: "Every dollar of profit goes back to Mae Hong Son",
    },
    {
      label: "Transparent costs",
      description: "Shipping, import, and local operations are covered at cost",
    },
    {
      label: "Community investment",
      description: "Families decide how to invest in their farms and futures",
    },
  ],
};

// TODO: Replace with real testimonials
export const reviews = [
  {
    quote:
      "I tried a bag on a whim. Best coffee I\u2019ve had in years \u2014 and the story behind it makes it even better.",
    name: "Sarah K.",
    title: "Regular Customer",
    business: "Milwaukee, WI",
  },
  {
    quote:
      "Knowing that every dollar goes back to the families who grow this \u2014 that\u2019s the kind of thing that keeps me coming back.",
    name: "Mike R.",
    title: "Coffee Lover",
    business: "Milwaukee, WI",
  },
  {
    quote:
      "My friend told me about HomHoh and I had to try it. Now I tell everyone. This is how coffee should be done.",
    name: "David L.",
    title: "Word of Mouth Convert",
    business: "Milwaukee, WI",
  },
];

export const contactInfo = {
  email: "hello@homhoh.com",
  location: "Milwaukee, Wisconsin",
  facebookUrl: "https://www.facebook.com/homhoh.coffee.3/",
};
