import { Section } from './types';

export const SURVEY_SECTIONS: Section[] = [
  {
    id: 'section-1',
    title: 'Your Contact Info',
    description: "Claim your early access & ₦5,000 credit. Note: If you skip providing your contact details, we won't be able to notify you when we launch.",
    questions: [
      {
        id: 'q1',
        text: "What's your first name? (Optional)",
        type: 'short_answer',
        required: false,
        placeholder: "Your Name"
      },
      {
        id: 'q2',
        text: "What's your WhatsApp number? (Optional)",
        type: 'short_answer',
        required: false,
        placeholder: "e.g., 08012345678"
      },
      {
        id: 'q3',
        text: "What's your email? (Optional)",
        type: 'short_answer',
        required: false,
        placeholder: "you@example.com"
      },
      {
        id: 'q4',
        text: "Where do you live?",
        type: 'dropdown',
        required: true,
        options: [
          "Lagos - Mainland",
          "Lagos - Island/Lekki",
          "Abuja",
          "Port Harcourt",
          "Ibadan",
          "Kano",
          "Other city in Nigeria",
          "Outside Nigeria"
        ]
      }
    ]
  },
  {
    id: 'section-2',
    title: 'About Your Crypto Usage',
    description: 'Help us understand how you use crypto today.',
    questions: [
      {
        id: 'q5',
        text: "How long have you been using crypto?",
        type: 'multiple_choice',
        required: true,
        options: [
          "Less than 6 months",
          "6 months - 1 year",
          "1-2 years",
          "2-5 years",
          "5+ years"
        ]
      },
      {
        id: 'q6',
        text: "How much crypto do you currently hold? (Approximate total value)",
        type: 'multiple_choice',
        required: true,
        options: [
          "Less than $100 (Less than ₦150K)",
          "$100 - $500 (₦150K - ₦750K)",
          "$500 - $1,000 (₦750K - ₦1.5M)",
          "$1,000 - $5,000 (₦1.5M - ₦7.5M)",
          "$5,000 - $10,000 (₦7.5M - ₦15M)",
          "More than $10,000 (₦15M+)",
          "Prefer not to say"
        ]
      },
      {
        id: 'q7',
        text: "Which cryptocurrencies do you hold? (Select all)",
        type: 'checkboxes',
        required: true,
        options: [
          "USDT (Tether)",
          "USDC",
          "Bitcoin (BTC)",
          "Ethereum (ETH)",
          "BNB",
          "Solana (SOL)",
          "Other stablecoins",
          "Other altcoins"
        ]
      },
      {
        id: 'q8',
        text: "How often do you convert crypto to Naira?",
        type: 'multiple_choice',
        required: true,
        options: [
          "Daily",
          "2-3 times per week",
          "Once a week",
          "2-3 times per month",
          "Once a month",
          "Rarely"
        ]
      },
      {
        id: 'q9',
        text: "How much do you typically convert per month?",
        type: 'multiple_choice',
        required: true,
        options: [
          "Less than ₦50,000",
          "₦50,000 - ₦200,000",
          "₦200,000 - ₦500,000",
          "₦500,000 - ₦1,000,000",
          "₦1,000,000 - ₦5,000,000",
          "More than ₦5,000,000"
        ]
      }
    ]
  },
  {
    id: 'section-3',
    title: 'Your Current Pain Points',
    description: "We want to fix what's broken. Tell us what annoys you.",
    questions: [
      {
        id: 'q10',
        text: "How do you currently convert crypto to Naira? (Select all you use)",
        type: 'checkboxes',
        required: true,
        options: [
          "Binance P2P",
          "Bybit P2P",
          "Paxful / Noones",
          "WhatsApp P2P traders",
          "Telegram P2P traders",
          "Local agents (physical meetup)",
          "Friends/family",
          "Quidax",
          "Luno",
          "Other exchange",
          "Other method"
        ]
      },
      {
        id: 'q11',
        text: "What's your #1 BIGGEST frustration when converting crypto?",
        type: 'multiple_choice',
        required: true,
        options: [
          "High fees (3-5% or more)",
          "Bad exchange rates",
          "Takes too long (hours/days)",
          "Fear of getting scammed",
          "Bank account freezing issues",
          "Hard to find trusted traders",
          "No easy way to spend (need card)",
          "Too many apps needed",
          "Other"
        ]
      },
      {
        id: 'q12',
        text: "Have you ever been scammed or lost money during a crypto transaction?",
        type: 'multiple_choice',
        required: true,
        options: [
          "Yes, I lost money and never recovered it",
          "Yes, but I eventually got my money back",
          "No, but I've had very close calls",
          "No, never had issues"
        ]
      },
      {
        id: 'q13',
        text: "What's the highest fee you've paid on a single transaction?",
        type: 'multiple_choice',
        required: true,
        options: [
          "1-2%",
          "2-3%",
          "3-5%",
          "5-10%",
          "More than 10%",
          "I don't usually check"
        ]
      },
      {
        id: 'q14',
        text: "What's the longest you've waited to complete a crypto-to-Naira transaction?",
        type: 'multiple_choice',
        required: true,
        options: [
          "Less than 30 minutes",
          "30 minutes - 1 hour",
          "1-3 hours",
          "3-6 hours",
          "6-24 hours",
          "More than 24 hours"
        ]
      }
    ]
  },
  {
    id: 'section-4',
    title: 'Your Dream Solution',
    description: "If we could build anything for you, what would matter most?",
    questions: [
      {
        id: 'q15',
        text: "Do you currently have a Dollar card? (Grey, Chipper, Geegpay, etc.)",
        type: 'multiple_choice',
        required: true,
        options: [
          "Yes, I use Grey",
          "Yes, I use Chipper Cash",
          "Yes, I use Geegpay",
          "Yes, I use another service",
          "No, but I want one",
          "No, I don't need one"
        ]
      },
      {
        id: 'q16',
        text: "If you have a Dollar card, what's your biggest problem with it?",
        type: 'checkboxes',
        required: true,
        options: [
          "High fees",
          "Can't fund directly with crypto",
          "Funding is slow",
          "Card gets declined often",
          "Poor customer support",
          "Account gets frozen",
          "I don't have problems",
          "I don't have a Dollar card"
        ]
      },
      {
        id: 'q17',
        text: "Flash will let you: Hold crypto + Naira, Swap instantly (1-1.5%), Get Dollar card, Cash out via agents, & Trade P2P. Would you use this?",
        type: 'multiple_choice',
        required: true,
        options: [
          "Definitely yes! I need this now",
          "Probably yes",
          "Maybe, I'd need to try it first",
          "Probably not",
          "Definitely not"
        ]
      },
      {
        id: 'q18',
        text: "Which feature is MOST important to you? (Pick only ONE)",
        type: 'multiple_choice',
        required: true,
        options: [
          "Low fees (cheaper than what I pay now)",
          "Speed (instant conversions)",
          "Virtual Dollar card for online shopping",
          "Cash out via local agents",
          "Safety (no scam risk, verified traders)",
          "All-in-one app (everything in one place)",
          "Earn yield on my stablecoins",
          "Large P2P trades without limits"
        ]
      },
      {
        id: 'q19',
        text: "What's the MAXIMUM fee you'd pay for instant, safe, guaranteed crypto conversion?",
        type: 'multiple_choice',
        required: true,
        options: [
          "0.5%",
          "1%",
          "1.5%",
          "2%",
          "2.5%",
          "3% (same as now, but safer)",
          "I want it free"
        ]
      }
    ]
  },
  {
    id: 'section-5',
    title: 'Final Questions',
    description: "Just a few more questions to help us serve you better.",
    questions: [
      {
        id: 'q20',
        text: "What's your age range?",
        type: 'multiple_choice',
        required: true,
        options: [
          "18-24",
          "25-34",
          "35-44",
          "45+"
        ]
      },
      {
        id: 'q21',
        text: "What do you do for work?",
        type: 'multiple_choice',
        required: true,
        options: [
          "Employed (9-5 job)",
          "Freelancer / Remote worker",
          "Business owner",
          "Full-time crypto trader",
          "Student",
          "Unemployed / Between jobs",
          "Other"
        ]
      },
      {
        id: 'q22',
        text: "How did you hear about this survey?",
        type: 'multiple_choice',
        required: true,
        options: [
          "WhatsApp",
          "Telegram",
          "Twitter/X",
          "Friend told me",
          "Instagram",
          "Other"
        ]
      },
      {
        id: 'q23',
        text: "Would you refer Flash to your friends if it solved your problems?",
        type: 'multiple_choice',
        required: true,
        options: [
          "Yes, definitely! I'd tell everyone",
          "Yes, if it actually works well",
          "Maybe",
          "Probably not",
          "No"
        ]
      },
      {
        id: 'q24',
        text: "Anything else you want us to know? Any features you'd love to see?",
        type: 'paragraph',
        required: false,
        placeholder: "Tell us your thoughts..."
      }
    ]
  }
];