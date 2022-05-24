import React from 'react';
import { Code } from '.';

export default {
  title: 'Common/Code',
  component: Code,
};

const CodeFixture = `import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript'; // Language
import 'prismjs/themes/prism-okaidia.css'; // Theme

function App () {
  // Init
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  // Usage
  return (
  <div className="App">
    <pre>
      <code className="language-tsx">
        <div> Markup here... </div>
      </code>
    </pre>
    </div>
  );
}

export default App;`;

export const Default = () => <Code language="tsx">{CodeFixture}</Code>;

export const ShowLines = () => <Code language="tsx" showLines>{CodeFixture}</Code>;
