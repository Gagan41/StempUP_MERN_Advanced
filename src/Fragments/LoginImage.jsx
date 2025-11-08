import React, { useState } from "react";
import { createPortal } from "react-dom";

function LoginImage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalFading, setModalFading] = useState(false);

  const SHOW_MODAL_MS = 1400;
  const FADE_DURATION_MS = 400;

  const fetchImages = async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("https://picsum.photos/v2/list?page=2&limit=20");
      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.status}`);
      }
      const data = await res.json();
      setImages(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password) {
      setError(new Error("Please enter both email and password"));
      return;
    }

    setSubmitted(true);

    setModalVisible(true);
    setModalFading(false);

    setTimeout(() => {
      setModalFading(true);

      setTimeout(() => {
        setModalVisible(false);
        fetchImages();
      }, FADE_DURATION_MS);
    }, SHOW_MODAL_MS);
  };

  return (
    <>
      <div style={styles.container}>
        <form
          style={styles.form}
          onSubmit={handleLogin}
          aria-labelledby="login-heading"
        >
          <h2 id="login-heading" style={{ textAlign: "center", marginBottom: 8 }}>
            Login Portal
          </h2>

          <label htmlFor="email" style={styles.label}>
            Email :
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Enter your email"
            style={styles.input}
            required
            autoComplete="username"
          />

          <label htmlFor="pass" style={styles.label}>
            Password :
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="pass"
            placeholder="Enter your password"
            style={styles.input}
            required
            autoComplete="current-password"
          />

          <button
            type="submit"
            style={{ ...styles.button, opacity: loading ? 0.9 : 1 }}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>

          {error && (
            <div role="alert" style={styles.error}>
              <strong>Error:</strong> {error.message || String(error)}
            </div>
          )}
        </form>

        <div style={styles.galleryWrapper}>
          <h1 style={{ margin: "24px 0 12px 0", color: "white" }}>Photo Gallery</h1>

          {!submitted && (
            <p style={{ color: "#666", marginTop: 0 }}>Submit the form to load photos.</p>
          )}

          {loading && submitted && <p>Fetching images…</p>}

          {/* Defensive wrapper to avoid parent's flex/nowrap interfering */}
          <div style={styles.galleryInner}>
            {!loading && images.length > 0 && (
              <div style={styles.grid}>
                {images.map((img) => (
                  <div key={String(img.id)} style={styles.card}>
                    <img
                      src={`${img.download_url}`}
                      alt={`Photo by ${img.author}`}
                      style={styles.img}
                    />
                    <div style={styles.cardFooter}>
                      <span style={styles.author}>{img.author}</span>
                      <a
                        href={img.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                      >
                        View
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!loading && submitted && images.length === 0 && !error && <p>No images to show.</p>}
          </div>
        </div>
      </div>

      {modalVisible &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              opacity: modalFading ? 0 : 1,
              transition: `opacity ${FADE_DURATION_MS}ms ease`,
              pointerEvents: "none",
            }}
            aria-hidden={!modalVisible}
          >
            <div
              style={{
                background: "lightblue",
                padding: "20px",
                margin: "auto",
                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                borderRadius: "10px",
                textAlign: "center",
                pointerEvents: "auto",
                minWidth: 260,
              }}
              role="status"
              aria-live="polite"
            >
              <h2 style={{ color: "black", margin: 0 }}>Login Successful!</h2>
            </div>
          </div>,
          document.getElementById("portal-root")
        )}
    </>
  );
}

const styles = {
  container: {
    maxWidth: 1100,
    margin: "40px auto",
    padding: "0 16px",
    fontFamily: "Inter, Roboto, system-ui, -apple-system, 'Segoe UI', sans-serif",
    color: "#111",
  },
  form: {
    width: "100%",
    maxWidth: 420,
    margin: "0 auto",
    padding: 20,
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    boxShadow: "0 6px 18px rgba(18,24,40,0.06)",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    background: "#fff",
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginTop: 6,
    textAlign: "left",
  },
  input: {
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #d0d7de",
    outline: "none",
    fontSize: 14,
  },
  button: {
    marginTop: 12,
    background: "#0585ee",
    color: "white",
    border: "none",
    padding: "10px 12px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 15,
  },
  error: {
    marginTop: 8,
    color: "#9b1c1c",
    background: "#fff1f0",
    padding: "8px 10px",
    borderRadius: 6,
    fontSize: 13,
  },
  galleryWrapper: {
    marginTop: 28,
    width: "100%",
    display: "block",
  },

  // Inner wrapper to protect the grid from parent CSS like flex/nowrap or white-space
  galleryInner: {
    width: "100%",
    boxSizing: "border-box",
    whiteSpace: "normal", // defensive
  },

  // Responsive grid
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: 16,
    width: "100%",
    marginTop: 16,
    justifyItems: "stretch",
    alignContent: "start",
    gridAutoRows: "auto",
    boxSizing: "border-box",
  },

  card: {
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: "0 6px 14px rgba(16,24,40,0.06)",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    transition: "transform 0.18s ease, box-shadow 0.18s ease",
    width: "100%", // ensure card stretches to grid column
    minWidth: 0, // prevents overflow in flex contexts
  },
  img: {
    width: "100%",
    height: 160,
    objectFit: "cover",
    display: "block",
    transition: "transform 0.28s ease",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 12px",
    borderTop: "1px solid #f0f0f0",
  },
  author: {
    fontSize: 13,
    color: "#333",
  },
  link: {
    fontSize: 13,
    textDecoration: "none",
    color: "#0570f3",
    fontWeight: 600,
  },
};

export default LoginImage;
