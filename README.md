# Gemini Clone – AI Chat App

Welcome to **Gemini Clone**, a modern AI-powered chat application built with **React** and **Vite**. This project demonstrates seamless integration with Google’s Gemini API, showcasing real-time AI conversations and a clean, scalable codebase.

## ✨ Features

- **Modern Stack:** Built with React, Vite, and TypeScript for fast development and optimal performance.
- **AI Integration:** Leverages Google Gemini’s generative AI for dynamic, context-aware chat responses.
- **Streaming Responses:** Utilizes async streaming for smooth, real-time message updates.
- **Clean Architecture:** Modular code with clear separation of concerns and best practices.
- **Developer Friendly:** Includes ESLint, environment variable support, and easy extensibility.

## 🚀 Quick Start

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Set up your API key:**
   - Create a `.env` file in the root directory.
   - Add your Gemini API key:
     ```
     VITE_GEMINI_API_KEY=your-api-key-here
     ```

3. **Run the app:**
   ```sh
   npm run dev
   ```

## 🛠️ Tech Stack

- **Frontend:** React, Vite,
- **AI API:** @google/genai
- **Tooling:** ESLint, Prettier

## 📄 Example Usage

```ts
import runChat from './type';

const response = await runChat("Hello, Gemini!");
console.log(response);
```

---

> **Why this project?**  
> This project demonstrates my ability to build modern, production-ready applications with real-world API integrations, clean code, and a focus on developer experience. I’m excited to bring these skills to your team!


type.ts code 
// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';

async function runChat(prompt: string) {
  const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,

  });
  const config = {
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-2.5-flash-preview-05-20';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let resultText = "";
for await (const chunk of response) {
  resultText += chunk.text();
}
return resultText;

}

export default runChat;

