const STORAGE_KEYS = {
  saved: "emploi-cam.saved.v1",
  applied: "emploi-cam.applied.v1",
  profile: "emploi-cam.profile.v1",
  studentVerification: "emploi-cam.student-verification.v1",
  companyProfile: "emploi-cam.company-profile.v1",
  companyJobs: "emploi-cam.company-jobs.v1",
  positions: "emploi-cam.positions.v1",
  notifications: "emploi-cam.notifications.v1",
};

const now = Date.now();
const day = 24 * 60 * 60 * 1000;

const demoJobs = [
  { id: "stage-dev-web", title: "Stagiaire développeur·se web", company: "Kola Digital", initials: "KD", logo: "sage", city: "Douala", kind: "stage", category: "Technologie", tags: ["Développement", "HTML / CSS"], duration: "3 mois", addedHoursAgo: 2, expiresInDays: 11, positionsTotal: 3, positionsRemaining: 2, salary: "Indemnité à discuter", verified: false, description: "Participez à la réalisation de projets web pour des entreprises locales. Vous travaillerez avec une équipe produit et découvrirez les étapes complètes de la création d'une application.", responsibilities: ["Intégrer des pages web accessibles et adaptées aux mobiles.", "Collaborer avec l'équipe sur des fonctionnalités existantes.", "Documenter les changements réalisés."], requirements: "Étudiant·e en informatique ou domaine similaire. Notions de HTML, CSS et JavaScript. Un portfolio de projets est apprécié." },
  { id: "assistant-marketing", title: "Assistant·e marketing digital", company: "Mboa Créatif", initials: "MC", logo: "lilac", city: "Yaoundé", kind: "stage", category: "Marketing", tags: ["Communication", "Réseaux sociaux"], duration: "4 mois", addedHoursAgo: 8, expiresInDays: 8, positionsTotal: 2, positionsRemaining: 2, salary: "À préciser", verified: false, description: "Contribuez à la communication numérique de projets locaux et à la création de contenus pour différents canaux.", responsibilities: ["Préparer un calendrier éditorial.", "Participer à la création et à la planification de contenus.", "Suivre les indicateurs de campagne."], requirements: "Formation en communication, marketing ou domaine connexe. Bonne expression écrite et intérêt pour les médias numériques." },
  { id: "comptable-junior", title: "Comptable junior", company: "Naya Conseil", initials: "NC", logo: "peach", city: "Douala", kind: "emploi", category: "Finance", tags: ["Comptabilité", "Excel"], duration: "CDI", addedHoursAgo: 16, expiresInDays: 17, positionsTotal: 2, positionsRemaining: 1, salary: "Selon le profil", verified: false, description: "Rejoignez une équipe de conseil pour participer au suivi des opérations comptables de plusieurs petites entreprises.", responsibilities: ["Préparer les écritures et pièces comptables.", "Participer au rapprochement de comptes.", "Contribuer à la préparation des rapports périodiques."], requirements: "Formation en comptabilité ou gestion. Maîtrise des tableurs et sens de la confidentialité." },
  { id: "alternance-design", title: "Designer graphique en alternance", company: "Studio Baobab", initials: "SB", logo: "blue", city: "À distance", kind: "alternance", category: "Design", tags: ["Design", "Figma"], duration: "12 mois", addedHoursAgo: 29, expiresInDays: 22, positionsTotal: 1, positionsRemaining: 1, salary: "À préciser", verified: false, description: "Participez à la conception de supports graphiques et de parcours numériques en lien avec une équipe créative.", responsibilities: ["Réaliser des maquettes d'interface.", "Préparer des supports de communication.", "Présenter et intégrer les retours de l'équipe."], requirements: "Formation en design graphique ou design numérique. Portfolio demandé. Connaissance d'un outil de maquettage appréciée." },
  { id: "stage-ressources-humaines", title: "Stage en ressources humaines", company: "Élan Services", initials: "ES", logo: "yellow", city: "Yaoundé", kind: "stage", category: "Ressources humaines", tags: ["RH", "Recrutement"], duration: "3 mois", addedHoursAgo: 34, expiresInDays: 13, positionsTotal: 2, positionsRemaining: 2, salary: "À préciser", verified: false, description: "Découvrez les activités quotidiennes d'une équipe de ressources humaines dans un environnement de services.", responsibilities: ["Organiser les dossiers de recrutement.", "Aider à planifier les entretiens.", "Mettre à jour des documents internes."], requirements: "Étudiant·e en gestion, ressources humaines ou administration. Discrétion et bonne organisation." },
  { id: "charge-clientele", title: "Chargé·e de clientèle", company: "Tandem Solutions", initials: "TS", logo: "pink", city: "Bafoussam", kind: "emploi", category: "Commerce", tags: ["Relation client", "Vente"], duration: "CDI", addedHoursAgo: 47, expiresInDays: 19, positionsTotal: 3, positionsRemaining: 3, salary: "Selon le profil", verified: false, description: "Accompagnez les clients dans la découverte de services et veillez à la qualité de leurs échanges avec l'entreprise.", responsibilities: ["Répondre aux demandes des clients.", "Présenter les services de l'entreprise.", "Assurer le suivi des dossiers."], requirements: "Formation en commerce ou expérience en relation client. Aisance à l'oral et sens de l'écoute." },
  { id: "stage-data", title: "Assistant·e données et reporting", company: "Atlas Initiative", initials: "AI", logo: "teal", city: "Douala", kind: "stage", category: "Technologie", tags: ["Excel", "Analyse"], duration: "3 mois", addedHoursAgo: 53, expiresInDays: 9, positionsTotal: 1, positionsRemaining: 1, salary: "Indemnité à discuter", verified: false, description: "Contribuez à l'organisation des données et à la production de synthèses utiles au suivi des activités.", responsibilities: ["Vérifier et mettre en forme des données.", "Aider à réaliser des tableaux de suivi.", "Préparer des synthèses périodiques."], requirements: "Étudiant·e en informatique, statistiques, économie ou gestion. Bonne pratique des tableurs." },
  { id: "alternance-commercial", title: "Assistant·e commercial·e", company: "Kivu Commerce", initials: "KC", logo: "slate", city: "Yaoundé", kind: "alternance", category: "Commerce", tags: ["Vente", "Communication"], duration: "6 mois", addedHoursAgo: 67, expiresInDays: 26, positionsTotal: 2, positionsRemaining: 2, salary: "À préciser", verified: false, description: "Alternez les apprentissages en entreprise avec des activités de soutien aux équipes commerciales.", responsibilities: ["Préparer des supports commerciaux.", "Mettre à jour le suivi des prospects.", "Participer à des activités de communication."], requirements: "Formation commerciale en cours. Curiosité, organisation et bonne communication." },
  { id: "dev-frontend", title: "Développeur·se front-end junior", company: "Pixel Nsi", initials: "PN", logo: "green", city: "À distance", kind: "emploi", category: "Technologie", tags: ["JavaScript", "React"], duration: "CDI", addedHoursAgo: 76, expiresInDays: 15, positionsTotal: 2, positionsRemaining: 1, salary: "Selon le profil", verified: false, description: "Participez à l'évolution d'interfaces web au sein d'une petite équipe technique distribuée.", responsibilities: ["Développer des composants d'interface.", "Corriger les anomalies signalées.", "Participer aux revues de code."], requirements: "Projets concrets en JavaScript. Connaissances de React appréciées. Capacité à travailler en équipe à distance." },
].map((job) => ({
  ...job,
  isDemo: true,
  addedAt: new Date(now - job.addedHoursAgo * 60 * 60 * 1000).toISOString(),
  expiresAt: new Date(now + job.expiresInDays * day).toISOString(),
  companyDescription: `${job.company} est une entreprise fictive utilisée pour illustrer l'interface d'Emploi Cam. Son identité n'a pas été vérifiée.`,
  contactEmail: "",
  contactPhone: "",
  supportPhone: "",
  address: "",
}));

