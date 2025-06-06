import ArrowSwap from "../components/icons/ArrowSwap";
import CardSlash from "../components/icons/CardSlash";
import Cloud from "../components/icons/Cloud";
import DollarCircle from "../components/icons/DollarCircle";
import Import from "../components/icons/Import";
import Integrate from "../components/icons/Integrate";
import Lock from "../components/icons/Lock";
import MagicPen from "../components/icons/MagicPen";
import Microphone from "../components/icons/Microphone";
import Note from "../components/icons/Note";
import Organization from "../components/icons/Organization";
import Search from "../components/icons/Search";
import Slack from "../components/icons/Slack";
import SMSNotification from "../components/icons/SMSNotification";
import TwoUsers from "../components/icons/TwoUsers";
import img11 from "@/public/assets/headshots/img-11.webp"
import img1 from "@/public/assets/headshots/img-1.webp";
import img2 from "@/public/assets/headshots/img-2.webp";
import img3 from "@/public/assets/headshots/img-3.webp";
import img4 from "@/public/assets/headshots/img-4.webp";
import img5 from "@/public/assets/headshots/img-5.webp";
import img6 from "@/public/assets/headshots/img-6.webp";
import img7 from "@/public/assets/headshots/img-7.webp";
import img8 from "@/public/assets/headshots/img-8.webp";
import img9 from "@/public/assets/headshots/img-9.webp";
import img10 from "@/public/assets/headshots/img-10.webp";
import img12 from "@/public/assets/headshots/img-12.webp";
import img13 from "@/public/assets/headshots/img-13.webp";
import img14 from "@/public/assets/headshots/img-14.webp";
import img15 from "@/public/assets/headshots/img-15.webp";
import amazonLogo from "@/public/assets/logos/Amazon.webp";
import chaseLogo from "@/public/assets/logos/Chase.webp";
import exxonMobileLogo from "@/public/assets/logos/ExxonMobile.webp";
import microsoftLogo from "@/public/assets/logos/Microsoft.webp";
import netflixLogo from "@/public/assets/logos/Netflix.webp";
import viceLogo from "@/public/assets/logos/Vice.webp";
import visaLogo from "@/public/assets/logos/VISA.webp";
import walmartLogo from "@/public/assets/logos/Walmart.webp";


interface NavigationProps {
  id: number;
  link: string;
  href: string;
}

const navigationLinks: NavigationProps[] = [
 
  {
    id: 1,
    link: "Home",
    href: "#",
  },
  {
    id: 2,
    link: "Pricing",
    href: "#",
  },
  {
    id: 3,
    link: "About",
    href: "#",
  },
  {
    id: 4,
    link: "Community",
    href: "#",
  },
];

const reviews = [
  {
    id: 1,
    src:img11,
    alt: "Rachel Foster",
  },
  {
    id: 2,
    src: img7,
    alt: "Emily Thompson",
  },
  {
    id: 3,
    src: img12,
    alt: "Daniel Harris",
  },
  {
    id: 4,
    src: img9,
    alt: "Sarah Lee",
  },
  {
    id: 5,
    src: img15,
    alt: "Lucas King",
  },
];

const logos = [
  {
    id: 1,
    src: netflixLogo,
    alt: "Netflix Logo",
  },
  {
    id: 2,
    src: exxonMobileLogo,
    alt: "Exxon Mobile Logo",
  },
  {
    id: 3,
    src: microsoftLogo,
    alt: "Microsoft Logo",
  },
  {
    id: 4,
    src: viceLogo,
    alt: "Vice Logo",
  },
  {
    id: 5,
    src: walmartLogo,
    alt: "Walmart Logo",
  },
  {
    id: 6,
    src: chaseLogo,
    alt: "Chase Logo",
  },
  {
    id: 7,
    src: visaLogo,
    alt: "Visa Logo",
  },
  {
    id: 8,
    src: amazonLogo,
    alt: "Amazon Logo",
  },
];


