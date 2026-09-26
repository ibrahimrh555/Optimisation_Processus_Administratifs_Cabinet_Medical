import { useState } from 'react';
import type { FormEvent } from 'react';
import { ApiError, login } from './auth';
import type { AuthUser } from './auth';

interface LoginPageProps {
  onAuthenticated: (user: AuthUser) => void;
}

export default function LoginPage({ onAuthenticated }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    if (!email.trim() || !password) {
      setError('Renseignez votre adresse e-mail et votre mot de passe.');
      return;
    }

    setSubmitting(true);
    try {
      onAuthenticated(await login(email.trim(), password));
    } catch (caught) {
      setError(caught instanceof ApiError ? caught.message : 'Le serveur est indisponible. Reessayez plus tard.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="login-page">
      <section className="login-showcase" aria-label="Presentation de Cabinet Medical">
        <a className="login-brand" href="/" aria-label="Cabinet Medical">
          <span className="brand-mark"><i /><i /></span>
          <strong>Cabinet<span>Medical</span></strong>
        </a>
        <div className="showcase-copy">
          <span className="eyebrow">PLATEFORME DE GESTION MEDICALE</span>
          <h1>Le cabinet organise.<br />Les soins simplifies.</h1>
          <p>Centralisez les rendez-vous, les dossiers patients et le suivi administratif dans un espace securise.</p>
          <div className="security-points">
            <span><i>✓</i> Donnees protegees</span>
            <span><i>✓</i> Acces adapte a chaque role</span>
          </div>
        </div>
        <div className="showcase-card" aria-hidden="true">
          <div><span>CM</span><p><strong>Cabinet Central</strong><small>Activite aujourd'hui</small></p></div>
          <b>24</b><small>rendez-vous planifies</small>
          <progress value="18" max="24" />
        </div>
      </section>

      <section className="login-panel">
        <div className="login-box">
          <div className="mobile-login-brand"><span className="brand-mark"><i /><i /></span><strong>Cabinet<span>Medical</span></strong></div>
          <p className="welcome">Bienvenue</p>
          <h2>Connectez-vous a votre espace</h2>
          <p className="login-help">Utilisez les identifiants fournis par votre administrateur.</p>

          <form onSubmit={handleSubmit} noValidate>
            {error && <div className="login-error" role="alert"><span>!</span>{error}</div>}
            <label htmlFor="email">Adresse e-mail</label>
            <div className="input-wrap"><span>@</span><input id="email" type="email" autoComplete="username" value={email} onChange={event => setEmail(event.target.value)} placeholder="nom@cabinet.ma" disabled={submitting} /></div>
            <label htmlFor="password">Mot de passe</label>
            <div className="input-wrap"><span>●</span><input id="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Votre mot de passe" disabled={submitting} /><button type="button" onClick={() => setShowPassword(value => !value)} aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}>{showPassword ? 'Masquer' : 'Afficher'}</button></div>
            <button className="login-submit" type="submit" disabled={submitting}>{submitting ? 'Connexion en cours...' : 'Se connecter'}</button>
          </form>

          <p className="login-support">Probleme de connexion ? <a href="mailto:support@cabinet.ma">Contacter l'administrateur</a></p>
        </div>
        <footer>© 2026 CabinetMedical · Acces securise</footer>
      </section>
    </main>
  );
}