const viewTitles = {
  all: ["Des opportunités pour vous", "Des offres choisies pour votre prochain défi."],
  stage: ["Les stages à découvrir", "Un premier pas concret vers votre avenir professionnel."],
  emploi: ["Les emplois à découvrir", "Trouvez un poste qui correspond à vos ambitions."],
  alternance: ["L'alternance, autrement", "Apprenez un métier tout en gagnant de l'expérience."],
  saved: ["Vos offres enregistrées", "Gardez vos opportunités préférées à portée de main."],
  applied: ["Vos candidatures", "Suivez ici les offres pour lesquelles vous vous êtes positionné·e."],
};

function readStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return fallback;
    return JSON.parse(stored) ?? fallback;
  } catch (error) {
    console.warn(`Impossible de lire la donnée locale "${key}".`, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Impossible d'enregistrer la donnée locale "${key}".`, error);
    showToast("Enregistrement impossible. Vérifiez le stockage de votre navigateur.");
    return false;
  }
}

const state = {
  mode: new URLSearchParams(location.search).get("espace") === "entreprise" ? "employer" : "candidate",
  authPage: new URLSearchParams(location.search).get("vue") === "connexion",
  view: "all",
  employerView: "dashboard",
  kind: "all",
  query: "",
  location: "all",
  saved: readStorage(STORAGE_KEYS.saved, []),
  applied: readStorage(STORAGE_KEYS.applied, []),
  profile: readStorage(STORAGE_KEYS.profile, {}),
  studentVerification: readStorage(STORAGE_KEYS.studentVerification, { status: "unverified" }),
  companyProfile: readStorage(STORAGE_KEYS.companyProfile, { status: "unverified" }),
  companyJobs: readStorage(STORAGE_KEYS.companyJobs, []),
  positions: readStorage(STORAGE_KEYS.positions, {}),
  notifications: readStorage(STORAGE_KEYS.notifications, { candidate: [], employer: [] }),
  activeJobId: null,
  hireJobId: null,
};

const jobList = document.querySelector("#job-listings");
const emptyState = document.querySelector("#empty-state");
const toast = document.querySelector("#toast");
let toastTimer;
let countdownTimer;

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function allCandidateJobs() {
  return [...demoJobs, ...state.companyJobs.filter((job) => job.status === "approved")];
}

function companyJobs() {
  return state.companyJobs;
}

function kindLabel(kind) {
  return { stage: "Stage", emploi: "Emploi", alternance: "Alternance" }[kind] ?? "Offre";
}

function jobPositionState(job) {
  const saved = state.positions[job.id];
  return {
    total: Math.max(0, Number(saved?.total ?? job.positionsTotal ?? 1)),
    remaining: Math.max(0, Number(saved?.remaining ?? job.positionsRemaining ?? job.positionsTotal ?? 1)),
  };
}

function formatDate(value, options = { dateStyle: "long" }) {
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return "Date à confirmer";
  return new Intl.DateTimeFormat("fr-FR", { timeZone: "Africa/Douala", ...options }).format(date);
}

function safeHttpUrl(value) {
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function countdownText(value) {
  const remaining = new Date(value).getTime() - Date.now();
  if (!Number.isFinite(remaining) || remaining <= 0) return "Offre expirée";
  const seconds = Math.floor(remaining / 1000);
  const daysLeft = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  if (daysLeft > 0) return `Expire dans ${daysLeft} j ${hours} h ${minutes} min ${secs} s`;
  if (hours > 0) return `Expire dans ${hours} h ${minutes} min ${secs} s`;
  return `Expire dans ${minutes} min ${String(secs).padStart(2, "0")} s`;
}

function bookmarkIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 4.8A1.8 1.8 0 0 1 7.8 3h8.4A1.8 1.8 0 0 1 18 4.8V21l-6-4-6 4V4.8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>';
}

function jobCard(job) {
  const isSaved = state.saved.includes(job.id);
  const isApplied = state.applied.some((application) => application.id === job.id);
  const positions = jobPositionState(job);
  const expired = new Date(job.expiresAt).getTime() <= Date.now();
  const companyLabel = job.isDemo ? "Exemple — identité non vérifiée" : job.verified ? "Entreprise vérifiée" : "En attente de vérification";
  return `
    <article class="job-card" data-job-card="${escapeHTML(job.id)}">
      <div class="job-card-top">
        <span class="company-logo logo-${escapeHTML(job.logo ?? "sage")}" aria-hidden="true">${escapeHTML(job.initials ?? "EC")}</span>
        <div class="job-heading">
          <button class="job-title-link" type="button" data-open-offer="${escapeHTML(job.id)}"><span class="job-title" title="${escapeHTML(job.title)}">${escapeHTML(job.title)}</span></button>
          <span class="company-name">${escapeHTML(job.company)} · ${companyLabel}</span>
        </div>
        <button class="bookmark-button${isSaved ? " is-saved" : ""}" type="button" data-save="${escapeHTML(job.id)}" aria-label="${isSaved ? "Retirer des favoris" : "Ajouter aux favoris"}" aria-pressed="${isSaved}">${bookmarkIcon()}</button>
      </div>
      <div class="job-meta">
        <span><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M16 8.3c0 4.2-6 9-6 9s-6-4.8-6-9a6 6 0 1 1 12 0Z" stroke="currentColor" stroke-width="1.5"/><circle cx="10" cy="8" r="2" stroke="currentColor" stroke-width="1.5"/></svg>${escapeHTML(job.city)}</span>
        <span><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.5"/><path d="M10 6v4l2.5 1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></svg>${escapeHTML(job.duration ?? kindLabel(job.kind))}</span>
      </div>
      <div class="job-tags"><span class="job-tag kind-${escapeHTML(job.kind)}">${escapeHTML(kindLabel(job.kind))}</span><span class="job-tag">${escapeHTML(job.category)}</span>${(job.tags ?? []).slice(0, 2).map((tag) => `<span class="job-tag">${escapeHTML(tag)}</span>`).join("")}</div>
      <div class="job-position-meta">${positions.remaining} poste${positions.remaining > 1 ? "s" : ""} restant${positions.remaining > 1 ? "s" : ""} · ajoutée le ${formatDate(job.addedAt, { day: "2-digit", month: "short", year: "numeric" })}</div>
      <div class="job-expiry${expired ? " is-expired" : ""}" data-countdown="${escapeHTML(job.expiresAt)}">${countdownText(job.expiresAt)}</div>
      <div class="job-footer"><span class="posted-time">${escapeHTML(formatDate(job.addedAt, { day: "2-digit", month: "short" }))}</span><button class="apply-button" type="button" data-open-offer="${escapeHTML(job.id)}">${isApplied ? "Candidature enregistrée ✓" : "Consulter l'offre →"}</button></div>
    </article>`;
}

