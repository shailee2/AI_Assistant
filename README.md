# AI Assistant (Powered by DeepInfra + React)

An AI-powered assistant built with a custom backend using Node.js and DeepInfra's Mixtral model, and a responsive frontend in React + Tailwind. Ask a question and receive a concise, direct answer — instantly.

## Tech Stack

- **Frontend:** React + Vite + Tailwind CSS
- **AI Model:** Mixtral via DeepInfra API
- **Backend:** Node.js + Express
- **API Integration:** Axios + OpenAI-compatible endpoints

## Features

- Ask any factual question (e.g., "What is the capital of France?")
- Clean UI built with v0.dev / Tailwind
- Custom prompt engineering to prevent overgeneration
- Fully working Express backend with POST `/ask` route
- Simple JSON response parsing and frontend display

## Project Structure

AI_Assistant/

├── backend/<br>
│ ├── index.js # Express server calling DeepInfra<br>
│ └── .env # Contains API key (not committed)<br>
├── frontend/<br>
│ ├── src/<br>
│ │ ├── App.jsx # React UI<br>
│ │ └── index.js<br>
│ ├── vite.config.js<br>
│ └── .gitignore<br>
└── README.md<br>

## Run Locally

### 1. Clone the repository
```
git clone https://github.com/shailee2/AI_Assistant.git
cd AI_Assistant
```
### 2. Setup backend
```
cd backend
npm install
# Create a .env file with your DeepInfra key:
echo OPENAI_API_KEY=your_key_here > .env
node index.js
# The backend will run at: http://localhost:3001
```
### 3. Setup frontend
``` 
cd ../frontend
npm install
npm run dev
# Visit: http://localhost:5173
```
## Environment Variables (.env)
```
OPENAI_API_KEY=your_deepinfra_key_here
```

## Acknowledgements
DeepInfra for providing Mixtral API<br>
v0.dev for AI-generated UI<br>
Tailwind CSS<br>


## Author
Shailee Patel <br>
Email: shaileepatel05@gmail.com <br>
LinkedIn: linkedin.com/in/shailee-patel-04481b285<br>
GitHub: github.com/shailee2

