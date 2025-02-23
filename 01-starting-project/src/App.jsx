import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';


function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function hanldleSelectedTopic(topic) {
    setSelectedTopic(topic);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isActive={selectedTopic === 'components'} onSelect={() => hanldleSelectedTopic('components')}>Components</TabButton>
            <TabButton isActive={selectedTopic === 'jsx'} onSelect={() => hanldleSelectedTopic('jsx')}>JSX</TabButton>
            <TabButton isActive={selectedTopic === 'props'} onSelect={() => hanldleSelectedTopic('props')}>Props</TabButton>
            <TabButton isActive={selectedTopic === 'state'} onSelect={() => hanldleSelectedTopic('state')}>State</TabButton>
          </menu>
        </section >
        <div id='tab-content' >
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App;
