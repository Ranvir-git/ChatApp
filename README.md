# DSA Coding Instructor AI

A dark-mode coding instructor AI built with Express.js and Google Gemini API that answers coding and DSA-related questions.

## Features

- 🤖 AI-powered coding assistant using Google Gemini 2.0 Flash
- 🎨 Beautiful dark mode UI with responsive design
- 🔒 Secure API key management (backend proxy)
- 💬 Real-time responses to coding questions
- 📚 Specialized in Data Structures & Algorithms

## Prerequisites

- Node.js v20+ installed
- Google Gemini API key (get it from [Google AI Studio](https://aistudio.google.com/apikey))

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/dsa-coding-instructor.git
cd dsa-coding-instructor
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env` file**
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

4. **Add your API key**
Open `.env` and replace `your_api_key_here` with your actual Google Gemini API key:
```
GOOGLE_API_KEY=AIzaSy...your_actual_key...
```

## Running the Project

### Backend Server
```bash
node server.js
```

### Frontend
Open `http://localhost:3000` in your browser

### Node Script (DSA.js)
```bash
node DSA.js
```

## Project Structure

```
.
├── index.html          # Frontend UI
├── server.js           # Express server with API proxy
├── DSA.js              # Node.js script for CLI usage
├── package.json        # Dependencies
├── .env                # Environment variables (not in Git)
├── .env.example        # Example env file
└── .gitignore          # Git ignore rules
```

## How It Works

1. **Frontend** (`index.html`) sends questions to your local server
2. **Backend** (`server.js`) receives requests and forwards them to Google Gemini API
3. **API Response** is returned to frontend and displayed in the UI
4. **Security**: API key stays on the backend, never exposed to the browser

## Security Notes

- ⚠️ **Never commit `.env` file** - it contains your API key
- Use `.env.example` as a template for others
- Keep your API key private and regenerate if compromised
- The backend acts as a proxy to prevent CORS issues

## Usage Examples

### Ask a Question (Web UI)
1. Open `http://localhost:3000`
2. Type your coding question
3. Click "Ask" and get instant AI response

### Use as Node Script
```bash
node DSA.js
```
Asks: "What is array data structure in simple words?"

## Deployment Options

### Deploy on Vercel (Free)
```bash
npm install -g vercel
vercel
```

### Deploy on Heroku (Free tier ended, paid options available)
```bash
npm install -g heroku
heroku create
git push heroku main
```

### Deploy on Railway
1. Push code to GitHub
2. Connect repository to Railway
3. Add `GOOGLE_API_KEY` environment variable
4. Deploy

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GOOGLE_API_KEY` | Yes | Your Google Gemini API key |

## Troubleshooting

### "API Key not found" error
- Ensure `.env` file exists with a valid `GOOGLE_API_KEY`
- Verify the API key is active in Google AI Studio
- Restart the server after updating `.env`

### CORS errors
- Make sure you're using the backend proxy (`/api/ask`)
- Check that `server.js` is running on `localhost:3000`

### Module not found
- Run `npm install` to install all dependencies
- Check that `node_modules` folder exists

## Contributing

Feel free to fork, improve, and submit pull requests!

## License

MIT

## Author

Your Name

---

**Get your free API key**: [Google AI Studio](https://aistudio.google.com/apikey)
