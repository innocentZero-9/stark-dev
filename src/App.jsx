import { useState } from "react";
import "./App.css";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  // Chat input and conversation history
const [chatInput, setChatInput] = useState("");

const [chatMessages, setChatMessages] = useState([
  {
    sender: "ai",
    text: "Hello! I'm STARK AI, your personal assistant. How can I help you?"
  }
]);

// Generate a response
function getAIResponse(message) {
  const text = message.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello, Mr. Stark! Systems are online. How can I help you?";
  }

  if (text.includes("your name") || text.includes("who are you")) {
    return "I'm STARK AI, your personal portfolio assistant. Nice to meet you!";
  }

  if (
    text.includes("who is jisan") ||
    text.includes("about jisan") ||
    text.includes("about me")
  ) {
    return "Jisan is a Computer and Information Systems student at Daffodil International University who is interested in programming and AI.";
  }

  if (text.includes("skill") || text.includes("programming")) {
    return "Jisan is developing his programming skills and exploring web development and AI. Ask him about his latest projects!";
  }

  if (text.includes("project")) {
    return "Welcome to STARK.DEV! Explore the Projects section of this portfolio to learn about Jisan's work.";
  }

  if (text.includes("contact") || text.includes("email")) {
    return "You can visit the Contact section of this portfolio to find the available contact information.";
  }

  if (text.includes("help")) {
    return "Try asking me: Who is Jisan? What are his skills? Tell me about his projects. Or say hello!";
  }

  return "That's an interesting question! My basic knowledge is limited right now. In Phase 2, we'll connect me to a real AI model so I can answer a much wider range of questions.";
}

