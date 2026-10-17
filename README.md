# Prepboard - Interview Practice Tracker

A React app to track interview preparation questions. It is built with Vite and React, and it saves all data in the browser using localStorage.

## Demo Video

[![PreBoard Demo - Cohort 3.0 @sheryians](https://img.youtube.com/vi/bMFdEi2giRo/hqdefault.jpg)](https://youtu.be/bMFdEi2giRo)

Watch on YouTube: [PreBoard Demo - Cohort 3.0 @sheryians](https://youtu.be/bMFdEi2giRo)

## Features

- Add questions with a category (DSA, Git, Technical), difficulty (Easy, Medium, Hard) and status (Pending, In Progress, Completed)
- Mark a question as complete with one click
- Search and filter by status, category and difficulty
- Sort by newest or oldest
- Dashboard with total questions, completed counts per category and a progress ring
- Machine coding status selector
- Light and dark theme toggle
- Responsive layout for mobile and desktop
- Data stays saved after a page refresh

## Tech Stack

- React 18
- Vite 5
- Plain CSS (no UI library)

## Getting Started

Requirements: Node.js 18 or later.

```
npm install
npm run dev
```

Other commands:

```
npm run build     # creates the production build in dist/
npm run preview   # previews the production build
```

## Project Structure

```
prepboard-react/
├── index.html
├── package.json
├── vite.config.js
├── screenshots/          # images used in this README
└── src/
    ├── main.jsx          # entry point, mounts App into #root
    ├── App.jsx           # parent component: state and logic
    ├── constants.js      # shared lists and localStorage key
    ├── index.css         # all styles
    └── components/
        ├── Sidebar.jsx
        ├── TopBar.jsx
        ├── Hero.jsx
        ├── StatsGrid.jsx
        ├── StatCard.jsx
        ├── PulseCard.jsx
        ├── MachineCard.jsx
        ├── Filters.jsx
        ├── QuestionList.jsx
        ├── QuestionRow.jsx
        └── AddDialog.jsx
```

## How It Works

- **State lives in `App.jsx`.** It holds the questions, machine coding status, filters, theme and popup state using `useState`.
- **Props carry data downward.** Child components receive values and functions from `App.jsx` and do not keep their own copy of the questions.
- **Saving.** A `useEffect` writes the questions and machine status to localStorage whenever they change. The values are read back once when the app loads.
- **Filtering.** `App.jsx` applies search, status, category and difficulty filters, then sorts, and passes the final list to `QuestionList`.
- **Add form.** `AddDialog.jsx` uses the native `<dialog>` element. It validates that the title has at least 3 characters, is not a duplicate, and that a category is selected.

## Component Overview

| Component | Purpose |
|---|---|
| `Sidebar` | Left navigation and tip card |
| `TopBar` | Theme button, date, done count, mobile navigation |
| `Hero` | Heading and "Add a question" button |
| `StatsGrid` / `StatCard` | Four summary cards |
| `PulseCard` | Weekly progress ring |
| `MachineCard` | Machine coding status dropdown |
| `Filters` | Search box and filter dropdowns |
| `QuestionList` / `QuestionRow` | Table of questions and one row per question |
| `AddDialog` | Popup form to add a question |

## Notes

- Data is stored only in the current browser. Clearing site data removes it.
