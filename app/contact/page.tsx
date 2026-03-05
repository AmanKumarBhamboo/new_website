"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="page-contact">
      <div className="contact-hero">
        <span className="section-label">Get in Touch</span>
        <h1 className="section-title">Let's Start a Conversation</h1>
        <div className="accent-bar center"></div>
      </div>

      <div className="contact-main">
        <div className="contact-grid">
          <div className="contact-form-col">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Work Email</label>
                <input
                  type="email"
                  placeholder="rahul@company.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="e.g. Org structure design"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  placeholder="Tell us a little about your organization's talent needs..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send Message →"}
              </button>

              {status === "success" && (
                <p style={{ color: "var(--forest)", marginTop: "1rem", fontWeight: 500 }}>
                  Thank you! Your message has been sent. We'll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p style={{ color: "red", marginTop: "1rem", fontWeight: 500 }}>
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </div>

          <div className="contact-info-col">
            <div className="c-highlight">
              <span className="ci-lbl">Our Office</span>
              <div className="ci-val">Mumbai, India</div>
              <div className="ci-sub">Available for global advisory</div>
              <hr className="c-divider" />
              <span className="ci-lbl">Direct Email</span>
              <div className="ci-val">vaishnavi@valuetalent.in</div>
              <hr className="c-divider" />
              <span className="ci-lbl">LinkedIn</span>
              <div className="ci-val">Vaishnavi Chella</div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "2rem", lineHeight: 1.6 }}>
              We'll aim to respond to your inquiry within 24-48 business hours. Looking forward to connecting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