const frequentlyAskedQuestions = [
  {
    category: "General",
    id: 1,
    questions: [
      {
        id: 1,
        alt: "Note Icon",
        Icon: Note,
        question: "What is NoteFlow?",
        answer:
          "NoteFlow is an AI-powered note-taking application designed to \
          help individuals and teams organize, manage, and retrieve notes effortlessly.",
      },
      {
        id: 2,
        alt: "Magic Pen Icon",
        Icon: MagicPen,
        question: "How does NoteFlow use AI to enhance note-taking?",
        answer:
          "NoteFlow uses AI to automatically categorize, summarize, and tag your notes, \
          making it easier to find exactly what you need. Its intelligent search functionality \
          helps you locate information by context, keywords, or themes, ensuring that your notes \
          are always organized and accessible.",
      },
      {
        id: 3,
        alt: "Two Users Icon",
        Icon: TwoUsers,
        question: "Can NoteFlow be used for team collaboration?",
        answer:
          "Absolutely! NoteFlow is designed to support both individual users and team collaboration. \
          You can share notes, collaborate in real time, assign tasks, and track progress within the platform. \
          This makes it a perfect solution for both personal and professional use.",
      },
      {
        id: 4,
        alt: "Cloud Icon",
        Icon: Cloud,
        question: "Can I access NoteFlow on multiple devices?",
        answer:
          "Yes, you can access NoteFlow from any device, including your computer, tablet, \
          and smartphone. Our app syncs seamlessly across platforms, so your notes are always \
          up-to-date and available whenever you need them.",
      },
    ],
  },
  {
    id: 2,
    category: "Pricing",
    questions: [
      {
        id: 5,
        alt: "Dollar Circle Icon",
        Icon: DollarCircle,
        question: "What pricing plans does NoteFlow offer?",
        answer:
          "NoteFlow offers several pricing tiers to meet the needs of both individuals and teams. \
          We have a free plan with basic features, as well as premium plans that provide advanced features \
          like unlimited storage, team collaboration tools, and more. You can find detailed information about \
          each plan on our Pricing page.",
      },
      {
        id: 6,
        alt: "Card Slash Icon",
        Icon: CardSlash,
        question: "Is there a free trial available for NoteFlow?",
        answer:
          "NoteFlow offers several pricing tiers to meet the needs of both individuals and teams. \
          We have a free plan with basic features, as well as premium plans that provide advanced features \
          like unlimited storage, team collaboration tools, and more. You can find detailed information about \
          each plan on our Pricing page.",
      },
      {
        id: 7,
        alt: "Arrow Swap Icon",
        Icon: ArrowSwap,
        question: "Can I change or cancel my subscription anytime?",
        answer:
          "Absolutely! You can upgrade, downgrade, or cancel your subscription at any time through your account \
          settings. If you decide to cancel, you will still have access to your plan’s features until the end of \
          your current billing cycle.",
      },
      {
        id: 8,
        alt: "Lock Icon",
        Icon: Lock,
        question: "Is my payment information secure with NoteFlow?",
        answer:
          "Yes, we take your security very seriously. All payment transactions are processed through secure, encrypted \
          channels. NoteFlow uses industry-standard security protocols to ensure your payment information is always protected. \
          For additional peace of mind, we are also compliant with GDPR and other relevant data protection regulations.",
      },
    ],
  },
  {
    id: 3,
    category: "Features",
    questions: [
      {
        id: 9,
        alt: "Organization Icon",
        Icon: Organization,
        question: "How does The Smart Organization feature work?",
        answer:
          "NoteFlow's Smart Organization feature uses advanced AI to automatically categorize and tag your notes \
          based on key topics and themes. The AI-driven analysis ensures that your notes are organized in a way that \
           makes them easy to search and retrieve, saving you time when you need to find specific information.",
      },
      {
        id: 10,
        alt: "SMS Notification Icon",
        Icon: SMSNotification,
        question: "How do Contextual Reminders help me stay on top of tasks?",
        answer:
          "Contextual Reminders use AI to analyze your notes and automatically recognize important tasks, deadlines, \
              and follow-up actions. Based on this analysis, NoteFlow will send you timely reminders to ensure you never \
              miss a critical deadline or action point.",
      },
      {
        id: 11,
        alt: "Microphone Icon",
        Icon: Microphone,
        question:
          "Can I dictate notes using the Voice-to-Text Transcription feature?",
        answer:
          "Yes! NoteFlow’s Voice-to-Text Transcription feature lets you dictate notes in real time. Whether you’re in a \
           meeting, on the go, or brainstorming ideas, simply speak, and NoteFlow will automatically convert your speech \
           into organized text. This feature makes capturing ideas effortless and hands-free.",
      },
      {
        id: 12,
        alt: "Search Icon",
        Icon: Search,
        question:
          "Can I search for specific information using the AI-powered features?",
        answer:
          "Yes! With NoteFlow’s intelligent search functionality, you can search for specific keywords, topics, or \
          even context-based information. The AI not only looks for exact matches but also understands the context \
          of your notes, helping you find relevant information quickly and efficiently.",
      },
    ],
  },
  {
    id: 4,
    category: "Integrations",
    questions: [
      {
        id: 13,
        alt: "Organization Icon",
        Icon: Organization,
        question: "What integrations does NoteFlow support?",
        answer:
          "NoteFlow integrates with a wide range of tools, including popular apps like Google Drive, Microsoft \
          OneDrive, Slack, Trello, and more. These integrations allow you to sync your notes with your existing \
          workflow and collaborate seamlessly across platforms.",
      },
      {
        id: 14,
        alt: "Integrate Icon",
        Icon: Integrate,
        question: "Will NoteFlow integrate with other apps in the future?",
        answer:
          "We are always working to expand our integration offerings to meet the needs of our users. We frequently \
        update NoteFlow to support new and popular tools, so be sure to check back for new integrations that may \
        enhance your experience.",
      },
      {
        id: 15,
        alt: "Import Icon",
        Icon: Import,
        question:
          "Can I import existing notes from other platforms into NoteFlow?",
        answer:
          "Yes, you can easily import your existing notes from platforms like Evernote, Google Keep, and Microsoft \
        OneNote into NoteFlow. This ensures a smooth transition without losing any of your important information.",
      },
      {
        id: 16,
        alt: "Slack Icon",
        Icon: Slack,
        question:
          "Does NoteFlow integrate with team collaboration tools like Slack?",
        answer:
          "Absolutely! NoteFlow integrates with Slack, allowing you to share notes and collaborate in real time \
        with your team. You can even create reminders or action items directly from your notes and have them \
        sent to your Slack channels.",
      },
    ],
  },
];

