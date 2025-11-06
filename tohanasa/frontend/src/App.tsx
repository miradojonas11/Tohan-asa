import React from 'react';
import { JobsPage } from './pages/JobsPage'; // Importez votre composant

function App() {
  return (
    <div className="tohanasa-app">
      <header>
        <h1>Tohanasa</h1>
        <nav>
          <a href="/jobs">Emplois</a>
          <a href="/trainings">Formations</a>
          <a href="/cv">CV</a>
        </nav>
      </header>
      <main>
        <JobsPage /> {/* Affiche votre composant d'emplois */}
      </main>
    </div>
  );
}

export default App;