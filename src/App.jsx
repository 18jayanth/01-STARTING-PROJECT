import {CORE_CONCEPTS} from './data.js';
import {EXAMPLES} from './data.js';
import Header from './components/Header/Header.jsx'
import CoreConcepts from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/CoreConcept/TabButton.jsx';
import { useState } from 'react';
function App() {
  const [tabContent,settabContent]=useState(null)
  function handleSelect(selected)
    {
      
        settabContent(selected)
        
    }

  return (
    <div>
      <Header/>
      <main>

        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        {CORE_CONCEPTS.map((coreconcepts)=><CoreConcepts key={coreconcepts.title} {...coreconcepts}/>)}
        
        </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
          <TabButton isSelected={tabContent==='components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={tabContent==='jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={tabContent==='props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={tabContent==='state'} onSelect={()=>handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
        
          {!tabContent ? (<p> Please Select the Topic</p> ):
          ( 
            <div id='tab-content'>
            <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre>
            <code>
           {EXAMPLES[tabContent].code}
            </code>
          </pre>
          </div>
          )}
        
      </main>
    </div>
  );
}

export default App;
