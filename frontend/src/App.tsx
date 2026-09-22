const modules = [
  'Authentification et roles',
  'Cabinets et utilisateurs',
  'Patients et rendez-vous',
  'Dossiers et consultations',
  'Ordonnances et facturation',
  'Notifications et audit',
];

export default function App() {
  return (
    <main>
      <section className="hero">
        <span className="eyebrow">Version 2 - Sprint 0</span>
        <h1>Cabinet Medical</h1>
        <p>Une base propre et securisee pour construire la gestion du cabinet module par module.</p>
        <div className="status">Socle technique initialise</div>
      </section>
      <section className="modules" aria-label="Modules prevus">
        {modules.map((module, index) => (
          <article key={module}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h2>{module}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}
