import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  const modules = ['Career Portfolio','Job Intelligence','Career Coach','Recruiter Portal','Employer Portal','Admin Portal'];
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Career Platform</p>
        <h1>Career operating system for professionals and hiring teams.</h1>
        <p className="lede">Initial production repository bootstrap.</p>
      </section>
      <section className="grid">
        {modules.map((item) => (
          <article className="card" key={item}>
            <h2>{item}</h2>
            <p>Module placeholder ready for implementation.</p>
          </article>
        ))}
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
