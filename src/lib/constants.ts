import { Mountain, Users, Leaf, Coffee, Award } from "lucide-react";

export const siteConfig = {
  name: "HomHoh Coffee",
  tagline: "Mountain coffee from mountain people. Direct from Mae Hong Son, Thailand to Milwaukee, Wisconsin.",
  heroHeading: "Mountain Coffee,\nMountain People",
  heroSubheading: "49 families. Every dollar returned to the people who grow it.",
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
      "Jack has been traveling to Southeast Asia since 2015, propelled by two things: a love of people and a love of good coffee. That combination led him to the mountains of Northern Thailand \u2014 and kept bringing him back for the last seven years.",
      "In Mae Hong Son, he met Manap and his family \u2014 Karen Tribe farmers, three generations deep, tending small plots on misty mountain slopes. The coffee was extraordinary. But more than that, the people were extraordinary.",
    ],
    image: "/images/story-meeting.webp",
    imageLabel: "Jack meeting farmers in Mae Hong Son",
  },
  part2: {
    title: "The Mission",
    paragraphs: [
      "The plan is simple: import a small amount of exceptional mountain coffee to Milwaukee, roast it here, and share it with the community. No big distribution, no corporate supply chain \u2014 just great coffee, hand to hand, word of mouth.",
      "Every dollar of profit goes back to the 49 Karen Tribe families who grow it. No middlemen. No overhead. Just good coffee connecting two communities across the world \u2014 mountain people in Thailand and coffee lovers in Wisconsin.",
    ],
    image: "/images/story-farm-landscape.webp",
    imageLabel: "Mae Hong Son mountain farm landscape",
  },
};

export const coffeeCards = [
  {
    icon: Mountain,
    title: "Origin",
    description:
      "Mae Hong Son Province, Northern Thailand. Grown at 2,950\u20133,940 ft elevation, where cool mountain air and rich soil produce exceptional Arabica beans.",
  },
  {
    icon: Users,
    title: "The Farmers",
    description:
      "49 Karen Tribe families, each tending approximately 2 acres. Multi-generational knowledge passed from grandparents to grandchildren.",
  },
  {
    icon: Leaf,
    title: "The Harvest",
    description:
      "Small batch, hand-picked at peak ripeness and carefully processed by the families who grow it. Quality over quantity, every season.",
  },
  {
    icon: Award,
    title: "GAP Certified",
    description:
      "Certified under Thailand\u2019s Good Agricultural Practices (GAP) \u2014 standards managed by the Ministry of Agriculture ensuring safe, high-quality, and sustainable production.",
  },
  {
    icon: Coffee,
    title: "The Cup",
    description:
      "Roasted locally in Milwaukee and shared with the community. Come say hello, hear the story, and take a bag home.",
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
