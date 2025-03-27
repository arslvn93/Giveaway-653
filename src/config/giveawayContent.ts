// This file centralizes all editable content for the giveaway page

// Prize section
export const prizeImages = [
  "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixid=M3w3MjQzNjF8MXwxfHNlYXJjaHwxfHxjYWZlfGVufDB8fHx8MTc0MzEwODMzMnww&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwyfHxjYWZlfGVufDB8fHx8MTc0MzEwODMzMnww&ixlib=rb-4.0.3", 
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwzfHxjYWZlfGVufDB8fHx8MTc0MzEwODMzMnww&ixlib=rb-4.0.3", 
];
export const prizeContent = {
  title: "Cafe Landwer Dining Gift Card",
  description: "Enjoy a $150 dining experience at Cafe Landwer, a local favorite known for its vibrant atmosphere and delicious cuisine. Perfect for food enthusiasts and families alike!",
  features: [
    "Gift card valued at $150",
    "Dine at one of the area's most popular spots",
    "Experience a variety of culinary delights",
    "Easy entry via our 'Just Sold' mailer QR code",
    "A chance to discover your new favorite restaurant"
  ],
  value: "$150",
};

// Header section
export const headerContent = {
  title: "Win a $150 Gift Card to Cafe Landwer!",
  description: "Enter for your chance to enjoy a delightful dining experience at one of the area's favorite eateries. No purchase necessary.",
  ctaText: "Enter Now",
  heroImage: prizeImages[0],
  secondaryImage: prizeImages[1], // Add secondary image for the header
};

// Navigation section
export const navigationContent = {
  title: "Cafe Landwer Giveaway",
  links: [
    { name: 'Home', href: '#' },
    { name: 'Prize Details', href: '#prize' },
    { name: 'How to Enter', href: '#howToEnter' },
    { name: 'Rules', href: '#rules' },
    { name: 'Contact', href: '#contact' }
  ]
};

// How to Enter section
export const howToEnterContent = {
  title: "How to Enter",
  description: "Getting started is easy! Follow these simple steps to enter our giveaway.",
  steps: [
    {
      icon: "Mail",
      title: "Scan the QR Code",
      description: "Find the QR code on our 'Just Sold' mailer and scan it to open the entry form."
    },
    {
      icon: "Share2",
      title: "Share with Friends",
      description: "Share this giveaway on social media for extra entries."
    },
    {
      icon: "Users",
      title: "Confirm Entry",
      description: "Check your email to confirm your entry and you're all set!"
    }
  ],
  benefits: [
    { 
      icon: "Clock", 
      title: "Quick & Easy", 
      desc: "Takes less than a minute" 
    },
    { 
      icon: "Trophy", 
      title: "Multiple Entries", 
      desc: "Share for more chances" 
    },
    { 
      icon: "Gift", 
      title: "Exclusive Prize", 
      desc: "Dine for $150 on us" 
    }
  ],
  formLabels: {
    nameLabel: "Your Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    submitButton: "Enter Giveaway",
    processingText: "Processing...",
    sharingPlatforms: ["Facebook", "Twitter", "Instagram"],
    sharingText: "Share for Extra Entries:",
    termsText: "By entering, you agree to our Terms & Conditions and Privacy Policy."
  },
  successMessage: {
    title: "Entry Submitted!",
    description: "Check your email to confirm your entry."
  },
  currentEntries: 482
};

