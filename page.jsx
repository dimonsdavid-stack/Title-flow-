const demoLink = "https://calendly.com/";
const pilotEmail = "mailto:hello@titleflow.ai?subject=TitleFlow%20Founding%20Pilot";

const features = [
  {
    title: "Packet Intake",
    body: "Centralize title, registration, ID, bill of sale, smog, lien release, and supporting files in one clean workflow.",
  },
  {
    title: "Missing Doc Checks",
    body: "Flag incomplete packets before they become delays. Give staff and customers a clear next-step checklist.",
  },
  {
    title: "Status Tracking",
    body: "Track every packet from received to reviewed, missing items, ready to submit, submitted, and completed.",
  },
  {
    title: "Dealer Updates",
    body: "Reduce manual follow-up with simple customer-facing packet status updates and internal notes.",
  },
  {
    title: "Review Queue",
    body: "Route exceptions to humans while keeping standard packet prep organized and fast.",
  },
  {
    title: "Workflow Reports",
    body: "See packet volume, bottlenecks, turnaround time, missing document trends, and team workload.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$299",
    sub: "/mo + usage",
    items: ["Small dealers", "Packet intake", "Status dashboard", "Email support"],
  },
  {
    name: "Growth",
    price: "$799",
    sub: "/mo + usage",
    items: ["Busy title shops", "Review queue", "Customer updates", "Workflow reporting"],
  },
  {
    name: "Pro",
    price: "$1,499",
    sub: "/mo + usage",
    items: ["High-volume teams", "Multi-user workflows", "Priority onboarding", "Advanced reporting"],
  },
];

export default function Home() {
  return (
    <main className="main">
      <nav className="nav">
        <div className="logo">Title<span>Flow</span></div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href={demoLink}>Book Demo</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <div className="badge">Founding Pilot Program Open</div>
          <h1>Modern title & registration workflows.</h1>
          <p className="lead">
            TitleFlow helps dealers, registration shops, fleets, and title processors
            organize packet intake, detect missing documents, track status, and reduce
            manual follow-up.
          </p>

          <div className="ctas">
            <a className="button primary" href={demoLink}>
              Book Pilot Demo
            </a>
            <a className="button secondary" href={pilotEmail}>
              Become a Pilot Partner
            </a>
          </div>

          <p className="microcopy">
            Launching first for California dealers and title/registration operators.
          </p>
        </div>

        <div className="card">
          <div className="packet">
            <div className="packet-row">
              <div>
                <strong>Title Transfer Packet</strong>
                <span>VIN, buyer/seller, title, bill of sale</span>
              </div>
              <span className="status">Reviewing</span>
            </div>
            <div className="packet-row">
              <div>
                <strong>Missing Items</strong>
                <span>Odometer disclosure, signature, smog status</span>
              </div>
              <span className="status">Flagged</span>
            </div>
            <div className="packet-row">
              <div>
                <strong>Dealer Update</strong>
                <span>Clear next-step checklist ready to send</span>
              </div>
              <span className="status">Ready</span>
            </div>
            <div className="packet-row">
              <div>
                <strong>Workflow Status</strong>
                <span>Received → Reviewed → Ready to submit</span>
              </div>
              <span className="status">Live</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <h2>Built for real DMV paperwork chaos.</h2>
        <p className="section-copy">
          TitleFlow is not a chatbot. It is a practical operating layer for teams
          that process title and registration packets every day.
        </p>

        <div className="grid">
          {features.map((feature) => (
            <div className="feature" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="section">
        <h2>Simple pilot pricing.</h2>
        <p className="section-copy">
          Start with workflow visibility and packet organization. Add deeper
          automation as volume grows.
        </p>

        <div className="pricing">
          {pricing.map((plan) => (
            <div className="price-card" key={plan.name}>
              <h3>{plan.name}</h3>
              <div className="price">
                {plan.price} <span>{plan.sub}</span>
              </div>
              <ul className="list">
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="button primary" href={demoLink}>
                Book Demo
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section final">
        <div className="badge">20-minute launch sprint ready</div>
        <h2>Ready to modernize title processing?</h2>
        <p className="section-copy" style={{ margin: "0 auto 28px" }}>
          We are opening a limited founding pilot for California operators who want
          cleaner packet workflows, fewer missing document delays, and better status
          visibility.
        </p>
        <a className="button primary" href={demoLink}>
          Book Founding Pilot Demo
        </a>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} TitleFlow. Modern title & registration workflows.
      </footer>
    </main>
  );
}
