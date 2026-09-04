# MY FIRST TEACHER — DAD ❤️ | Teacher's Day Surprise Website

A complete, polished, emotionally meaningful, responsive website built as a personal Teacher's Day surprise for a father who is a teacher.

---

## 🌟 Key Features & Sections

1. **Cinematic Opening Screen**: Full-screen splash overlay with sequential message reveal, gold confetti, and interactive "START THE SURPRISE →" button.
2. **Hero Section**: Warm heading, subtitle, hero image container with smooth reveal animation, and scroll indicator.
3. **"My First Teacher" Story**: Emotional narrative section about life lessons taught beyond textbooks.
4. **Interactive Lessons**: 6 interactive cards (*01 Never Give Up, 02 Work Hard, 03 Stay Humble, 04 Keep Learning, 05 Respect Everyone, 06 Believe In Yourself*) with hover 3D tilt effects and tap-to-expand modal details.
5. **Memory Archive**: Responsive masonry photo gallery with lightbox modal, caption viewer, and full keyboard navigation (Next, Prev, Close).
6. **Optional Video Greeting**: Custom video player for `/media/message.mp4` with automatic error handling (gracefully hides if no video exists).
7. **Letter From Your Student**: Realistic paper letter card with gold seal accent, handwriting-style signature font, and scroll reveal.
8. **Digital Teacher Award**: Certificate of Appreciation for DAD with decorative gold borders, badge, and a functioning **DOWNLOAD CERTIFICATE** button (generates PNG using `html2canvas`).
9. **✨ One Last Surprise**: Cinematic modal overlay that darkens the screen, reveals timed emotional text ("Dad... Thank you for being the teacher I never had to search for."), and triggers gold confetti.
10. **Physical Greeting Card + QR Code (`/card`)**: Dynamic QR code generator pointing to your deployed site, QR PNG downloader, and printable A4 greeting card layout (`Print A4 Card`).
11. **Dad's Personal Space (`/dad-dashboard`)**: LocalStorage-powered dashboard featuring Important Dates, Notes, Reminders, Teaching Resources, and an Expense Tracker.
12. **Graceful Asset Fallbacks**: Custom styled SVG placeholders for missing hero or memory photos, audio, or video files.

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Steps
1. Open your terminal in the project directory:
   ```bash
   cd dad
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the displayed URL (e.g. `http://localhost:5173`) in your browser.

---

## ✏️ How to Personalize Content

All editable information is stored in a single centralized file:
👉 **`src/data/content.ts`**

### 1. Change Names & Messages
Open `src/data/content.ts` and modify:
- `fatherName`: Change to your father's name (e.g., `"Dad"`, `"Mr. Smith"`).
- `studentName`: Change to your name (e.g., `"Your Son, Alex"`).
- `storyParagraphs`: Edit the emotional narrative.
- `lessons`: Customize the 6 lesson titles, quotes, and reflections.
- `letter`: Personalize the letter body paragraphs and signature.

### 2. Add Father's Hero Photo & Memory Photos
Place your images inside the `public/images/` folder:
- Father's Hero Photo: `public/images/dad-hero.jpg`
- Memory Photos:
  - `public/images/memory-1.jpg`
  - `public/images/memory-2.jpg`
  - `public/images/memory-3.jpg`
  - `public/images/memory-4.jpg`
  - `public/images/memory-5.jpg`
  - `public/images/memory-6.jpg`

> **Note**: If any image is missing, the site automatically displays an elegant custom fallback card with gold styling!

### 3. Add Background Music (Optional)
Place your background MP3 audio file at:
`public/audio/background.mp3`

### 4. Add Video Greeting (Optional)
Place your personal video MP4 file at:
`public/media/message.mp4`

If no video is present, set `hasVideo: false` in `src/data/content.ts` or leave it; the site will automatically hide the video section.

### 5. Update QR Code Deployed URL
Update the `deployedUrl` property in `src/data/content.ts` with your live website URL:
```typescript
deployedUrl: "https://your-custom-site.vercel.app",
```
You can also dynamically change the URL on the `/card` page in real time!

---

## 🌐 How to Deploy to Free Hosting

### Option A: Deploy to Vercel (Recommended - Free & Fast)
1. Install Vercel CLI or connect your GitHub repository to [Vercel](https://vercel.com).
2. Run:
   ```bash
   npm run build
   ```
3. Deploy directly with Vercel CLI:
   ```bash
   npx vercel
   ```
4. Copy the generated Vercel live URL and update `deployedUrl` in `src/data/content.ts`!

### Option B: Deploy to GitHub Pages
1. Push the code to a public GitHub repository.
2. In `package.json`, add `"base": "./"` to `vite.config.ts`.
3. Build and deploy to `gh-pages` branch using `gh-pages` npm package.

---

## 📁 Project Structure

```
dad/
├── public/
│   ├── images/         # Hero & memory photo placeholders
│   ├── audio/          # Background music (background.mp3)
│   └── media/          # Video message (message.mp4)
├── src/
│   ├── components/
│   │   ├── OpeningScreen.tsx      # Cinematic splash & start button
│   │   ├── Hero.tsx               # Hero section with image reveal
│   │   ├── StorySection.tsx       # Narrative storytelling section
│   │   ├── LessonsSection.tsx     # 6 interactive lesson cards
│   │   ├── MemoriesGallery.tsx    # Masonry photo gallery + Lightbox
│   │   ├── VideoSection.tsx       # Video message player
│   │   ├── LetterSection.tsx      # Paper letter card with signature
│   │   ├── AwardSection.tsx       # Certificate award & PNG download
│   │   ├── FinalSurpriseModal.tsx # Cinematic surprise modal reveal
│   │   ├── MusicPlayer.tsx        # Floating audio player widget
│   │   ├── ImageWithFallback.tsx  # Graceful missing-image handler
│   │   ├── Navbar.tsx             # Floating navbar with mobile menu
│   │   └── Footer.tsx             # Closing footer
│   ├── pages/
│   │   ├── Home.tsx               # Main surprise experience page
│   │   ├── CardPage.tsx           # Greeting card & QR code generator
│   │   └── DashboardPage.tsx      # Dad's Personal Space dashboard
│   ├── data/
│   │   └── content.ts             # CENTRAL EDITABLE CONFIG FILE
│   ├── utils/
│   │   └── storage.ts             # LocalStorage helper for dashboard
│   ├── types/
│   │   └── index.ts               # TypeScript interface definitions
│   ├── App.tsx                    # React Router configuration
│   ├── main.tsx                   # React root mounting
│   └── index.css                  # Tailwind imports & custom styles
├── index.html                     # HTML template with Google Fonts
├── tailwind.config.js             # Custom colors, fonts & animations
├── vite.config.ts                 # Vite build settings
└── README.md                      # Project documentation
```

---

❤️ **Happy Teacher's Day, Dad!**
