# 📰 Mega Blog

A powerful, responsive, and minimal blog platform built with **React + Vite**, **Appwrite** as the backend, and **Tailwind CSS** for styling. Users can sign up, log in, write posts, and explore blogs created by others.

---

## 🚀 Tech Stack

| Frontend     | Backend               | Styling      | Hosting          |
| ------------ | --------------------- | ------------ | ---------------- |
| React + Vite | Appwrite              | Tailwind CSS | Vercel / Netlify |
| React Router | Appwrite DB & Storage | Headless UI  | —                |

---

## ✨ Features

* 🔐 Authentication with OTP (via Appwrite)
* 📝 Create, update, and delete blog posts
* 🖼️ Upload and preview blog images (Appwrite Storage)
* 🧑‍💻 User-based blog filtering
* 🔍 Explore all public posts
* 🎨 Beautiful and responsive design with Tailwind

---

## 💠 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mega-blog.git
cd mega-blog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file at the root and add:

```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

### 4. Run development server

```bash
npm run dev
```

App will be running at: `http://localhost:5173`

---

## 🧪 Available Scripts

* `npm run dev` – Run dev server
* `npm run build` – Build for production
* `npm run preview` – Preview production build
* `npm run lint` – Lint the project


## 🤝 Contributing

Pull requests are welcome! Please open an issue first to discuss changes.

---

## 🙌 Acknowledgements

* [Appwrite](https://appwrite.io/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React Router](https://reactrouter.com/)
* [Vite](https://vitejs.dev/)
