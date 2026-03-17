import { Mountain, Users, Leaf, Coffee } from "lucide-react";

export const siteConfig = {
  name: "HomHoh Coffee",
  tagline: "Mountain coffee from mountain people. Direct from Mae Hong Son, Thailand to Milwaukee, Wisconsin.",
  heroHeading: "Mountain Coffee,\nMountain People",
  heroSubheading: "49 families. 300 kilos. Every dollar returned to the people who grow it.",
  heroLabel: "Mae Hong Son, Thailand  \u2192  Milwaukee, Wisconsin",
};

export const navItems = [
  { label: "Our Story", href: "#story" },
  { label: "The Coffee", href: "#coffee" },
  { label: "Impact", href: "#impact" },
  { label: "Where to Buy", href: "#where-to-buy" },
];

export const storyContent = {
  part1: {
    label: "The Story",
    title: "How It Started",
    paragraphs: [
      "Jack was winding down a long career when he found himself in the mountains of Northern Thailand. What started as a trip became a connection \u2014 with the land, the people, and the coffee they grew.",
      "In Mae Hong Son, he met Manap and his family \u2014 three generations of farmers tending small plots on misty mountain slopes. The coffee was extraordinary. But more than that, the people were extraordinary.",
    ],
    // TODO: Replace with real photo of Jack meeting farmers
    image: "/images/story-meeting.webp",
    imageLabel: "Jack meeting farmers in Mae Hong Son",
  },
  part2: {
    title: "The Mission",
    paragraphs: [
      "The plan is simple: import a small amount of exceptional mountain coffee to Milwaukee, sell it to local roasters and coffee shops, and send every dollar of profit back to the 49 families who grow it.",
      "No middlemen. No corporate overhead. Just good coffee connecting two communities across the world \u2014 mountain people in Thailand and coffee lovers in Wisconsin.",
    ],
    // TODO: Replace with real photo of Mae Hong Son landscape
    image: "/images/story-farm-landscape.webp",
    imageLabel: "Mae Hong Son mountain farm landscape",
  },
};

export const coffeeCards = [
  {
    icon: Mountain,
    title: "Origin",
    description:
      "Mae Hong Son Province, Northern Thailand. Mountain-grown at elevation, where cool air and rich soil produce exceptional beans.",
  },
  {
    icon: Users,
    title: "The Farmers",
    description:
      "49 families, each tending approximately 2 acres. Multi-generational knowledge passed from grandparents to grandchildren.",
  },
  {
    icon: Leaf,
    title: "The Harvest",
    description:
      "Small batch \u2014 300 kilograms total. Hand-picked at peak ripeness and carefully processed by the families who grow it.",
  },
  {
    icon: Coffee,
    title: "The Cup",
    description:
      "Mountain-grown Thai coffee with a distinctive character. Notes and details coming soon as we dial in with local roasters.",
  },
];

export const impactData = {
  headline: "100%",
  subheading: "of profits returned directly to the 49 farming families",
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

// TODO: Replace with real testimonials from Milwaukee roasters
export const reviews = [
  {
    quote:
      "The quality of this Thai mountain coffee surprised us. It has a character you don\u2019t find in the usual origins we source from.",
    name: "Sarah K.",
    title: "Head Roaster",
    business: "Milwaukee Coffee Co.",
  },
  {
    quote:
      "Knowing that every dollar goes back to the families who grow this \u2014 that\u2019s the kind of sourcing story our customers care about.",
    name: "Mike R.",
    title: "Owner",
    business: "Lakefront Roasters",
  },
  {
    quote:
      "We\u2019ve been looking for something unique to offer. HomHoh gives us that, with a story that\u2019s impossible not to share.",
    name: "David L.",
    title: "Buyer",
    business: "Third Coast Coffee",
  },
];

export const contactInfo = {
  email: "hello@homhoh.com",
  location: "Milwaukee, Wisconsin",
};