const testimonials = [
  {
    id: 1,
    rating: 4,
    description:
      "NoteFlow has completely transformed the way I manage my work notes. The AI-powered organization feature makes it so easy to find what I need, even weeks after the fact.",
    src: img7,
    name: "Emily Thompson",
    title: "Senior Manager",
  },
  {
    id: 2,
    rating: 5,
    description:
      "As a designer, I need a tool that helps me keep track of brainstorming sessions and project notes. NoteFlow’s voice-to-text transcription is a game-changer!",
    src: img3,
    name: "Michael Carter",
    title: "Product Designer",
  },
  {
    id: 3,
    rating: 5,
    description:
      "I love how NoteFlow integrates with tools like Google Drive and Slack. It makes collaboration with my team so much smoother. The contextual reminders have helped me stay on top of critical deadlines.",
    src: img9,
    name: "Sarah Lee",
    title: "Business Analyst",
  },
  {
    id: 4,
    rating: 4,
    description:
      "The smart organization of my notes is impressive. I used to waste time searching for information, but now NoteFlow does the heavy lifting, automatically categorizing everything. It’s an indispensable part of my workflow.",
    src: img4,
    name: "Jonathan Moore",
    title: "Software Engineer",
  },
  {
    id: 5,
    rating: 4,
    description:
      "NoteFlow has made managing multiple projects so much easier. I can quickly access and organize my notes, and the contextual reminders keep me on track. It’s the best tool I’ve found for staying organized.",
    src: img15,
    name: "Rachel Foster",
    title: "Project Manager",
  },
  {
    id: 6,
    rating: 5,
    description:
      "As a startup founder, my days are packed with meetings and ideas. NoteFlow’s voice-to-text feature lets me capture thoughts while I’m on the move. Plus, the cloud storage sync keeps everything safe and easily accessible.",
    src: img5,
    name: "Daniel Harris",
    title: "Entrepreneur",
  },
  {
    id: 7,
    rating: 4,
    description:
      "I’ve tried many note-taking apps, but none compare to NoteFlow. The AI-driven categorization helps me keep my content ideas organized and searchable, saving me hours every week. Highly recommended!",
    src: img1,
    name: "Olivia Carter",
    title: "Content Strategist",
  },
  {
    id: 8,
    rating: 5,
    description:
      "The voice-to-text transcription is incredibly accurate and saves me so much time when documenting meetings. Plus, I love how seamlessly it integrates with tools like Trello and Slack. NoteFlow is a must-have for anyone in design.",
    src: img6,
    name: "Thomas Williams",
    title: "UX/UI Designer",
  },
  {
    id: 9,
    rating: 4,
    description:
      "I rely heavily on my notes during client calls and follow-ups. The ability to automatically receive reminders based on my notes has made my follow-up process much smoother and more efficient. NoteFlow has been a game-changer!",
    src: img8,
    name: "Jessica Gonzalez",
    title: "Sales Executive",
  },
  {
    id: 10,
    rating: 5,
    description:
      "I can’t say enough about how helpful NoteFlow’s integrations are. Syncing my notes with Google Drive and other apps has streamlined my work processes. It’s helped me stay organized and efficient in an ever-changing environment.",
    src: img13,
    name: "Aaron Mitchell",
    title: "Customer Support",
  },
  {
    id: 11,
    rating: 4,
    description:
      "NoteFlow has been a lifesaver for organizing meeting summaries. The AI organization categorizes everything, so I no longer have to worry about sorting through piles of documents!",
    src: img10,
    name: "Grace Stevens",
    title: "HR Manager",
  },
  {
    id: 12,
    rating: 4,
    description:
      "I’m always jotting down ideas and notes for various writing projects. The voice-to-text feature lets me capture my thoughts while I’m out and about.",
    src: img14,
    name: "Ben Turner",
    title: "Freelance Writer",
  },
  {
    id: 13,
    rating: 5,
    description:
      "With NoteFlow, I’m able to keep track of ideas, strategies, and feedback effortlessly. The contextual reminders are perfect for ensuring I follow up on key tasks and deadlines. It’s become an essential part of my daily routine.",
    src: img15,
    name: "Katherine Evans",
    title: "Marketing Director",
  },
  {
    id: 14,
    rating: 4,
    description:
      "As someone who juggles multiple responsibilities, NoteFlow keeps me organized without any hassle. The seamless integrations with tools like Slack and Google Drive allow my team and I to stay in sync and work more efficiently.",
    src: img15,
    name: "Lucas King",
    title: "CEO",
  },
  {
    id: 15,
    rating: 5,
    description:
      "NoteFlow's ability to capture and organize my notes in such a detailed yet easy-to-use way has made a huge difference in my creative process. Whether I'm brainstorming or taking project notes, it’s my go-to app for staying organized.",
    src: img2,
    name: "Natalie James",
    title: "Graphic Designer",
  },
];


