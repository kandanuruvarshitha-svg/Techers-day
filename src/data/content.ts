import { ContentConfig } from '../types';

export const contentData: ContentConfig = {
  fatherName: "Daddy",
  studentName: "Your Student ❤️",
  siteTitle: "MY FIRST TEACHER — DADDY ❤️",
  tagline: "FOR THE MAN WHO TAUGHT ME MORE THAN ANY BOOK EVER COULD…",
  heroSubtitle: "You may teach many students, but you will always be my first teacher.",
  heroImage: "/images/dad-hero.jpg",
  deployedUrl: "https://techers-day.vercel.app/", // Editable URL for QR Code generator
  audioPath: "/audio/background.mp3",
  videoPath: "/media/message.mp4",
  hasVideo: true,

  storyHeading: "Before I called you Daddy...",
  storySubheading: "I was already learning from you.",
  storyParagraphs: [
    "You taught me lessons that were never written on a blackboard.",
    "Long before I sat in a classroom, I watched how you treated people, how you handled difficulties with patience, and how you dedicated yourself to your duty with quiet dignity.",
    "You taught me to stand back up after falling, to keep going when things became difficult, to respect people regardless of their status, to work hard every single day, and most importantly — to become a good human being."
  ],

  lessons: [
    {
      id: "lesson-1",
      number: "01",
      title: "NEVER GIVE UP",
      subtitle: "Resilience in adversity",
      description: "You taught me that failure is not the end of the journey.",
      quote: "A mistake is not a failure; it is simply a lesson waiting to be understood.",
      iconName: "ShieldAlert",
      detailedReflection: "Whenever I faced setbacks, you didn't judge me. You showed me how to evaluate what went wrong, dust off the anxiety, and try again with renewed strength."
    },
    {
      id: "lesson-2",
      number: "02",
      title: "WORK HARD",
      subtitle: "Consistency over luck",
      description: "You showed me that success is built through consistency.",
      quote: "Great achievements are built quietly, day after day, line after line.",
      iconName: "Flame",
      detailedReflection: "Watching you prepare lessons late into the night taught me that dedication is silent, and true mastery is earned through relentless practice."
    },
    {
      id: "lesson-3",
      number: "03",
      title: "STAY HUMBLE",
      subtitle: "Grounded character",
      description: "You taught me to remain grounded no matter how successful I become.",
      quote: "Knowledge gives power, but humility commands true respect.",
      iconName: "HeartHandshake",
      detailedReflection: "No matter how much wisdom or recognition you gained, you always listened to everyone with equal respect and warmth."
    },
    {
      id: "lesson-4",
      number: "04",
      title: "KEEP LEARNING",
      subtitle: "Lifelong curiosity",
      description: "You made me understand that learning never really ends.",
      quote: "The day you stop asking questions is the day you stop growing.",
      iconName: "BookOpenCheck",
      detailedReflection: "You remain a curious student of life. Your bookshelf was always open, encouraging me to explore new ideas without fear."
    },
    {
      id: "lesson-5",
      number: "05",
      title: "RESPECT EVERYONE",
      subtitle: "Dignity for all",
      description: "You taught me that character matters more than status.",
      quote: "Measure a person not by their wealth, but by how kind they are to others.",
      iconName: "Users",
      detailedReflection: "You treated every colleague, student, neighbor, and stranger with unyielding politeness and dignity."
    },
    {
      id: "lesson-6",
      number: "06",
      title: "BELIEVE IN YOURSELF",
      subtitle: "Unwavering faith",
      description: "You believed in me even when I doubted myself.",
      quote: "When you believe in your foundation, no storm can tear you down.",
      iconName: "Sparkles",
      detailedReflection: "In my moments of self-doubt, your unwavering faith in my potential was the anchor that kept me grounded and courageous."
    }
  ],

  memories: [
    {
      id: "mem-1",
      title: "First Steps of Learning",
      caption: "Some moments become memories. Some memories become treasures.",
      image: "/images/memory-1.jpg",
      date: "Early Childhood",
      location: "Home Study"
    },
    {
      id: "mem-2",
      title: "Quiet Guidance",
      caption: "You didn't just teach from books; you taught by example.",
      image: "/images/memory-2.jpg",
      date: "School Days",
      location: "Library"
    },
    {
      id: "mem-3",
      title: "Lessons Beyond Classrooms",
      caption: "The best classrooms are the quiet conversations between father and child.",
      image: "/images/memory-3.jpg",
      date: "Weekend Walk",
      location: "Outdoors"
    },
    {
      id: "mem-4",
      title: "Patience and Encouragement",
      caption: "Even when I made mistakes, your smile gave me courage to try again.",
      image: "/images/memory-4.jpg",
      date: "Graduation Day",
      location: "School"
    },
    {
      id: "mem-5",
      title: "A Shared Smile",
      caption: "Seeing you proud of my achievements is the greatest victory of my life.",
      image: "/images/memory-5.jpg",
      date: "Family Celebration",
      location: "Home"
    },
    {
      id: "mem-6",
      title: "Forever My Mentor",
      caption: "Time passes, but the values you gave me will never fade.",
      image: "/images/memory-6.jpg",
      date: "Recent Moment",
      location: "Favorite Spot"
    }
  ],

  letter: {
    heading: "A Letter From Your Student",
    salutation: "Dear Daddy,",
    paragraphs: [
      "People may know you as a teacher, but I know you as the person who taught me some of life's most important lessons.",
      "You have been there when I succeeded, when I failed, when I was confused, and when I needed someone to simply believe in me.",
      "Some teachers teach from books. You taught me through your actions.",
      "If I become a good person someday, a big part of that will be because I learned from you.",
      "Thank you for being my teacher, my guide, my supporter, and my Daddy."
    ],
    closing: "With all my love and gratitude,",
    signature: "Your Student ❤️"
  },

  award: {
    sectionHeading: "THE MOST IMPORTANT AWARD",
    title: "CERTIFICATE OF APPRECIATION",
    presentedTo: "DADDY",
    reason: "For being an extraordinary teacher, mentor, guide, supporter, and the person who has taught one student the most important lessons of life.",
    badgeText: "BEST TEACHER — FOREVER",
    dateText: "Teacher's Day | September 5",
    signoffText: "With endless love & respect, Your Student"
  },

  finalSurprise: {
    pauseText: "Daddy…",
    mainHeading: "Thank you for being the teacher",
    subHeading: "I never had to search for.",
    messageText: "Happy Teacher's Day, Daddy! You will forever be my inspiration and my hero."
  },

  greetingCard: {
    frontTitle: "HAPPY TEACHER’S DAY",
    frontSubtitle: "DADDY ❤️",
    insideHeading: "MY FIRST TEACHER",
    insideMessage: "You have taught many students, but you taught me how to live.",
    scanInstruction: "Scan this QR code for your personalized surprise experience.",
    fromText: "From your student, who is lucky enough to call you Daddy."
  }
};