// Rules section
export const rulesContent = {
  title: "Rules & Eligibility",
  description: "Please review the following rules and eligibility requirements before entering the giveaway.",
  rules: [
    {
      question: "Who is eligible to enter?",
      answer: "Anyone 18 years or older residing in the eligible area can enter this giveaway.",
    },
    {
      question: "How long does the giveaway run?",
      answer: "This giveaway runs until April 23, 2025, as indicated by the countdown timer.",
    },
    {
      question: "How will the winner be selected?",
      answer: "The winner will be selected randomly from all valid entries. We use a certified random selection tool to ensure fairness.",
    },
    {
      question: "When and how will the winner be notified?",
      answer: "The winner will be notified via email within 48 hours after the giveaway ends. They must respond within 72 hours to claim their prize.",
    },
    {
      question: "How many times can I enter?",
      answer: "Each person may enter once. Additional entries can be earned through sharing on social media (up to 3 additional entries).",
    },
    {
      question: "Is my information secure?",
      answer: "Yes, we take privacy seriously. Your information will only be used for this giveaway and will not be shared with third parties.",
    },
  ],
  imageUrl: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800",
  tipsForEntering: [
    "Double-check your email address before submitting your entry",
    "Share on social media for additional entry opportunities",
    "Set a calendar reminder for the drawing date"
  ],
  importantNotice: "All winners will be contacted via the email provided during entry. Make sure to check your inbox (and spam folder) regularly after the giveaway ends.",
  supportEmail: "support@giveaway.com",
  termsText: "By entering, you agree to all rules and terms.",
  downloadRulesText: "Download Full Rules PDF"
};

// Contact section
export const contactContent = {
  title: "Get In Touch",
  email: "info@theskygroup.ca",
  phone: "289-210-5250",
  brokerage: {
    name: "The Sky Group",
    address: "123 Arena Blvd, Toronto"
  },
  disclaimer: "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  privacyPolicyText: "Privacy Policy"
};

// Footer section
export const footerContent = {
  aboutText: "The Sky Group specializes in offering exclusive giveaways and real estate insights to our community.",
  email: "info@theskygroup.ca",
  phone: "289-210-5250",
  quickLinks: ["Home", "About", "Listings", "Contact", "Privacy Policy"],
  newsletterText: "Subscribe to our newsletter for the latest updates on giveaways and exclusive offers.",
  brokerage: {
    name: "The Sky Group",
    address: "123 Arena Blvd, Toronto"
  },
  disclaimer: "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  company: "The Sky Group",
  privacyPolicyText: "Privacy Policy"
};

// Countdown
export const countdownContent = {
  endDate: new Date("April 23, 2025")
};

// Color scheme configuration for the entire giveaway
export const colorScheme = {
  primary: {
    main: 'amber-600',
    light: 'amber-400',
    dark: 'amber-800',
    gradient: 'from-amber-500 to-amber-700',
    text: 'amber-700',
    textLight: 'amber-500',
    textDark: 'amber-900',
    hover: 'amber-700',
    border: 'amber-200',
    background: 'amber-50',
    accent: 'amber-100',
    accentDark: 'amber-300',
  },
  secondary: {
    main: 'white',
    text: 'gray-700',
    textLight: 'gray-600',
    textDark: 'gray-800',
    border: 'gray-200',
    background: 'white',
    accent: 'gray-100',
  },
  utility: {
    success: 'green-600',
    successLight: 'green-100',
    error: 'red-600',
    errorLight: 'red-100',
    warning: 'yellow-600',
    warningLight: 'yellow-100',
    info: 'blue-600',
    infoLight: 'blue-100',
  },
  gradients: {
    header: 'from-amber-100/70 via-amber-50/40 to-transparent',
    countdownBg: 'from-amber-800 to-amber-950',
    countdownText: 'from-amber-200 to-amber-400',
    prizeTitle: 'from-amber-700 to-amber-500',
    button: 'from-amber-500 to-amber-600',
    buttonHover: 'from-amber-600 to-amber-700',
  },
  shadows: {
    small: 'shadow-md',
    medium: 'shadow-lg',
    large: 'shadow-xl',
    extraLarge: 'shadow-2xl',
    glow: 'shadow-[0_0_15px_rgba(251,191,36,0.3)]',
  },
  animations: {
    float: 'animate-float',
    pulseSlow: 'animate-pulse-slow',
    bounceSlow: 'animate-bounce-slow',
  }
}; 