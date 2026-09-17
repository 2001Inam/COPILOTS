import { useState } from 'react'

const simulators = {
  customer: {
    title: 'Customer Conversation Simulator',
    label: 'Customer Support',
    description: 'Practice confident, empathetic conversations in realistic support scenarios.',
    icon: '💬',
    url: 'https://copilotstudio.microsoft.com/environments/Default-b4c546a4-7dac-46a6-a7dd-ed822a11efd3/bots/crbac_test0_Nex4PA/webchat?__version__=2&enableFileAttachment=false&cliAgent=true',
  },
  quiz: {
    title: 'Support Knowledge Quiz',
    label: 'Knowledge Check',
    description: 'Strengthen product knowledge and prepare for customer-facing work.',
    icon: '✓',
    url: 'https://copilotstudio.microsoft.com/environments/Default-b4c546a4-7dac-46a6-a7dd-ed822a11efd3/bots/crbac_quiz2_ROm8X/webchat?__version__=2&enableFileAttachment=false&cliAgent=true',
  },
}

function MicrosoftMark() {
  return (
    <span className="microsoft-mark" aria-label="Microsoft-style mark">
      <i />
      <i />
      <i />
      <i />
    </span>
  )
}

function App() {
  const [activeSimulator, setActiveSimulator] = useState(null)

  if (activeSimulator) {
    const simulator = simulators[activeSimulator]

    return (
      <div className="app-shell">
        <header className="topbar">
          <button className="brand" onClick={() => setActiveSimulator(null)}>
            <MicrosoftMark />
            <span>
              <strong>Support Academy</strong>
              <small>Customer experience training</small>
            </span>
          </button>
          <span className="secure-badge">Training environment</span>
        </header>

        <main className="simulator-page">
          <button className="back-button" onClick={() => setActiveSimulator(null)}>
            ← Back to learning hub
          </button>

          <div className="simulator-heading">
            <span className="eyebrow">{simulator.label}</span>
            <h1>{simulator.title}</h1>
            <p>{simulator.description}</p>
          </div>

          <section className="simulator-frame">
            <iframe title={simulator.title} src={simulator.url} />
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <MicrosoftMark />
          <span>
            <strong>Support Academy</strong>
            <small>Customer experience training</small>
          </span>
        </div>
        <span className="secure-badge">Training environment</span>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Learning hub</span>
            <h1>Build customer support confidence.</h1>
            <p>
              Practical training for new support professionals—designed to
              strengthen communication, knowledge, and customer focus.
            </p>

            <div className="hero-points">
              <span>✓ Practice safely</span>
              <span>✓ Learn by doing</span>
              <span>✓ Build confidence</span>
            </div>
          </div>

          <div className="hero-panel">
            <span className="panel-label">Your learning journey</span>
            <div className="progress-line">
              <span />
            </div>
            <div className="progress-row">
              <strong>Ready to begin</strong>
              <span>2 learning modules</span>
            </div>
          </div>
        </section>

        <section className="learning-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Choose a module</span>
              <h2>Start your training</h2>
            </div>
            <p>Select a simulator to begin.</p>
          </div>

          <div className="simulator-grid">
            <article className="learning-card">
              <div className="card-icon chat-icon">💬</div>
              <span className="card-tag">Scenario practice</span>
              <h3>Customer Simulator</h3>
              <p>
                Respond to realistic customer conversations and practice
                professional support skills.
              </p>
              <button onClick={() => setActiveSimulator('customer')}>
                Start customer practice <span>→</span>
              </button>
            </article>

            <article className="learning-card">
              <div className="card-icon quiz-icon">✓</div>
              <span className="card-tag">Knowledge check</span>
              <h3>Quiz Simulator</h3>
              <p>
                Test what you know, identify gaps, and reinforce essential
                customer-support knowledge.
              </p>
              <button onClick={() => setActiveSimulator('quiz')}>
                Start knowledge quiz <span>→</span>
              </button>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <span>Support Academy</span>
        <span>Independent training environment</span>
      </footer>
    </div>
  )
}

export default App