const footerCols = [
  {
    id: 1,
    category: "Home",
    links: ["FAQ", "Features", "Companies", "Testimonials"],
  },
  {
    id: 2,
    category: "Pricing",
    links: ["Plans", "Billing", "Free Trial", "Refunds"],
  },
  {
    id: 3,
    category: "About",
    links: ["Careers", "Our Story", "Contact", "Policy"],
  },
  {
    id: 4,
    category: "Community",
    links: ["Forum", "Stories", "Blog", "Support"],
  },
];

const features = {
  SmartOrganization: {
    alt: "Smart Organization graphic",
    heading: "Smart Organization",
    description:
      "Automatically categorize and tag your notes using AI-driven analysis. \
      NoteFlow intelligently identifies key topics and organizes your content, \
      making it easy to find and retrieve your notes when you need them most.",
  },
  ContextualReminders: {
    alt: "Contextual Reminders graphic",
    heading: "Contextual Reminders",
    description:
      "Stay on top of important tasks with AI-powered reminders that adapt to the \
      context of your notes. NoteFlow recognizes deadlines, follow-ups, and key actions \
      from your notes and sends timely alerts to ensure nothing slips through the cracks.",
  },
};

export {
  features,
  footerCols,
  frequentlyAskedQuestions,
  logos,
  navigationLinks,
  reviews,
  testimonials,
};
