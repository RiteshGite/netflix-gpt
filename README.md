# 🚀 NetflixGPT – AI-Driven Movie Discovery Engine

**An advanced, production-grade movie recommendation platform that fuses the cinematic aesthetics of Netflix with the cognitive power of Google Gemini AI.
Built with React, Redux Toolkit, Firebase, Tailwind CSS, TMDB API, and Gemini AI, this application delivers a seamless, intelligent, and blazing-fast movie browsing experience.**

# 🔥 Live Demo :  **👉 https://netflix-gpt-psi-flame.vercel.app**

# 🎯 What is NetflixGPT?

NetflixGPT is a next-gen AI-powered movie assistant.
Instead of scrolling endlessly, users can simply ask in natural language:

**“Show me dark thriller movies like Shutter Island”
“Funny retro Indian movies from the 90s”
“Romantic Korean dramas available in Hindi”**

The system uses Gemini AI to understand the intent → maps it to TMDB → fetches relevant movies → displays them beautifully.

# ✨ Core Features

# 🔐 1. Enterprise-Grade Authentication
- Firebase Email/Password Auth
- Real-time auth listener to persist sessions
- Auth-protected routes & automatic redirection
- Full form validation + error handling
- User Profile Update (Name + Photo)

# 🎬 2. Personalized Movie Engine
- Autoplaying HD background trailer (muted, looped)
- Categories powered by TMDB:
    🎞 Now Playing
    🔥 Trending
    ⭐ Top Rated
    ⏳ Upcoming
- Custom React Hooks (clean + modular):
    useNowPlayingMovies()
    usePopularMovies()
    useMovieTrailer(movieId)
    Dynamic YouTube trailer embedding

# 🤖 3. AI-Powered GPT/Gemini Search
- Gemini AI understands natural language prompts
- Multilingual AI search:
    English 🇺🇸
    Hindi 🇮🇳
    Spanish 🇪🇸
- AI → TMDB mapping logic
- Highly optimized Redux-powered results rendering
- No unnecessary API calls (memoized)

# ⚡ 4. Performance, UX & Architecture
- Redux Toolkit for global state
- Real-time movie caching
- Shimmer UI skeleton for loading
- Fully responsive Tailwind design
- Extremely low re-render footprint
- Debounced API calls for performance
- Clean folder structure following industry standards
  

# 🛠️ Tech Stack

Frontend	        : React.js, Redux Toolkit, React Router
Styling	            : Tailwind CSS
Backend & Auth	    : Firebase
APIs	            : TMDB API, Gemini AI API
Tools	            : Git, Vercel, NPM


# 📁 Project Folder Structure

NETFLIX-GPT/
│
├── node_modules/
│
├── public/
│   ├── assets/
│   │   ├── info_icon.svg
│   │   ├── loader.gif
│   │   ├── Netflix_icon.png
│   │   ├── No_Image.webp
│   │   └── play_icon.svg
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Body.js
│   │   ├── Browse.js
│   │   ├── GptMovieSuggestions.js
│   │   ├── GptSearch.js
│   │   ├── GptSearchBar.js
│   │   ├── Head.js
│   │   ├── Login.js
│   │   ├── MainContainer.js
│   │   ├── MovieCard.js
│   │   ├── MovieList.js
│   │   ├── SecondaryContainer.js
│   │   ├── ShimmerBrowse.js
│   │   ├── VideoBackground.js
│   │   └── VideoTitle.js
│   │
│   ├── hooks/
│   │   ├── useAiringTodayTVShows.js
│   │   ├── useMovieTrailer.js
│   │   ├── useNowPlayingMovies.js
│   │   ├── useOnTheAirTVShows.js
│   │   ├── usePopularMovies.js
│   │   ├── usePopularTVShows.js
│   │   ├── useTopRatedMovies.js
│   │   ├── useTopRatedTVShows.js
│   │   ├── useTrendingMovies.js
│   │   └── useUpcomingMovies.js
│   │
│   ├── utils/
│   │   ├── firebase.js
│   │   ├── gptQuery.js
│   │   ├── language.js
│   │   ├── movieSlice.js
│   │   ├── openai.js
│   │   ├── store.js
│   │   └── userSlice.js
│   │
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js


# 🚀 Getting Started

**1️⃣ Clone Repo**
git clone https://github.com/RiteshGite/netflix-gpt.git
cd netflix-gpt

**2️⃣ Install Dependencies**
npm install

**3️⃣ Add Environment Variables**
REACT_APP_TMDB_KEY=your_tmdb_api_key
REACT_APP_OPENAI_KEY=your_ai_api_key

'// Firebase Config'
REACT_APP_FIREBASE_API_KEY=your_firebase_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

**4️⃣ Start the App**
npm start


# 🤝 Contributing
- Contributions are always welcome.
- Fork the project
- Create your feature branch
- Commit your changes
- Push to the branch
- Create a pull request
  

# 🏆 Developer
**Ritesh Gite**


