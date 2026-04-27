import Link from 'next/link'

export default function NotFound() {
  const COLORS = {
    bg: "#070b09",
    accent: "#00e87a",
    textPrimary: "#e8f0ea",
    textSecondary: "#7a9982",
    border: "rgba(255,255,255,0.06)",
  };

  return (
    <div style={{ 
      background: COLORS.bg, 
      color: COLORS.textPrimary, 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: 600 }}>
        <h1 style={{ 
          fontSize: "120px", 
          fontWeight: 700, 
          color: COLORS.accent,
          margin: 0,
          lineHeight: 1
        }}>404</h1>
        
        <h2 style={{ 
          fontSize: "32px", 
          fontWeight: 600,
          marginTop: 16,
          marginBottom: 8,
          color: COLORS.textPrimary
        }}>Page Not Found</h2>
        
        <p style={{ 
          color: COLORS.textSecondary,
          fontSize: "16px",
          lineHeight: 1.6,
          marginBottom: 32
        }}>
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <Link href="/" style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          background: COLORS.accent,
          color: COLORS.bg,
          padding: "12px 28px",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 600,
          transition: "opacity 0.2s",
          fontSize: "15px",
          border: "none",
          cursor: "pointer"
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
        onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
