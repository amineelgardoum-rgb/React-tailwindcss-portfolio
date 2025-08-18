# My Personal Portfolio - Source Code

### AI & Data Engineer | Building Intelligent, Data-Driven Systems

This repository contains the complete source code for my personal portfolio website, available at **[your-portfolio-url.com](https://your-portfolio-url.com)**. The project is a full-stack application designed to showcase my skills in both modern backend and frontend development.

-   **Email:** `amine.elgardoum@email.com`
-   **LinkedIn:** `linkedin.com/in/your-profile-link`

---

## 🚀 Project Overview & Screenshots

The portfolio is architected with a decoupled frontend and backend, which is standard practice for modern, scalable web applications.

| Frontend (React + Vite)                                                                                             | Backend (FastAPI)                                                                                                    |
| :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------- |
| ![Frontend Screenshot](https://via.placeholder.com/1200x675.png?text=Replace+with+your+Frontend+Screenshot) | ![Backend API Screenshot](https://via.placeholder.com/1200x675.png?text=Replace+with+your+Backend+API+Screenshot) |
| A clean, fully responsive user interface built with **React** and styled with **Tailwind CSS**. It fetches all project data dynamically from the backend API. | A robust and high-performance REST API built with **Python** and **FastAPI**. It serves project details, handles contact form submissions, and can be easily extended. |

---

## 🛠️ Tech Stack: How This Portfolio Was Built

| Frontend                                                                                                                              | Backend                                                                                                                                  | Deployment & Tools                                                                                                                   |
| :------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)                                     | ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)                                    | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)                                   |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)                                         | ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)                                 | ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)                                            |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)               | ![Uvicorn](https://img.shields.io/badge/Uvicorn-27A499?style=for-the-badge&logo=uvicorn&logoColor=white)                                  | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)                                      |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)                                       | ![Pydantic](https://img.shields.io/badge/Pydantic-E92063?style=for-the-badge&logo=pydantic&logoColor=white)                                | ![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)                      |

---

## ⚙️ Running The Project Locally

To run this portfolio on your local machine, follow these steps.

### Prerequisites

-   Git
-   Node.js (v16+)
-   Python (v3.8+) & `pip`

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-portfolio-repo.git
cd your-portfolio-repo
```

### 2. Set Up and Run the Backend
You will need two separate terminal windows.

**In Terminal 1:**
```bash
# Navigate to the backend directory
cd backend

# Create and activate a virtual environment
python -m venv venv
# On Windows: .\venv\Scripts\activate
# On macOS/Linux: source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn app.main:app --reload
```
The backend API will now be running at `http://127.0.0.1:8000`.

### 3. Set Up and Run the Frontend

**In Terminal 2:**
```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Run the development server
npm run dev
```
The React application will open in your browser, likely at `http://localhost:5173`.

---

## 📊 My GitHub Contributions

![Amine's GitHub Stats](https://github-readme-stats.vercel.app/api?username=amineel-crypto&show_icons=true&theme=transparent&hide_border=true&title_color=00ff41&text_color=c9c9c9&icon_color=00ff41)![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=amineel-crypto&layout=compact&theme=transparent&hide_border=true&title_color=00ff41&text_color=c9c9c9)

---

### **How to Use This README:**

1.  **Replace Placeholders:**
    *   Update `your-portfolio-url.com`, the email, and the LinkedIn URL.
    *   Change `amineel-crypto` in the GitHub Stats URLs to your actual GitHub username.
    *   Update the `git clone` URL.
2.  **Add Your Screenshots:**
    *   Take a screenshot of your running frontend website and a screenshot of your running backend API (e.g., the interactive docs at `/docs`).
    *   Create an `assets` folder in your repository.
    *   Upload the images there.
    *   Replace the `https://via.placeholder.com/...` links with the relative path to your images (e.g., `./assets/frontend-preview.png`).
