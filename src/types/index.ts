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

export interface ImportantDate {
  id: string;
  title: string;
  date: string;
  category: 'Birthday' | 'Anniversary' | 'School' | 'Family' | 'Other';
  note?: string;
}

export interface NoteItem {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface ReminderItem {
  id: string;
  text: string;
  done: boolean;
  dueDate?: string;
}

export interface TeachingResource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
}

export interface ExpenseItem {
  id: string;
  title: string;
  category: string;
  amount: number;
  date: string;
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
  dashboard: {
    initialDates: ImportantDate[];
    initialNotes: NoteItem[];
    initialReminders: ReminderItem[];
    initialResources: TeachingResource[];
    initialExpenses: ExpenseItem[];
  };
}