// Send a message
function handleSendMessage() {
  const message = chatInput.trim();

  if (!message) return;

  const reply = getAIResponse(message);

  setChatMessages((previousMessages) => [
    ...previousMessages,
    { sender: "user", text: message },
    { sender: "ai", text: reply }
  ]);

  setChatInput("");
}
  return (
    <main className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">
          STARK<span>.DEV</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-button" href="#contact">
          Let's Connect ↗
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="status">
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="eyebrow">HELLO, WORLD. I'M</p>

          <h1>
            KHAN FIZUL
            <br />
            <span>KARIM.</span>
          </h1>

          <h2>
            Aspiring Software Developer
            <br />
            <span>& AI Enthusiast.</span>
          </h2>

          <p className="description">
            I build digital experiences, explore artificial intelligence,
            and turn ideas into reality through code.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work <span>↗</span>
            </a>

            <a href="#about" className="secondary-button">
              More About Me
            </a>
          </div>

          <div className="hero-footer">
            <span>BASED IN BANGLADESH 🇧🇩</span>
            <span>BUILDING THE FUTURE, ONE LINE AT A TIME.</span>
          </div>
        </div>

        <div className="reactor-area">
          <div className="reactor-label">STARK INDUSTRIES</div>

          <div className="reactor">
            <div className="reactor-ring ring-one"></div>
            <div className="reactor-ring ring-two"></div>
            <div className="reactor-ring ring-three"></div>
            <div className="reactor-core">
              <div className="core-inner"></div>
            </div>
          </div>

          <div className="reactor-caption">
            <span className="status-dot"></span>
            SYSTEM ONLINE
          </div>

          <div className="floating-card card-top">
            <span>01 / CREATIVE</span>
            <strong>Ideas → Reality</strong>
          </div>

          <div className="floating-card card-bottom">
            <span>02 / TECHNOLOGY</span>
            <strong>Human × AI</strong>
            <div className="ai-panel">
  <div className="ai-panel-header">
    <span className="ai-indicator"></span>
    <span>STARK AI</span>
    <span className="ai-version">V2.0</span>
  </div>

  <div className="ai-panel-body">
    <div className="diagnostic-row">
      <span>CORE SYSTEM</span>
      <span className="diagnostic-value">ONLINE</span>
    </div>

    <div className="diagnostic-row">
      <span>NEURAL NETWORK</span>
      <span className="diagnostic-value">READY</span>
    </div>

    <div className="diagnostic-row">
      <span>POWER OUTPUT</span>
      <span className="diagnostic-value">98.7%</span>
    </div>

    <div className="diagnostic-row">
      <span>AI ASSISTANT</span>
      <span className="diagnostic-value">ACTIVE</span>
    </div>
  </div>

  <div className="ai-progress">
    <div className="ai-progress-fill"></div>
  </div>

  <p className="ai-panel-footer">ALL SYSTEMS OPERATIONAL</p>
</div>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <p className="section-label">01 — ABOUT ME</p>
        <h2>
          Curious mind.
          <br />
          <span>Builder's heart.</span>
        </h2>

        <p className="section-description">
          I'm a Computing and Information Systems student at Daffodil
          International University. I'm learning to create useful software,
          improve my development skills, and explore the possibilities of AI.
        </p>

        <div className="stats">
          <div>
            <strong>01</strong>
            <span>Curiosity first</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>Ideas to explore</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Always learning</span>
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <p className="section-label">02 — SELECTED PROJECTS</p>
        <h2>
          Things I'm <span>building.</span>
        </h2>

        <div className="project-grid">
          <article className="project-card">
            <span className="project-number">PROJECT / 01</span>
            <div className="project-icon">◈</div>
            <h3>SmartDesk</h3>
            <p>
              A personal dashboard for managing tasks, schedules, and notes
              in one place.
            </p>
            <div className="tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </article>

          <article className="project-card">
            <span className="project-number">PROJECT / 02</span>
            <div className="project-icon">⌘</div>
            <h3>Student Management System</h3>
            <p>
              A C programming project for adding, searching, updating,
              sorting, and managing student records.
            </p>
            <div className="tags">
              <span>C</span>
              <span>File Handling</span>
            </div>
          </article>

          <article className="project-card">
            <span className="project-number">PROJECT / 03</span>
            <div className="project-icon">✳</div>
            <h3>AI Experiments</h3>
            <p>
              An evolving collection of experiments as I learn Python,
              machine learning, and AI application development.
            </p>
            <div className="tags">
              <span>Python</span>
              <span>AI / ML</span>
            </div>
          </article>
        </div>
      </section>

      <section className="contact section" id="contact">
        <p className="section-label">03 — CONTACT</p>
        <h2>
          Let's build
          <br />
          <span>something great.</span>
        </h2>
        <p className="section-description">
          Have an idea, a project, or an opportunity? Let's connect.
        </p>
        <a className="primary-button" href="mailto:YOUR_EMAIL@example.com">
          Get In Touch ↗
        </a>
      </section>

      <footer className="footer">
        <a className="logo" href="#home">
          STARK<span>.DEV</span>
        </a>
        <p>Designed with curiosity. Built with code.</p>
        <span>© {new Date().getFullYear()} KHAN FIZUL KARIM</span>
      </footer>
      {/* STARK AI Floating Button */}
<button
  className="stark-ai-button"
  onClick={() => setIsChatOpen(!isChatOpen)}
>
  <span className="stark-ai-icon">✦</span>
  <span>STARK AI</span>
  <span className="ai-status-dot"></span>
</button>

{isChatOpen && (
  <div className="stark-chat-window">
    <div className="stark-chat-header">
      <div>
        <h3>✦ STARK AI</h3>
        <span>
          <span className="chat-online-dot"></span>
          SYSTEM ONLINE
        </span>
      </div>

      <button
        className="chat-close"
        onClick={() => setIsChatOpen(false)}
      >
        ×
      </button>
    </div>

    <div className="stark-chat-body">
  {chatMessages.map((message, index) => (
    <div
      key={index}
      className={message.sender === "user" ? "user-message" : "ai-message"}
    >
      <strong>{message.sender === "user" ? "YOU" : "STARK AI"}</strong>
      <p>{message.text}</p>
    </div>
  ))}
</div>

   <div className="stark-chat-input">
  <input
    type="text"
    placeholder="Ask me anything..."
    value={chatInput}
    onChange={(event) => setChatInput(event.target.value)}
    onKeyDown={(event) => {
      if (event.key === "Enter") handleSendMessage();
    }}
  />

  <button onClick={handleSendMessage}>➤</button>
</div>
  </div>
)}

    </main>
  );
}
export default App;