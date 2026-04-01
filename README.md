# Jesta-O 

**Jesta-O** is a full-stack web application that allows users to generate AI-powered images from text prompts. It leverages the HuggingFace Inference API to turn creative descriptions into stunning visuals — right in the browser.


## Features

- 🔐 **OAuth Authentication** — Secure login via Google/GitHub OAuth (no passwords needed)
- 🖼️ **Text-to-Image Generation** — Enter any text prompt and generate an AI image using HuggingFace's Stable Diffusion models
- ⚡ **Fast & Responsive UI** — Built with React + Vite for a smooth user experience

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Vite  , tailwindcss |
| Backend | Node.js, Express |
| Authentication | OAuth 2.0 (Google) |
| AI / Image Generation | HuggingFace Inference API |
| Database | MongoDB |

---


## ⚙️ Getting Started (Local Setup)

### Prerequisites

- Node.js (v18+)
- npm
- A [HuggingFace account](https://huggingface.co) with an API token
- Google or GitHub OAuth credentials

### 1. Clone the repository

```bash
git clone https://github.com/your-username/jesta-o.git
cd jesta-o
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

# HuggingFace
HF_API_KEY=hf_xxxxxxxxxxxxxxxxxxxxxxxx

# OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# JWT
JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173
```
Start the backend server:
```bash
npm start
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file inside the `frontend` folder:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:5173
```


---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.
---

## 📄 License

[MIT](LICENSE)
=======
