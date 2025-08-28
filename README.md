# Recruit

**Recruit** is a full-stack job portal built to empower both recruiters and candidates.  
It simplifies hiring for recruiters while helping candidates seamlessly apply for jobs.  
With a clean UI and robust backend, Recruit ensures smooth job posting, application tracking, and candidate management.  

🔗 **Live Demo**: [recruit-puce.vercel.app](https://recruit-puce.vercel.app)  

---

## 🚀 Features  

### 👩‍💼 Recruiter Features  
- **Job Management**: Post, edit, and delete job listings with ease.  
- **Hiring Workflow**: Update job status (open, closed) in real time.  
- **Application Review**: View candidate applications, track their status, and make hiring decisions.  
- **Company Profiles**: Build and manage a company profile with logo, description, and branding.  

### 👨‍💻 Candidate Features  
- **Account & Authentication**: Secure sign-up and login with Clerk.  
- **Job Applications**: Apply to multiple job postings and track the progress of each application.  
- **Saved Jobs**: Bookmark interesting jobs to apply later.  
- **Personal Dashboard**: View applied jobs, application status, and saved opportunities.  

### 🌐 Common Features  
- **Role-Based Access**: Tailored dashboards and functionality for recruiters and candidates.  
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.  

---

## 🛠️ Tech Stack  

- **Frontend**:  
  - [React](https://reactjs.org/)  
  - [Vite](https://vitejs.dev/)  
  - [Tailwind CSS](https://tailwindcss.com/)  
  - [Lucide Icons](https://lucide.dev/)  
  - [Shadcn UI](https://ui.shadcn.com/) 
  - [React Hook Form](https://react-hook-form.com/)  
  - [Clerk](https://clerk.dev/) for authentication  

- **Backend**:  
  - [Supabase](https://supabase.com/) (PostgreSQL, Auth, Storage)  

- **Deployment**:  
  - [Vercel](https://vercel.com/)  

---

## 📦 Installation  

1. **Clone the repository**:  

   ```bash
   git clone https://github.com/OnkarPawar26/recruit.git
   cd recruit

---

2. **Install dependencies**:
  ```bash
  npm install

---

3. **Configure environment variables**:

  Create a .env file in the root directory and add your Supabase credentials:
  ```.env
  VITE_SUPABASE_URL=your-supabase-url
  VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
  VITE_CLERK_PUBLISHABLE_KEY=your-clerk-key
---

4. **Start the development server**:
  ```bash
  npm run dev

---

## 📁 Project Structure

```
recruit/
├── dist/               # Production build output
├── node_modules/       # Project dependencies
├── public/             # Static assets
├── src/                # Source code
│   ├── api/            # API calls (if configured)
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom hooks
│   ├── pages/          # Page components
│   ├── App.jsx         # Root app component
│   └── main.jsx        # Entry point
├── .env                # Environment variables
├── .gitignore          # Git ignore rules
├── components.json     # Tailwind/Component config
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML template
├── jsconfig.json       # JS/TS project config
├── package.json        # Project metadata and scripts
├── package-lock.json   # Dependency lock file
├── postcss.config.js   # PostCSS configuration
├── README.md           # Documentation
├── tailwind.config.js  # Tailwind CSS configuration
├── vercel.json         # Vercel deployment configuration
└── vite.config.js      # Vite configuration


---

## 🙌 Acknowledgements

- [React](https://react.dev/) for UI library.  
- [Tailwind CSS](https://tailwindcss.com/) for styling.  
- [Shadcn UI](https://ui.shadcn.com/) for modern UI components.  
- [Supabase](https://supabase.com/) for backend services.  
- [Clerk](https://clerk.com/) for seamless authentication.  
- [Vercel](https://vercel.com/) for deployment.  
