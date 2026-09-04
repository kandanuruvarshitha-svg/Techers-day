import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  FileText, 
  CheckSquare, 
  BookOpen, 
  DollarSign, 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Check, 
  ExternalLink,
  Heart,
  LayoutDashboard
} from 'lucide-react';
import { 
  loadImportantDates, saveImportantDates,
  loadNotes, saveNotes,
  loadReminders, saveReminders,
  loadResources, saveResources,
  loadExpenses, saveExpenses
} from '../utils/storage';
import { ImportantDate, NoteItem, ReminderItem, TeachingResource, ExpenseItem } from '../types';

export const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dates' | 'notes' | 'reminders' | 'resources' | 'expenses'>('dates');

  // Dashboard state powered by localStorage
  const [dates, setDates] = useState<ImportantDate[]>(loadImportantDates);
  const [notes, setNotes] = useState<NoteItem[]>(loadNotes);
  const [reminders, setReminders] = useState<ReminderItem[]>(loadReminders);
  const [resources, setResources] = useState<TeachingResource[]>(loadResources);
  const [expenses, setExpenses] = useState<ExpenseItem[]>(loadExpenses);

  // Sync state to localStorage on modification
  useEffect(() => { saveImportantDates(dates); }, [dates]);
  useEffect(() => { saveNotes(notes); }, [notes]);
  useEffect(() => { saveReminders(reminders); }, [reminders]);
  useEffect(() => { saveResources(resources); }, [resources]);
  useEffect(() => { saveExpenses(expenses); }, [expenses]);

  // Form states
  const [newDateTitle, setNewDateTitle] = useState('');
  const [newDateValue, setNewDateValue] = useState('');
  const [newDateCategory, setNewDateCategory] = useState<ImportantDate['category']>('School');

  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');

  const [newReminderText, setNewReminderText] = useState('');

  const [newResTitle, setNewResTitle] = useState('');
  const [newResUrl, setNewResUrl] = useState('');
  const [newResDesc, setNewResDesc] = useState('');

  const [newExpTitle, setNewExpTitle] = useState('');
  const [newExpCategory, setNewExpCategory] = useState('Teaching Supplies');
  const [newExpAmount, setNewExpAmount] = useState('');

  // Handlers
  const handleAddDate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDateTitle || !newDateValue) return;
    const item: ImportantDate = {
      id: Date.now().toString(),
      title: newDateTitle,
      date: newDateValue,
      category: newDateCategory,
    };
    setDates([...dates, item]);
    setNewDateTitle('');
    setNewDateValue('');
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteTitle || !newNoteContent) return;
    const item: NoteItem = {
      id: Date.now().toString(),
      title: newNoteTitle,
      content: newNoteContent,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setNotes([item, ...notes]);
    setNewNoteTitle('');
    setNewNoteContent('');
  };

  const handleAddReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReminderText) return;
    const item: ReminderItem = {
      id: Date.now().toString(),
      text: newReminderText,
      done: false
    };
    setReminders([...reminders, item]);
    setNewReminderText('');
  };

  const toggleReminder = (id: string) => {
    setReminders(reminders.map(r => r.id === id ? { ...r, done: !r.done } : r));
  };

  const handleAddResource = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newResTitle || !newResUrl) return;
    const item: TeachingResource = {
      id: Date.now().toString(),
      title: newResTitle,
      url: newResUrl.startsWith('http') ? newResUrl : `https://${newResUrl}`,
      description: newResDesc || 'Custom resource link',
      category: 'General'
    };
    setResources([...resources, item]);
    setNewResTitle('');
    setNewResUrl('');
    setNewResDesc('');
  };

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(newExpAmount);
    if (!newExpTitle || isNaN(amount)) return;
    const item: ExpenseItem = {
      id: Date.now().toString(),
      title: newExpTitle,
      category: newExpCategory,
      amount: amount,
      date: new Date().toISOString().split('T')[0]
    };
    setExpenses([item, ...expenses]);
    setNewExpTitle('');
    setNewExpAmount('');
  };

  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="min-h-screen bg-cream-100 text-navy-900 py-10 px-4 sm:px-6 lg:px-8">
      
      {/* Top Header Bar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-200 hover:bg-cream-300 text-navy-900 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Surprise Site</span>
        </Link>
        <div className="flex items-center gap-2 text-xs font-mono text-gold-700 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
          <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
          <span>Dad's Private Workspace</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Title */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 text-cream-100 text-xs font-mono">
            <LayoutDashboard className="w-3.5 h-3.5 text-gold-400" />
            <span>Teacher Utility Tool</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-navy-900">
            Dad’s Personal Space
          </h1>
          <p className="text-navy-900/60 text-sm sm:text-base font-light">
            A small useful dashboard to organize important dates, daily notes, reminders, teaching resources, and classroom expenses.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-navy-900/10 pb-4">
          <button
            onClick={() => setActiveTab('dates')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
              activeTab === 'dates' ? 'bg-navy-900 text-cream-100 shadow-md' : 'bg-cream-200 text-navy-900 hover:bg-cream-300'
            }`}
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>Important Dates ({dates.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
              activeTab === 'notes' ? 'bg-navy-900 text-cream-100 shadow-md' : 'bg-cream-200 text-navy-900 hover:bg-cream-300'
            }`}
          >
            <FileText className="w-4 h-4 text-gold-400" />
            <span>Notes ({notes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('reminders')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
              activeTab === 'reminders' ? 'bg-navy-900 text-cream-100 shadow-md' : 'bg-cream-200 text-navy-900 hover:bg-cream-300'
            }`}
          >
            <CheckSquare className="w-4 h-4 text-gold-400" />
            <span>Reminders ({reminders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('resources')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
              activeTab === 'resources' ? 'bg-navy-900 text-cream-100 shadow-md' : 'bg-cream-200 text-navy-900 hover:bg-cream-300'
            }`}
          >
            <BookOpen className="w-4 h-4 text-gold-400" />
            <span>Teaching Resources ({resources.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('expenses')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
              activeTab === 'expenses' ? 'bg-navy-900 text-cream-100 shadow-md' : 'bg-cream-200 text-navy-900 hover:bg-cream-300'
            }`}
          >
            <DollarSign className="w-4 h-4 text-gold-400" />
            <span>Expense Tracker (${totalExpense.toFixed(2)})</span>
          </button>
        </div>

        {/* Tab 1: Important Dates */}
        {activeTab === 'dates' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-xl font-serif font-bold text-navy-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold-600" />
                <span>Upcoming Events & Key Dates</span>
              </h2>

              <div className="space-y-3">
                {dates.map((d) => (
                  <div key={d.id} className="glass-card rounded-2xl p-5 shadow-sm border border-gold-500/20 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-700 font-bold">
                          {d.category}
                        </span>
                        <h3 className="font-serif font-bold text-navy-900 text-base">{d.title}</h3>
                      </div>
                      {d.note && <p className="text-xs text-navy-900/60 mt-1">{d.note}</p>}
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-sm font-bold text-gold-700">{d.date}</p>
                      <button
                        onClick={() => setDates(dates.filter(item => item.id !== d.id))}
                        className="text-red-500/60 hover:text-red-600 text-xs mt-1 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Date Form */}
            <div className="glass-card rounded-2xl p-6 shadow-md border border-gold-500/30 space-y-4 h-fit">
              <h3 className="font-serif font-bold text-lg text-navy-900">Add Important Date</h3>
              <form onSubmit={handleAddDate} className="space-y-3 text-xs">
                <div>
                  <label className="block text-navy-900/70 mb-1 font-mono">Title</label>
                  <input
                    type="text"
                    required
                    value={newDateTitle}
                    onChange={(e) => setNewDateTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-gold-500/30 text-navy-900 focus:outline-none focus:border-gold-500"
                    placeholder="e.g. Science Fair"
                  />
                </div>
                <div>
                  <label className="block text-navy-900/70 mb-1 font-mono">Date</label>
                  <input
                    type="date"
                    required
                    value={newDateValue}
                    onChange={(e) => setNewDateValue(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-gold-500/30 text-navy-900 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-navy-900/70 mb-1 font-mono">Category</label>
                  <select
                    value={newDateCategory}
                    onChange={(e) => setNewDateCategory(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-gold-500/30 text-navy-900 focus:outline-none focus:border-gold-500"
                  >
                    <option value="School">School</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Family">Family</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-navy-900 text-cream-100 font-bold hover:bg-navy-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-4 h-4 text-gold-400" />
                  <span>Add Date</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Tab 2: Notes */}
        {activeTab === 'notes' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-xl font-serif font-bold text-navy-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-gold-600" />
                <span>Teaching Notes & Thoughts</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {notes.map((n) => (
                  <div key={n.id} className="glass-card rounded-2xl p-5 shadow-sm border border-gold-500/20 space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b border-gold-500/10 pb-2 mb-2">
                        <h3 className="font-serif font-bold text-navy-900 text-base">{n.title}</h3>
                        <span className="text-[10px] font-mono text-navy-900/40">{n.createdAt}</span>
                      </div>
                      <p className="text-xs text-navy-900/80 leading-relaxed font-light whitespace-pre-wrap">{n.content}</p>
                    </div>
                    <button
                      onClick={() => setNotes(notes.filter(item => item.id !== n.id))}
                      className="text-red-500/60 hover:text-red-600 text-xs text-right pt-2 border-t border-navy-900/5 transition-colors"
                    >
                      Delete Note
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Note Form */}
            <div className="glass-card rounded-2xl p-6 shadow-md border border-gold-500/30 space-y-4 h-fit">
              <h3 className="font-serif font-bold text-lg text-navy-900">New Note</h3>
              <form onSubmit={handleAddNote} className="space-y-3 text-xs">
                <div>
                  <label className="block text-navy-900/70 mb-1 font-mono">Title</label>
                  <input
                    type="text"
                    required
                    value={newNoteTitle}
                    onChange={(e) => setNewNoteTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-gold-500/30 text-navy-900 focus:outline-none focus:border-gold-500"
                    placeholder="e.g. Idea for Physics Class"
                  />
                </div>
                <div>
                  <label className="block text-navy-900/70 mb-1 font-mono">Content</label>
                  <textarea
                    required
                    rows={4}
                    value={newNoteContent}
                    onChange={(e) => setNewNoteContent(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-gold-500/30 text-navy-900 focus:outline-none focus:border-gold-500"
                    placeholder="Write your note here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-navy-900 text-cream-100 font-bold hover:bg-navy-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-4 h-4 text-gold-400" />
                  <span>Save Note</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Tab 3: Reminders */}
        {activeTab === 'reminders' && (
          <div className="max-w-2xl space-y-6">
            <h2 className="text-xl font-serif font-bold text-navy-900 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-gold-600" />
              <span>Daily Checklist & Reminders</span>
            </h2>

            {/* Quick Add Form */}
            <form onSubmit={handleAddReminder} className="flex gap-2 text-xs">
              <input
                type="text"
                required
                value={newReminderText}
                onChange={(e) => setNewReminderText(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-cream-100 border border-gold-500/40 text-navy-900 focus:outline-none focus:border-gold-500 shadow-sm"
                placeholder="Add a new reminder..."
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-navy-900 text-cream-100 font-bold hover:bg-navy-800 transition-colors flex items-center gap-1.5 shadow-md"
              >
                <Plus className="w-4 h-4 text-gold-400" />
                <span>Add Task</span>
              </button>
            </form>

            <div className="space-y-3">
              {reminders.map((r) => (
                <div
                  key={r.id}
                  onClick={() => toggleReminder(r.id)}
                  className={`glass-card rounded-2xl p-4 shadow-sm border border-gold-500/20 flex items-center justify-between cursor-pointer transition-all ${
                    r.done ? 'opacity-50 line-through bg-cream-200/50' : 'hover:border-gold-500'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-colors ${
                      r.done ? 'bg-gold-500 border-gold-500 text-navy-950' : 'border-gold-500/40'
                    }`}>
                      {r.done && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                    <span className="text-sm text-navy-900 font-medium">{r.text}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setReminders(reminders.filter(item => item.id !== r.id));
                    }}
                    className="text-red-500/50 hover:text-red-600 p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Teaching Resources */}
        {activeTab === 'resources' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-xl font-serif font-bold text-navy-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-gold-600" />
                <span>Curated Teaching Resources & Websites</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {resources.map((res) => (
                  <div key={res.id} className="glass-card rounded-2xl p-5 shadow-sm border border-gold-500/20 space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-700 font-bold">
                          {res.category}
                        </span>
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold-600 hover:text-gold-700"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <h3 className="font-serif font-bold text-navy-900 text-base">{res.title}</h3>
                      <p className="text-xs text-navy-900/70 mt-1 font-light">{res.description}</p>
                    </div>

                    <div className="pt-3 border-t border-navy-900/5 flex items-center justify-between">
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-bold text-gold-700 hover:underline flex items-center gap-1"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <button
                        onClick={() => setResources(resources.filter(item => item.id !== res.id))}
                        className="text-red-500/50 hover:text-red-600 text-xs"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Resource Form */}
            <div className="glass-card rounded-2xl p-6 shadow-md border border-gold-500/30 space-y-4 h-fit">
              <h3 className="font-serif font-bold text-lg text-navy-900">Add Useful Link</h3>
              <form onSubmit={handleAddResource} className="space-y-3 text-xs">
                <div>
                  <label className="block text-navy-900/70 mb-1 font-mono">Title</label>
                  <input
                    type="text"
                    required
                    value={newResTitle}
                    onChange={(e) => setNewResTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-gold-500/30 text-navy-900 focus:outline-none focus:border-gold-500"
                    placeholder="e.g. NASA STEM Resources"
                  />
                </div>
                <div>
                  <label className="block text-navy-900/70 mb-1 font-mono">URL</label>
                  <input
                    type="text"
                    required
                    value={newResUrl}
                    onChange={(e) => setNewResUrl(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-gold-500/30 text-navy-900 focus:outline-none focus:border-gold-500"
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <label className="block text-navy-900/70 mb-1 font-mono">Description</label>
                  <input
                    type="text"
                    value={newResDesc}
                    onChange={(e) => setNewResDesc(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-gold-500/30 text-navy-900 focus:outline-none focus:border-gold-500"
                    placeholder="Brief summary..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-navy-900 text-cream-100 font-bold hover:bg-navy-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-4 h-4 text-gold-400" />
                  <span>Save Resource</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Tab 5: Simple Expense Tracker */}
        {activeTab === 'expenses' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif font-bold text-navy-900 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-gold-600" />
                  <span>Classroom & Teaching Expense Tracker</span>
                </h2>
                <div className="bg-navy-900 text-gold-400 px-4 py-2 rounded-xl font-mono text-sm font-bold shadow-sm">
                  Total: ${totalExpense.toFixed(2)}
                </div>
              </div>

              <div className="space-y-3">
                {expenses.map((exp) => (
                  <div key={exp.id} className="glass-card rounded-2xl p-4 shadow-sm border border-gold-500/20 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-700 font-bold">
                          {exp.category}
                        </span>
                        <h3 className="font-serif font-bold text-navy-900 text-base">{exp.title}</h3>
                      </div>
                      <p className="text-[11px] font-mono text-navy-900/50 mt-1">{exp.date}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-mono font-bold text-navy-900 text-base">
                        ${exp.amount.toFixed(2)}
                      </span>
                      <button
                        onClick={() => setExpenses(expenses.filter(item => item.id !== exp.id))}
                        className="text-red-500/50 hover:text-red-600 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Expense Form */}
            <div className="glass-card rounded-2xl p-6 shadow-md border border-gold-500/30 space-y-4 h-fit">
              <h3 className="font-serif font-bold text-lg text-navy-900">Add Expense</h3>
              <form onSubmit={handleAddExpense} className="space-y-3 text-xs">
                <div>
                  <label className="block text-navy-900/70 mb-1 font-mono">Title</label>
                  <input
                    type="text"
                    required
                    value={newExpTitle}
                    onChange={(e) => setNewExpTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-gold-500/30 text-navy-900 focus:outline-none focus:border-gold-500"
                    placeholder="e.g. Math Workbooks"
                  />
                </div>
                <div>
                  <label className="block text-navy-900/70 mb-1 font-mono">Category</label>
                  <select
                    value={newExpCategory}
                    onChange={(e) => setNewExpCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-gold-500/30 text-navy-900 focus:outline-none focus:border-gold-500"
                  >
                    <option value="Teaching Supplies">Teaching Supplies</option>
                    <option value="Classroom Supplies">Classroom Supplies</option>
                    <option value="Books & Papers">Books & Papers</option>
                    <option value="Technology">Technology</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-navy-900/70 mb-1 font-mono">Amount ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={newExpAmount}
                    onChange={(e) => setNewExpAmount(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-gold-500/30 text-navy-900 focus:outline-none focus:border-gold-500"
                    placeholder="0.00"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-navy-900 text-cream-100 font-bold hover:bg-navy-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-4 h-4 text-gold-400" />
                  <span>Save Expense</span>
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
