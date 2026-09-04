import { ImportantDate, NoteItem, ReminderItem, TeachingResource, ExpenseItem } from '../types';
import { contentData } from '../data/content';

const STORAGE_KEYS = {
  DATES: 'dad_dashboard_dates',
  NOTES: 'dad_dashboard_notes',
  REMINDERS: 'dad_dashboard_reminders',
  RESOURCES: 'dad_dashboard_resources',
  EXPENSES: 'dad_dashboard_expenses',
};

export const getStoredData = <T>(key: string, fallback: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.warn(`Error loading ${key} from localStorage`, e);
    return fallback;
  }
};

export const setStoredData = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn(`Error saving ${key} to localStorage`, e);
  }
};

export const loadImportantDates = (): ImportantDate[] =>
  getStoredData<ImportantDate[]>(STORAGE_KEYS.DATES, contentData.dashboard.initialDates);

export const saveImportantDates = (dates: ImportantDate[]): void =>
  setStoredData(STORAGE_KEYS.DATES, dates);

export const loadNotes = (): NoteItem[] =>
  getStoredData<NoteItem[]>(STORAGE_KEYS.NOTES, contentData.dashboard.initialNotes);

export const saveNotes = (notes: NoteItem[]): void =>
  setStoredData(STORAGE_KEYS.NOTES, notes);

export const loadReminders = (): ReminderItem[] =>
  getStoredData<ReminderItem[]>(STORAGE_KEYS.REMINDERS, contentData.dashboard.initialReminders);

export const saveReminders = (reminders: ReminderItem[]): void =>
  setStoredData(STORAGE_KEYS.REMINDERS, reminders);

export const loadResources = (): TeachingResource[] =>
  getStoredData<TeachingResource[]>(STORAGE_KEYS.RESOURCES, contentData.dashboard.initialResources);

export const saveResources = (resources: TeachingResource[]): void =>
  setStoredData(STORAGE_KEYS.RESOURCES, resources);

export const loadExpenses = (): ExpenseItem[] =>
  getStoredData<ExpenseItem[]>(STORAGE_KEYS.EXPENSES, contentData.dashboard.initialExpenses);

export const saveExpenses = (expenses: ExpenseItem[]): void =>
  setStoredData(STORAGE_KEYS.EXPENSES, expenses);
