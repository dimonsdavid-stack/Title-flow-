
export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '900px'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '10px 18px',
          borderRadius: '999px',
          background: '#17203b',
          marginBottom: '20px',
          fontSize: '14px'
        }}>
          Founding Pilot Program Open
        </div>

        <h1 style={{
          fontSize: '64px',
          lineHeight: 1,
          marginBottom: '20px'
        }}>
          TitleFlow
        </h1>

        <h2 style={{
          fontSize: '28px',
          color: '#b7c3ff',
          fontWeight: 'normal',
          marginBottom: '30px'
        }}>
          Modern title & registration workflows for dealers and registration shops.
        </h2>

        <p style={{
          fontSize: '20px',
          lineHeight: 1.7,
          color: '#d2d8f0',
          marginBottom: '40px'
        }}>
          Upload paperwork, track packet status, reduce errors,
          and streamline DMV processing with intelligent workflow automation.
        </p>

        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a
            href="https://calendly.com/"
            style={{
              background: '#5d7cff',
              color: '#fff',
              padding: '16px 28px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            Book Demo
          </a>

          <a
            href="mailto:hello@titleflow.ai"
            style={{
              border: '1px solid #5d7cff',
              color: '#fff',
              padding: '16px 28px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            Become A Pilot Partner
          </a>
        </div>

        <div style={{
          marginTop: '80px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px'
        }}>
          {[
            'Packet Intake',
            'Missing Document Detection',
            'Workflow Tracking',
            'Dealer Status Updates',
            'OCR & Data Extraction',
            'Internal Review Queue'
          ].map((item) => (
            <div key={item} style={{
              background: '#111933',
              border: '1px solid #1e2a52',
              borderRadius: '18px',
              padding: '24px'
            }}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
