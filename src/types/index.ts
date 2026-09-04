export interface Lesson {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  iconName: string;
  detailedReflection: string;
}

export interface Memory {
  id: string;
  title: string;
  caption: string;
  image: string;
  date?: string;
  location?: string;
}

export interface LetterContent {
  heading: string;
  salutation: string;
  paragraphs: string[];
  closing: string;
  signature: string;
}

export interface AwardContent {
  sectionHeading: string;
  title: string;
  presentedTo: string;
  reason: string;
  badgeText: string;
  dateText: string;
  signoffText: string;
}

export interface FinalSurpriseContent {
  pauseText: string;
  mainHeading: string;
  subHeading: string;
  messageText: string;
}

export interface GreetingCardContent {
  frontTitle: string;
  frontSubtitle: string;
  insideHeading: string;
  insideMessage: string;
  scanInstruction: string;
  fromText: string;
}

export interface ContentConfig {
  fatherName: string;
  studentName: string;
  siteTitle: string;
  tagline: string;
  heroSubtitle: string;
  heroImage: string;
  deployedUrl: string;
  audioPath: string;
  videoPath: string;
  hasVideo: boolean;
  storyHeading: string;
  storySubheading: string;
  storyParagraphs: string[];
  lessons: Lesson[];
  memories: Memory[];
  letter: LetterContent;
  award: AwardContent;
  finalSurprise: FinalSurpriseContent;
  greetingCard: GreetingCardContent;
}