function visibleJobs() {
  let jobs = allCandidateJobs();
  if (["stage", "emploi", "alternance"].includes(state.view)) jobs = jobs.filter((job) => job.kind === state.view);
  else if (state.view === "saved") jobs = jobs.filter((job) => state.saved.includes(job.id));
  else if (state.view === "applied") {
    const appliedIds = new Set(state.applied.map((application) => application.id));
    jobs = jobs.filter((job) => appliedIds.has(job.id));
  }
  if (state.kind !== "all") jobs = jobs.filter((job) => job.kind === state.kind);
  if (state.location !== "all") jobs = jobs.filter((job) => job.city === state.location);
  const query = state.query.trim().toLocaleLowerCase("fr");
  if (query) {
    jobs = jobs.filter((job) => [job.title, job.company, job.city, job.category, ...(job.tags ?? [])]
      .join(" ").toLocaleLowerCase("fr").includes(query));
  }
  return jobs;
}

function renderJobs() {
  if (!jobList) return;
  const jobs = visibleJobs();
  jobList.innerHTML = jobs.map(jobCard).join("");
  jobList.hidden = jobs.length === 0;
  emptyState.hidden = jobs.length !== 0;
  const isDefault = state.view === "all" && state.kind === "all" && state.query === "" && state.location === "all";
  document.querySelector("#results-summary").textContent = isDefault
    ? "Des offres fictives pour découvrir la plateforme. Elles ne constituent pas des annonces vérifiées."
    : `${jobs.length} opportunité${jobs.length > 1 ? "s" : ""} trouvée${jobs.length > 1 ? "s" : ""}.`;
  document.querySelector("#saved-count").textContent = String(state.saved.length);
  updateCountdowns();
}

function updateCountdowns() {
  document.querySelectorAll("[data-countdown]").forEach((element) => {
    const expiry = element.dataset.countdown;
    element.textContent = countdownText(expiry);
    element.classList.toggle("is-expired", new Date(expiry).getTime() <= Date.now());
  });
  const activeJob = allCandidateJobs().find((job) => job.id === state.activeJobId);
  const applyButton = document.querySelector("#detail-apply-button");
  if (activeJob && document.querySelector("#offer-dialog").open) {
    const positions = jobPositionState(activeJob);
    const expired = new Date(activeJob.expiresAt).getTime() <= Date.now();
    applyButton.disabled = positions.remaining <= 0 || expired;
    applyButton.textContent = positions.remaining <= 0 ? "Postes pourvus" : expired ? "Offre expirée" : "Postuler →";
  }
}

