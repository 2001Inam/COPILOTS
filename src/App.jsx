import { useState } from 'react'

const simulators = {
  customer: {
    title: 'Customer Simulator',
    description: 'Practice realistic customer conversations.',
    url: 'https://copilotstudio.microsoft.com/environments/Default-b4c546a4-7dac-46a6-a7dd-ed822a11efd3/bots/crbac_test0_Nex4PA/webchat?__version__=2&enableFileAttachment=false&cliAgent=true',
  },
  quiz: {
    title: 'Quiz Simulator',
    description: 'Test your knowledge and build confidence.',
    url: 'https://copilotstudio.microsoft.com/environments/Default-b4c546a4-7dac-46a6-a7dd-ed822a11efd3/bots/crbac_quiz2_ROm8X/webchat?__version__=2&enableFileAttachment=false&cliAgent=true',
  },
}

function App() {
  const [activeSimulator, setActiveSimulator] = useState(null)

  if (activeSimulator) {
    const simulator = simulators[activeSimulator]

    return (
      <main>
        <button onClick={() => setActiveSimulator(null)}>← Back to Simulator Hub</button>
        <h1>{simulator.title}</h1>
        <p>{simulator.description}</p>

        <iframe
          title={simulator.title}
          src={simulator.url}
          style={{ width: '100%', height: '650px', border: 0, borderRadius: '16px' }}
        />
      </main>
    )
  }

  return (
    <main>
      <h1>Simulator Hub</h1>
      <p>Train. Practice. Improve.</p>

      <section>
        <h2>Choose a simulator</h2>

        <button onClick={() => setActiveSimulator('customer')}>
          Customer Simulator
        </button>

        <button onClick={() => setActiveSimulator('quiz')}>
          Quiz Simulator
        </button>
      </section>
    </main>
  )
}

export default App