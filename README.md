# Job Board

A responsive front-end job board application that allows users to **search** for available jobs and **apply** directly online.  
This project was built as part of the **Front-End Developer Assessment** for ISCO Technologies, focusing on clean UI/UX, state management, and integration with mocked APIs.

---

## 🚀 Technologies Used

- **React** – Component-based UI framework
- **Redux Toolkit** – State management (with slices for auth, jobs, and applications)
- **React Toastify** – Toast notifications
- **Tailwind CSS** – Utility-first styling
- **Axios** – API requests
- **Lucide React** & **React Icons** – Icons
- **React Router DOM** – Client-side routing
- **JSON Server** – Mock API backend
- **Vite** – Fast development build tool

---

## ⚙️ Setup Instructions

Follow these steps to set up the project locally:

### 1. Clone the repository

git clone https://github.com/your-username/job-board.git
cd job-board

### 2. Install dependencies
npm install

### 3. Start JSON Server (mock API)
npx json-server --watch db.json --port 5000
(Make sure db.json is in the root directory with job and user data.)

### 4. Run the development server
npm run dev

### 5. Build for production**
npm run build

### 6. Preview production build**
npm run preview

### 7. Setting the Vitest + Testing Library**
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event

**8. Login information**
---admin credentials{
    email:"admin@gmail.com";
    password:" password"
}
---user credentials{
    email:"user@gmail.com";
    passowrd:"password"
}


###  🛠 Architecture Notes
The project follows a modular React architecture with clear separation of concerns for components, pages, state management, and mock API integration.

Folder Structure Overview

├── App.jsx # Main application component & route definitions
├── assets/ # Static assets (e.g., images, icons)
│ └── react.svg
├── components/ # Reusable UI components
│ ├── Apply.jsx # Job application form
│ ├── Apply.test.jsx # Unit test for Apply component
│ ├── FilterTabs.jsx # Tabs for job filtering
│ ├── Footer.jsx # Footer component
│ ├── HeroJob.jsx # Job-specific hero section
│ ├── Hero.jsx # Landing page hero section
│ ├── JobCard.jsx # Job listing card
│ ├── Navbar.jsx # Navigation bar
│ ├── ProtectedRoute.jsx # Route guard for authenticated pages
│ └── SearchBar.jsx # Job search input component
├── index.css # Global CSS styles
├── main.jsx # App entry point
├── mock/ # Mock API layer
│ ├── api.js # Axios calls to JSON Server
│ └── api.test.js # Unit tests for mock API functions
├── pages/ # Page-level components for routing
│ ├── AdminDashboard.jsx # Admin view for managing jobs
│ ├── HomePage.jsx # Landing page with job listings
│ ├── JobDetailPage.jsx # Detailed view for a single job
│ ├── LoginPage.jsx # Login form page
│ ├── LoginPage.test.jsx # Unit test for LoginPage
│ ├── RegisterPage.jsx # Registration form page
│ └── Test.jsx # Testing/demo page
├── redux/ # State management with Redux Toolkit
│ ├── slices/ # Feature-based slices (auth, jobs, applications)
│ └── store.js # Redux store configuration
└── setupTests.js # Global test configuration and setup

Key Architecture Decisions
Component-based structure – UI is bKey Architecture Decisionsroken down into reusable, self-contained components for consistency and maintainability.

Page-level components – Each route corresponds to a page inside the pages/ directory, ensuring clear navigation flow.

State management with Redux Toolkit – Centralized state for authentication, job listings, and applications.

ProtectedRoute – Guards certain routes, ensuring only authenticated users can access them.

Mock API integration – mock/api.js uses Axios to interact with a json-server backend for simulating real API calls.

Tailwind CSS – Provides a utility-first approach for fast and consistent styling.

Responsive & Accessible Design – Layouts and components are optimized for both desktop and mobile users.

## Demo links:

--- GitHub: https://github.com/CrispinNi/JobBoard_challenge
--- Vercel: https://job-board-challenge-tan.vercel.app/