function setView(view) {
  state.view = viewTitles[view] ? view : "all";
  state.kind = "all";
  document.querySelectorAll("[data-view]").forEach((button) => {
    const active = button.dataset.view === state.view;
    button.classList.toggle("is-active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  document.querySelector("#section-title").firstChild.textContent = `${viewTitles[state.view][0]} `;
  document.querySelectorAll("[data-kind]").forEach((button) => {
    const active = button.dataset.kind === state.kind;
    button.classList.toggle("is-selected", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderJobs();
  document.querySelector("#main-content").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setQuery(query) {
  state.query = query.trim();
  document.querySelector("#top-query").value = query;
  document.querySelector("#hero-query").value = query;
  renderJobs();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
}

function openDialog(id) {
  const dialog = document.getElementById(id);
  if (dialog && !dialog.open) dialog.showModal();
}

function notify(role, title, message) {
  const items = state.notifications[role] ?? [];
  const updated = [{ id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, title, message, at: new Date().toISOString(), read: false }, ...items].slice(0, 30);
  state.notifications = { ...state.notifications, [role]: updated };
  writeStorage(STORAGE_KEYS.notifications, state.notifications);
  updateNotificationBadge();
}

function updateNotificationBadge() {
  const items = state.notifications[state.mode] ?? [];
  const badge = document.querySelector(".notification-dot");
  badge.hidden = !items.some((item) => !item.read);
}

function renderNotifications() {
  const items = state.notifications[state.mode] ?? [];
  const list = document.querySelector("#notification-list");
  document.querySelector("#notifications-description").textContent = state.mode === "candidate"
    ? "Alertes de vos favoris et suivi de votre espace étudiant."
    : "Suivi de vos demandes de vérification et de vos propositions d'offres.";
  list.innerHTML = items.length
    ? items.map((item) => `<article class="notification-item${item.read ? "" : " is-unread"}"><span class="notification-item-mark" aria-hidden="true">${item.read ? "✓" : "•"}</span><div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.message)}</p><time datetime="${escapeHTML(item.at)}">${escapeHTML(formatDate(item.at, { dateStyle: "medium", timeStyle: "short" }))}</time></div></article>`).join("")
    : '<div class="notification-empty"><span aria-hidden="true">♧</span><p>Aucune notification pour le moment.</p></div>';
  state.notifications = { ...state.notifications, [state.mode]: items.map((item) => ({ ...item, read: true })) };
  writeStorage(STORAGE_KEYS.notifications, state.notifications);
  updateNotificationBadge();
}

function setMode(mode, { updateUrl = true } = {}) {
  state.mode = mode === "employer" ? "employer" : "candidate";
  document.body.dataset.mode = state.mode;
  document.querySelectorAll("[data-mode]").forEach((button) => {
    const active = button.dataset.mode === state.mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-space]").forEach((section) => {
    const visible = section.dataset.space === state.mode;
    section.hidden = !visible;
  });
  document.title = state.mode === "candidate"
    ? "Emploi Cam Étudiant — Opportunités au Cameroun"
    : "Emploi Cam Entreprise — Espace recruteur";
  const manifest = document.querySelector('link[rel="manifest"]');
  manifest.href = state.mode === "candidate" ? "./manifest.webmanifest" : "./entreprise.webmanifest";
  syncPortal({ updateUrl });
  if (state.mode === "candidate") {
    syncProfile();
    renderJobs();
  } else {
    syncCompanyProfile();
    renderCompanyDashboard();
  }
  updateNotificationBadge();
}

function syncPortal({ updateUrl = false } = {}) {
  const portal = document.querySelector("#portal-page");
  const app = document.querySelector(".app-shell");
  portal.hidden = !state.authPage;
  app.hidden = state.authPage;
  document.querySelectorAll(".mobile-nav").forEach((navigation) => {
    navigation.hidden = state.authPage;
  });
  document.querySelectorAll("[data-portal-benefits]").forEach((section) => {
    section.hidden = section.dataset.portalBenefits !== state.mode;
  });
  document.querySelectorAll("[data-portal-role-label]").forEach((label) => {
    label.textContent = state.mode === "candidate" ? "POUR LES ÉTUDIANTS" : "POUR LES EMPLOYEURS";
  });
  document.querySelector("[data-portal-title]").textContent = state.mode === "candidate"
    ? "Votre carrière commence ici."
    : "Recrutez en toute confiance.";
  document.querySelector(".portal-prompt").textContent = state.mode === "candidate"
    ? "Ouvrez une session pour accéder à votre espace étudiant."
    : "Ouvrez une session pour accéder à votre espace employeur.";
  document.querySelector("#candidate-login-form").hidden = state.mode !== "candidate";
  document.querySelector("#employer-login-form").hidden = state.mode !== "employer";
  document.querySelectorAll(".portal-extra-links").forEach((section) => {
    section.hidden = state.mode !== "employer";
  });
  document.title = state.authPage
    ? state.mode === "candidate" ? "Se connecter — Emploi Cam Étudiant" : "Se connecter — Emploi Cam Entreprise"
    : state.mode === "candidate" ? "Emploi Cam Étudiant — Opportunités au Cameroun" : "Emploi Cam Entreprise — Espace recruteur";
  if (updateUrl) {
    const url = new URL(location.href);
    if (state.mode === "employer") url.searchParams.set("espace", "entreprise");
    else url.searchParams.set("espace", "etudiant");
    if (state.authPage) url.searchParams.set("vue", "connexion");
    else url.searchParams.delete("vue");
    history.replaceState(null, "", url);
  }
}

function showPortal() {
  state.authPage = true;
  const url = new URL(location.href);
  if (state.mode === "employer") url.searchParams.set("espace", "entreprise");
  else url.searchParams.set("espace", "etudiant");
  url.searchParams.set("vue", "connexion");
  history.pushState(null, "", url);
  syncPortal();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showApplication() {
  state.authPage = false;
  const url = new URL(location.href);
  if (state.mode === "employer") url.searchParams.set("espace", "entreprise");
  else url.searchParams.set("espace", "etudiant");
  url.searchParams.delete("vue");
  history.pushState(null, "", url);
  syncPortal();
}

function setPortalFeedback(element, message) {
  element.textContent = message;
  element.hidden = false;
}

function handleCandidateLogin(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email;
  const password = form.elements.password;
  const passwordField = document.querySelector("#student-password-field");
  const feedback = document.querySelector("#student-login-feedback");
  if (!email.reportValidity()) return;
  if (!passwordField.hidden) {
    password.required = true;
    if (!password.reportValidity()) return;
    setPortalFeedback(feedback, "La connexion réelle n'est pas encore disponible : aucun compte n'a été vérifié et vos identifiants n'ont pas été envoyés.");
    password.value = "";
    return;
  }
  passwordField.hidden = false;
  password.required = true;
  document.querySelector("#student-login-submit").innerHTML = 'Ouvrir une session <span aria-hidden="true">→</span>';
  setPortalFeedback(feedback, "Adresse saisie. Dans cette maquette, aucune session ne peut être ouverte : aucun serveur d'authentification n'est configuré.");
  password.focus();
}

function handleEmployerLogin(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  setPortalFeedback(
    document.querySelector("#employer-login-feedback"),
    "La connexion réelle n'est pas encore disponible. Aucun compte n'a été vérifié et vos identifiants n'ont pas été envoyés.",
  );
  form.elements.password.value = "";
}

function handleRegistration(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const feedback = form.querySelector(".portal-feedback");
  setPortalFeedback(
    feedback,
    "L'inscription réelle nécessite un serveur sécurisé. Aucun compte n'a été créé et les renseignements saisis ne sont pas enregistrés.",
  );
  form.reset();
}

function openRegistration(role) {
  const employer = role === "employer";
  const activeDialog = document.querySelector("dialog[open]");
  if (activeDialog) activeDialog.close();
  openDialog(employer ? "register-employer-dialog" : "register-candidate-dialog");
}

function setEmployerView(view) {
  state.employerView = view === "offers" ? "offers" : "dashboard";
  document.querySelectorAll("[data-employer-view]").forEach((button) => {
    const active = button.dataset.employerView === state.employerView;
    button.classList.toggle("is-active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  document.querySelector(".employer-welcome").hidden = state.employerView === "offers";
  document.querySelector(".employer-verification-card").hidden = state.employerView === "offers";
  document.querySelector(".employer-stats").hidden = state.employerView === "offers";
  document.querySelector("#employer-offers-title").textContent = state.employerView === "offers" ? "Toutes mes propositions" : "Mes offres";
  document.querySelector("#main-content").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelector("[data-brand-home]").addEventListener("click", (event) => {
  event.preventDefault();
  if (state.mode === "employer") setEmployerView("dashboard");
  else setView("all");
});

function syncProfile() {
  const profile = state.profile;
  const displayName = profile.name?.trim() || "Mon profil étudiant";
  const initial = profile.name?.trim()?.charAt(0).toLocaleUpperCase("fr") || "A";
  document.querySelector("#header-name").textContent = displayName;
  document.querySelector("#header-avatar").textContent = initial;
  document.querySelector("#rail-avatar").textContent = initial;
  document.querySelector("#rail-name").textContent = profile.name?.trim() || "Votre profil étudiant";
  document.querySelector("#rail-role").textContent = profile.role?.trim() || "Ajoutez votre spécialité";
  const fields = [profile.name, profile.city, profile.role, profile.skills].filter((value) => value?.trim()).length;
  const progress = 25 + fields * 18;
  document.querySelector("#profile-progress-value").textContent = `${progress}%`;
  document.querySelector(".candidate-profile-progress .progress-track").setAttribute("aria-valuenow", String(progress));
  document.querySelector("#profile-progress-bar").style.width = `${progress}%`;
  const status = state.studentVerification.status;
  const statusText = status === "pending_review" ? "En attente de vérification par un agent." : status === "verified" ? "Statut vérifié." : "Compte non vérifié : les candidatures réelles resteront bloquées.";
  document.querySelector("#student-verification-status").textContent = statusText;
  document.querySelector(".verification-link").textContent = status === "pending_review" ? "Voir ma demande en attente ↗" : "Vérifier mon statut étudiant ↗";
  const formStatus = document.querySelector("#student-verification-form");
  if (formStatus.elements.school) formStatus.elements.school.value = state.studentVerification.school ?? "";
  if (formStatus.elements.phone) formStatus.elements.phone.value = state.studentVerification.phone ?? "";
}

function syncProfileForm() {
  const form = document.querySelector("#profile-form");
  Object.entries(state.profile).forEach(([key, value]) => {
    const field = form.elements.namedItem(key);
    if (field && typeof value === "string") field.value = value;
  });
}

function saveProfile(event) {
  event.preventDefault();
  const profile = Object.fromEntries(new FormData(event.currentTarget).entries());
  if (writeStorage(STORAGE_KEYS.profile, profile)) {
    state.profile = profile;
    syncProfile();
    event.currentTarget.closest("dialog").close();
    showToast("Votre profil étudiant est enregistré sur cet appareil.");
  }
}

function submitStudentVerification(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const certificate = data.get("certificate");
  const card = data.get("student-card");
  for (const file of [certificate, card]) {
    if (!(file instanceof File) || file.size === 0) {
      showToast("Sélectionnez les deux pièces demandées.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      showToast("Chaque pièce doit peser moins de 5 Mo.");
      return;
    }
  }
  const verification = {
    status: "pending_review",
    school: String(data.get("school")).trim(),
    phone: String(data.get("phone")).trim(),
    submittedAt: new Date().toISOString(),
  };
  if (!writeStorage(STORAGE_KEYS.studentVerification, verification)) return;
  state.studentVerification = verification;
  syncProfile();
  form.reset();
  form.closest("dialog").close();
  notify("candidate", "Vérification étudiante en attente", "Votre demande est enregistrée localement. Un service sécurisé devra contrôler vos pièces avant toute validation.");
  showToast("Demande reçue en démonstration ; aucune pièce n'a été envoyée.");
}

function syncCompanyProfile() {
  const profile = state.companyProfile;
  const displayName = profile.name?.trim() || "Mon entreprise";
  document.querySelector("#company-header-name").textContent = displayName;
  document.querySelector("#company-header-avatar").textContent = profile.name?.trim()?.charAt(0).toLocaleUpperCase("fr") || "E";
  const status = profile.status ?? "unverified";
  const statusText = status === "pending_review"
    ? "Votre demande est en attente d'un contrôle humain. La vérification n'est pas encore confirmée."
    : status === "verified" ? "Entreprise vérifiée par un agent habilité."
      : "Complétez le profil et soumettez les justificatifs au service de vérification.";
  document.querySelector("#company-verification-summary").textContent = status === "pending_review" ? "Demande en attente de vérification." : status === "verified" ? "Entreprise vérifiée." : "À compléter avant la publication.";
  document.querySelector("#company-verification-detail").textContent = statusText;
  const form = document.querySelector("#company-verification-form");
  for (const [key, value] of Object.entries(profile)) {
    const field = form.elements.namedItem(key);
    if (field && typeof value === "string") field.value = value;
  }
  document.querySelector("#company-verification-form-status").textContent = status === "pending_review" ? "Statut : demande envoyée, vérification en attente." : status === "verified" ? "Statut : entreprise vérifiée." : "";
}

function submitCompanyVerification(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const profile = Object.fromEntries(new FormData(form).entries());
  const website = safeHttpUrl(String(profile.website));
  if (!website) {
    form.elements.website.setCustomValidity("Utilisez l'adresse HTTP(S) officielle de votre entreprise.");
    form.elements.website.reportValidity();
    form.elements.website.setCustomValidity("");
    return;
  }
  profile.status = "pending_review";
  profile.submittedAt = new Date().toISOString();
  if (!writeStorage(STORAGE_KEYS.companyProfile, profile)) return;
  state.companyProfile = profile;
  syncCompanyProfile();
  renderCompanyDashboard();
  form.closest("dialog").close();
  notify("employer", "Vérification reçue", "Votre entreprise est en attente d'un examen humain. Aucune offre ne sera publiée avant approbation.");
  showToast("Demande enregistrée en attente de vérification. Rien n'est publié.");
}

function openCompanyVerification() {
  syncCompanyProfile();
  openDialog("company-verification-dialog");
}

function openPublishDialog() {
  if (state.companyProfile.status === "unverified") {
    openCompanyVerification();
    showToast("Complétez le profil de l'entreprise avant de proposer une offre.");
    return;
  }
  const form = document.querySelector("#publish-form");
  form.elements.company.value = state.companyProfile.name ?? "";
  form.elements.contactEmail.value = state.companyProfile.email ?? "";
  form.elements.contactPhone.value = state.companyProfile.supportPhone ?? state.companyProfile.phone ?? "";
  form.elements.expiresAt.min = new Date().toISOString().slice(0, 10);
  form.elements.expiresAt.value = new Date(Date.now() + 14 * day).toISOString().slice(0, 10);
  openDialog("publish-dialog");
}

function renderEmployerJob(job) {
  const positions = jobPositionState(job);
  const status = job.status === "approved"
    ? "Approuvée et publiée"
    : job.status === "pending_company_verification" ? "Entreprise à vérifier" : "Offre en attente d'approbation";
  const expired = new Date(job.expiresAt).getTime() <= Date.now();
  return `<article class="company-offer-row">
    <div class="company-offer-heading"><span class="company-logo logo-${escapeHTML(job.logo ?? "teal")}" aria-hidden="true">${escapeHTML(job.initials ?? "EC")}</span><div><h3>${escapeHTML(job.title)}</h3><p>${escapeHTML(job.company)} · ${escapeHTML(job.city)} · ajoutée le ${escapeHTML(formatDate(job.addedAt, { dateStyle: "medium" }))}</p></div></div>
    <div class="company-offer-status ${job.status === "approved" ? "is-approved" : ""}"><span></span>${status}</div>
    <div class="company-offer-expiry-block"><span class="company-offer-expiry${expired ? " is-expired" : ""}" data-countdown="${escapeHTML(job.expiresAt)}">${countdownText(job.expiresAt)}</span><time datetime="${escapeHTML(job.expiresAt)}">Échéance : ${escapeHTML(formatDate(job.expiresAt, { day: "2-digit", month: "short", year: "numeric" }))}</time></div>
    <div class="company-offer-positions"><strong>${positions.remaining} / ${positions.total}</strong><span>postes restants</span></div>
    ${job.status === "approved" ? `<button class="button button-outline company-hire-button" type="button" data-hire="${escapeHTML(job.id)}"${positions.remaining === 0 ? " disabled" : ""}>Déclarer une embauche</button>` : '<span class="company-pending-note">Le suivi des postes s’active après publication.</span>'}
  </article>`;
}

function renderCompanyDashboard() {
  if (!document.querySelector("#company-offer-list")) return;
  const jobs = companyJobs();
  document.querySelector("#company-offer-list").innerHTML = jobs.map(renderEmployerJob).join("");
  document.querySelector("#company-empty-state").hidden = jobs.length > 0;
  document.querySelector("#company-offer-count").textContent = String(jobs.length);
  document.querySelector("#company-total-count").textContent = String(jobs.length);
  document.querySelector("#company-pending-count").textContent = String(jobs.filter((job) => job.status !== "approved").length);
  document.querySelector("#company-filled-count").textContent = String(jobs.reduce((count, job) => count + jobPositionState(job).total - jobPositionState(job).remaining, 0));
  updateCountdowns();
}

function openOfferDetails(jobId) {
  const job = allCandidateJobs().find((item) => item.id === jobId);
  if (!job) return;
  state.activeJobId = jobId;
  const positions = jobPositionState(job);
  document.querySelector("#detail-company-logo").textContent = job.initials ?? "EC";
  document.querySelector("#detail-company").textContent = job.company;
  document.querySelector("#offer-detail-title").textContent = job.title;
  const verificationLabel = job.isDemo ? "Annonce fictive — identité non vérifiée" : job.verified ? "Entreprise vérifiée" : "En attente de vérification";
  document.querySelector("#detail-badges").innerHTML = `<span class="job-tag kind-${escapeHTML(job.kind)}">${escapeHTML(kindLabel(job.kind))}</span><span class="job-tag">${escapeHTML(job.category)}</span><span class="unverified-offer-badge">${escapeHTML(verificationLabel)}</span>`;
  const countdown = document.querySelector("#offer-detail-countdown");
  countdown.dataset.countdown = job.expiresAt;
  document.querySelector("#offer-detail-expiry-date").textContent = `Date limite : ${formatDate(job.expiresAt, { dateStyle: "full", timeStyle: "short" })}`;
  document.querySelector("#detail-meta").innerHTML = `
    <div><span>Lieu</span><strong>${escapeHTML(job.city)}</strong></div>
    <div><span>Contrat</span><strong>${escapeHTML(kindLabel(job.kind))} · ${escapeHTML(job.duration)}</strong></div>
    <div><span>Rémunération</span><strong>${escapeHTML(job.salary || "À préciser")}</strong></div>
    <div><span>Nombre de postes</span><strong>${positions.remaining} restant${positions.remaining > 1 ? "s" : ""} sur ${positions.total}</strong></div>
    <div><span>Date d'ajout</span><strong>${escapeHTML(formatDate(job.addedAt, { dateStyle: "full", timeStyle: "short" }))}</strong></div>`;
  document.querySelector("#detail-company-description").textContent = job.companyDescription || "Entreprise employeur.";
  document.querySelector("#detail-description").textContent = job.description || "Description à préciser.";
  document.querySelector("#detail-responsibilities").innerHTML = (job.responsibilities ?? []).map((item) => `<li>${escapeHTML(item)}</li>`).join("");
  document.querySelector("#detail-requirements").textContent = job.requirements || "Profil à préciser.";
  const contactSection = document.querySelector("#detail-contact-section");
  const contacts = document.querySelector("#detail-contacts");
  if (job.isDemo || (!job.contactEmail && !job.contactPhone && !job.supportPhone && !job.website && !job.address)) {
    contactSection.hidden = true;
    contacts.replaceChildren();
  } else {
    const website = safeHttpUrl(job.website);
    contactSection.hidden = false;
    contacts.innerHTML = `
      ${job.contactEmail ? `<p>Courriel : <a href="mailto:${escapeHTML(job.contactEmail)}">${escapeHTML(job.contactEmail)}</a></p>` : ""}
      ${job.contactPhone ? `<p>Téléphone : <a href="tel:${escapeHTML(job.contactPhone)}">${escapeHTML(job.contactPhone)}</a></p>` : ""}
      ${job.supportPhone ? `<p>Service client : <a href="tel:${escapeHTML(job.supportPhone)}">${escapeHTML(job.supportPhone)}</a></p>` : ""}
      ${website ? `<p>Site web : <a href="${escapeHTML(website)}" target="_blank" rel="noopener noreferrer">${escapeHTML(website)}</a></p>` : ""}
      ${job.address ? `<p>Adresse de l'entreprise : ${escapeHTML(job.address)}</p>` : ""}`;
  }
  const saved = state.saved.includes(job.id);
  const saveButton = document.querySelector("#detail-save-button");
  saveButton.classList.toggle("is-saved", saved);
  saveButton.setAttribute("aria-pressed", String(saved));
  saveButton.innerHTML = `<span aria-hidden="true">${saved ? "♥" : "♡"}</span> ${saved ? "Retirer des favoris" : "Ajouter aux favoris"}`;
  const applyButton = document.querySelector("#detail-apply-button");
  applyButton.disabled = positions.remaining <= 0 || new Date(job.expiresAt).getTime() <= Date.now();
  applyButton.textContent = positions.remaining <= 0 ? "Postes pourvus" : applyButton.disabled ? "Offre expirée" : "Postuler →";
  openDialog("offer-dialog");
}

function toggleSaved(jobId) {
  const saved = state.saved.includes(jobId);
  const updated = saved ? state.saved.filter((id) => id !== jobId) : [jobId, ...state.saved];
  if (!writeStorage(STORAGE_KEYS.saved, updated)) return;
  state.saved = updated;
  renderJobs();
  if (state.activeJobId === jobId && document.querySelector("#offer-dialog").open) {
    const button = document.querySelector("#detail-save-button");
    button.classList.toggle("is-saved", !saved);
    button.setAttribute("aria-pressed", String(!saved));
    button.innerHTML = `<span aria-hidden="true">${saved ? "♡" : "♥"}</span> ${saved ? "Ajouter aux favoris" : "Retirer des favoris"}`;
  }
  showToast(saved ? "Offre retirée de vos favoris." : "Offre ajoutée à vos favoris.");
}

function openApplication() {
  const job = allCandidateJobs().find((item) => item.id === state.activeJobId);
  if (!job) return;
  if (job.isDemo) showToast("Démonstration : cette offre n'est pas vérifiée et la candidature ne sera pas transmise.");
  document.querySelector("#apply-job-title").textContent = `${job.title} · ${job.company}`;
  document.querySelector("#offer-dialog").close();
  openDialog("apply-dialog");
}

function saveApplication(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const job = allCandidateJobs().find((item) => item.id === state.activeJobId);
  if (!job || new Date(job.expiresAt).getTime() <= Date.now() || jobPositionState(job).remaining <= 0) {
    form.closest("dialog").close();
    showToast("Cette offre est expirée ou tous les postes sont pourvus.");
    renderJobs();
    return;
  }
  const application = { id: job.id, date: new Date().toISOString() };
  const updated = [application, ...state.applied.filter((item) => item.id !== application.id)];
  if (!writeStorage(STORAGE_KEYS.applied, updated)) return;
  state.applied = updated;
  form.closest("dialog").close();
  form.reset();
  renderJobs();
  notify("candidate", "Candidature ajoutée au suivi", `Votre candidature de démonstration pour « ${job.title} » est enregistrée sur cet appareil ; elle n'a pas été transmise.`);
  notify("employer", "Nouvelle candidature de démonstration", `Une candidature locale a été enregistrée pour « ${job.title} ». Cette maquette ne transmet pas les candidatures.`);
  showToast("Candidature ajoutée au suivi local ; elle n'a pas été envoyée.");
}

function publishJob(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = Object.fromEntries(new FormData(form).entries());
  const expiresAt = new Date(`${values.expiresAt}T23:59:59`).toISOString();
  if (new Date(expiresAt).getTime() <= Date.now()) {
    form.elements.expiresAt.setCustomValidity("Choisissez une date ultérieure à aujourd'hui.");
    form.elements.expiresAt.reportValidity();
    form.elements.expiresAt.setCustomValidity("");
    return;
  }
  const positionsTotal = Number(values.positions);
  if (!Number.isInteger(positionsTotal) || positionsTotal < 1 || positionsTotal > 1000) {
    form.elements.positions.setCustomValidity("Saisissez un nombre de postes compris entre 1 et 1 000.");
    form.elements.positions.reportValidity();
    form.elements.positions.setCustomValidity("");
    return;
  }
  const company = state.companyProfile;
  const job = {
    id: `local-${crypto.randomUUID?.() ?? Date.now()}`,
    title: String(values.title).trim(),
    company: String(values.company).trim(),
    initials: String(values.company).trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toLocaleUpperCase("fr"),
    logo: "teal",
    city: String(values.city),
    kind: String(values.kind),
    category: String(values.category).trim(),
    tags: [],
    duration: values.kind === "emploi" ? "CDI" : "Durée à préciser",
    salary: String(values.salary).trim() || "À préciser",
    addedAt: new Date().toISOString(),
    expiresAt,
    positionsTotal,
    positionsRemaining: positionsTotal,
    description: String(values.description).trim(),
    requirements: String(values.requirements).trim(),
    responsibilities: [],
    companyDescription: `${company.name} · Référence RCCM : ${company.registration}`,
    contactEmail: String(values.contactEmail).trim(),
    contactPhone: String(values.contactPhone).trim(),
    supportPhone: company.supportPhone || company.phone || "",
    website: company.website || "",
    address: company.address || "",
    verified: company.status === "verified",
    isDemo: false,
    status: company.status === "verified" ? "pending_review" : "pending_company_verification",
  };
  const updated = [job, ...state.companyJobs];
  const positions = { ...state.positions, [job.id]: { total: positionsTotal, remaining: positionsTotal } };
  if (!writeStorage(STORAGE_KEYS.companyJobs, updated) || !writeStorage(STORAGE_KEYS.positions, positions)) return;
  state.companyJobs = updated;
  state.positions = positions;
  form.closest("dialog").close();
  form.reset();
  renderCompanyDashboard();
  setEmployerView("offers");
  notify("employer", "Offre soumise pour examen", `« ${job.title} » est enregistrée et attend l'approbation de l'équipe de vérification.`);
  showToast("Offre en attente de contrôle ; elle n'est pas visible des candidats.");
}

function confirmHiring(event) {
  event.preventDefault();
  const job = companyJobs().find((item) => item.id === state.hireJobId);
  if (!job) return;
  const current = jobPositionState(job);
  if (current.remaining <= 0) {
    showToast("Tous les postes de cette offre sont déjà pourvus.");
    event.currentTarget.closest("dialog").close();
    return;
  }
  const positions = { ...state.positions, [job.id]: { ...current, remaining: current.remaining - 1 } };
  if (!writeStorage(STORAGE_KEYS.positions, positions)) return;
  state.positions = positions;
  event.currentTarget.closest("dialog").close();
  renderCompanyDashboard();
  notify("employer", "Effectif actualisé", `Il reste ${current.remaining - 1} poste${current.remaining - 1 > 1 ? "s" : ""} pour « ${job.title} ».`);
  showToast("Nombre de places restantes mis à jour.");
}

function localPhoneIsValid(value) {
  return /^(?:(?:\+?237))?6\d{8}$/.test(String(value).replace(/[\s().-]/g, ""));
}

function createOfferFromHireButton(jobId) {
  const job = companyJobs().find((item) => item.id === jobId);
  if (!job) return;
  state.hireJobId = jobId;
  const positions = jobPositionState(job);
  document.querySelector("#hire-description").textContent = `« ${job.title} » : ${positions.remaining} poste${positions.remaining > 1 ? "s" : ""} restant${positions.remaining > 1 ? "s" : ""} sur ${positions.total}. Confirmez uniquement lorsqu'un recrutement est finalisé.`;
  openDialog("hire-dialog");
}

document.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

document.querySelectorAll("[data-action='show-portal']").forEach((button) => {
  button.addEventListener("click", showPortal);
});
document.querySelectorAll("[data-action='show-app']").forEach((button) => {
  button.addEventListener("click", showApplication);
});
document.querySelector("[data-portal-home]").addEventListener("click", (event) => {
  event.preventDefault();
  showApplication();
});
document.querySelector("#candidate-login-form").addEventListener("submit", handleCandidateLogin);
document.querySelector("#employer-login-form").addEventListener("submit", handleEmployerLogin);
document.querySelector("#register-candidate-form").addEventListener("submit", handleRegistration);
document.querySelector("#register-employer-form").addEventListener("submit", handleRegistration);
document.querySelectorAll("[data-action='register-candidate']").forEach((button) => {
  button.addEventListener("click", () => openRegistration("candidate"));
});
document.querySelectorAll("[data-action='register-employer']").forEach((button) => {
  button.addEventListener("click", () => openRegistration("employer"));
});
document.querySelector("[data-action='forgot-password']").addEventListener("click", () => {
  setPortalFeedback(document.querySelector("#employer-login-feedback"), "La réinitialisation de mot de passe n'est pas disponible dans cette maquette : aucun courriel ne sera envoyé.");
});
document.querySelector("[data-portal-home]").addEventListener("keydown", (event) => {
  if (event.key === "Escape") showApplication();
});

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.querySelectorAll("[data-employer-view]").forEach((button) => {
  button.addEventListener("click", () => setEmployerView(button.dataset.employerView));
});

document.querySelectorAll("[data-kind]").forEach((button) => {
  button.addEventListener("click", () => {
    state.kind = button.dataset.kind;
    document.querySelectorAll("[data-kind]").forEach((chip) => {
      const active = chip === button;
      chip.classList.toggle("is-selected", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    renderJobs();
  });
});

document.querySelector("#location-filter").addEventListener("change", (event) => {
  state.location = event.currentTarget.value;
  renderJobs();
});

document.querySelector("#top-search").addEventListener("submit", (event) => {
  event.preventDefault();
  setQuery(new FormData(event.currentTarget).get("query")?.toString() ?? "");
});

document.querySelector("#hero-search").addEventListener("submit", (event) => {
  event.preventDefault();
  setQuery(new FormData(event.currentTarget).get("query")?.toString() ?? "");
});

document.querySelectorAll("[data-search]").forEach((button) => {
  button.addEventListener("click", () => setQuery(button.dataset.search));
});

jobList.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    toggleSaved(saveButton.dataset.save);
    return;
  }
  const openButton = event.target.closest("[data-open-offer]");
  if (openButton) openOfferDetails(openButton.dataset.openOffer);
});

document.querySelector("#detail-save-button").addEventListener("click", () => {
  if (state.activeJobId) toggleSaved(state.activeJobId);
});
document.querySelector("#detail-apply-button").addEventListener("click", openApplication);
document.querySelector("#profile-form").addEventListener("submit", saveProfile);
document.querySelector("#student-verification-form").addEventListener("submit", submitStudentVerification);
document.querySelector("#company-verification-form").addEventListener("submit", submitCompanyVerification);
document.querySelector("#apply-form").addEventListener("submit", saveApplication);
document.querySelector("#publish-form").addEventListener("submit", publishJob);
document.querySelector("#hire-form").addEventListener("submit", confirmHiring);

document.querySelector("#company-offer-list").addEventListener("click", (event) => {
  const hireButton = event.target.closest("[data-hire]");
  if (hireButton && !hireButton.disabled) createOfferFromHireButton(hireButton.dataset.hire);
});

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "profile") {
    syncProfileForm();
    syncProfile();
    openDialog("profile-dialog");
  } else if (action === "company-profile") {
    syncCompanyProfile();
    openDialog("company-verification-dialog");
  } else if (action === "student-verification") {
    if (state.studentVerification.status === "pending_review") {
      showToast("Votre demande est en attente. Les pièces ne sont pas transmises dans cette maquette.");
    } else if (state.studentVerification.status === "verified") {
      showToast("Votre statut étudiant est déjà vérifié.");
    } else {
      document.querySelector("#profile-dialog").close();
      openDialog("student-verification-dialog");
    }
  } else if (action === "publish") {
    openPublishDialog();
  } else if (action === "notifications") {
    renderNotifications();
    openDialog("notifications-dialog");
  } else if (action === "reset-filters") {
    state.view = "all";
    state.kind = "all";
    state.location = "all";
    setQuery("");
    document.querySelector("#location-filter").value = "all";
    setView("all");
  }
});

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

document.querySelectorAll(".app-dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

window.addEventListener("popstate", () => {
  const params = new URLSearchParams(location.search);
  state.mode = params.get("espace") === "entreprise" ? "employer" : "candidate";
  state.authPage = params.get("vue") === "connexion";
  setMode(state.mode, { updateUrl: false });
  syncPortal();
});

document.querySelectorAll('input[type="tel"][name="phone"], input[type="tel"][name="supportPhone"]').forEach((field) => {
  field.addEventListener("input", () => {
    const isStudentMobile = field.form.id === "student-verification-form";
    const valid = isStudentMobile
      ? localPhoneIsValid(field.value)
      : /^(?:(?:\+?237))?[26]\d{8}$/.test(field.value.replace(/[\s().-]/g, ""));
    field.setCustomValidity(valid ? "" : isStudentMobile
      ? "Saisissez un numéro mobile camerounais valide (9 chiffres, préfixe +237 facultatif)."
      : "Saisissez un numéro camerounais valide (9 chiffres, préfixe +237 facultatif).");
  });
});

document.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.querySelector("dialog[open]")) {
      document.querySelector("dialog[open]").close();
    }
  });
});

window.addEventListener("storage", (event) => {
  const renderCandidate = event.key === STORAGE_KEYS.saved
    || event.key === STORAGE_KEYS.applied
    || event.key === STORAGE_KEYS.companyJobs;
  if (event.key === STORAGE_KEYS.saved) state.saved = readStorage(STORAGE_KEYS.saved, []);
  if (event.key === STORAGE_KEYS.applied) state.applied = readStorage(STORAGE_KEYS.applied, []);
  if (event.key === STORAGE_KEYS.companyProfile) state.companyProfile = readStorage(STORAGE_KEYS.companyProfile, { status: "unverified" });
  if (event.key === STORAGE_KEYS.companyJobs) state.companyJobs = readStorage(STORAGE_KEYS.companyJobs, []);
  if (event.key === STORAGE_KEYS.positions) state.positions = readStorage(STORAGE_KEYS.positions, {});
  if (event.key === STORAGE_KEYS.notifications) state.notifications = readStorage(STORAGE_KEYS.notifications, { candidate: [], employer: [] });
  if (renderCandidate) renderJobs();
  renderCompanyDashboard();
  syncCompanyProfile();
  updateNotificationBadge();
});

document.querySelector("#publish-form").elements.expiresAt.min = new Date().toISOString().slice(0, 10);

syncProfile();
syncCompanyProfile();
renderJobs();
renderCompanyDashboard();
setMode(state.mode, { updateUrl: false });
syncPortal();

countdownTimer = window.setInterval(updateCountdowns, 1000);
window.addEventListener("pagehide", () => window.clearInterval(countdownTimer));

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.error("Impossible d'activer le mode hors connexion.", error);
    });
  });
}
