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
Install dependencies
### 1. Clone the repository
```bash
git clone https://github.com/your-username/job-board.git
cd job-board

### 2.Install dependencies

npm install

### 3.Start JSON Server (mock API)

npx json-server --watch db.json --port 5000

N.B:(Make sure db.json is in the root directory with job and user data)

### 4.Run the development server

npm run dev

### 5.Build for production

npm run build
