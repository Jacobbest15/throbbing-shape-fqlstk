import React from "react";

// Button Component with more polished styles
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`bg-black text-white text-lg px-6 py-3 rounded-full hover:bg-gray-900 transition ease-in-out duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default function App() {
  const roles = [
    "Content Creator",
    "Small Business Owner",
    "Personal Brand",
    "Social Media Manager",
  ];

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
        background: "#fff",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          padding: "1.5rem 2rem",
          backgroundColor: "#111",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "600" }}>
          Social Growth Academy
        </h1>
        <div>
          <a
            href="#home"
            style={{
              color: "#fff",
              marginLeft: "1.5rem",
              textDecoration: "none",
            }}
          >
            Home
          </a>
          <a
            href="#courses"
            style={{
              color: "#fff",
              marginLeft: "1.5rem",
              textDecoration: "none",
            }}
          >
            Courses
          </a>
          <a
            href="#about"
            style={{
              color: "#fff",
              marginLeft: "1.5rem",
              textDecoration: "none",
            }}
          >
            About
          </a>
          <a
            href="#contact"
            style={{
              color: "#fff",
              marginLeft: "1.5rem",
              textDecoration: "none",
            }}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          padding: "5rem 2rem",
          textAlign: "center",
          backgroundColor: "#f8f8f8",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
          }}
        >
          Grow Your Social Media. The Smart Way.
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "700px",
            margin: "0 auto 2.5rem",
          }}
        >
          Step-by-step strategies tailored for creators, brands, and businesses.
        </p>
        <div
          style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}
        >
          <Button>Start Learning</Button>
          <Button className="bg-white text-black border-2 border-gray-500 hover:bg-gray-100">
            See Courses
          </Button>
        </div>
      </section>

      {/* Audience Selector */}
      <section style={{ padding: "4rem 2rem", backgroundColor: "#fff" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          Who Are You?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {roles.map((role) => (
            <div
              key={role}
              style={{
                padding: "2rem",
                backgroundColor: "#fff",
                borderRadius: "1rem",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <p
                style={{ fontSize: "1.2rem", fontWeight: "500", color: "#444" }}
              >
                {role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Course Section */}
      <section
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#f8f8f8",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          Free Mini-Course
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
          }}
        >
          Learn the core of what makes accounts grow — even if you're just
          getting started.
        </p>
        <Button>Start the Free Course</Button>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "2rem 2rem",
          backgroundColor: "#111",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <p>© 2025 Social Growth Academy. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
