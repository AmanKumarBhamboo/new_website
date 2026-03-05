"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/admin/leads");
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads);
      } else {
        router.push("/admin/login");
      }
    } catch (err) {
      router.push("/admin/login");
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [router]);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, category, description }),
      });
      if (res.ok) {
        setMsg("Post created successfully!");
        setTitle("");
        setCategory("");
        setDescription("");
      } else {
        setMsg("Failed to create post");
      }
    } catch (err) {
      setMsg("An error occurred");
    }
  };

  return (
    <div style={{ padding: "4rem 6%" }}>
      <h1 className="section-title">Admin Dashboard</h1>
      <div className="accent-bar"></div>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginTop: "2rem" }}>
        <div>
          <h2 style={{ marginBottom: "1rem" }}>Create New Blog Post</h2>
          <form onSubmit={handleCreatePost} style={{ background: "var(--cream)", padding: "2rem", borderRadius: "10px" }}>
            <div className="form-group">
              <label>Title</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>
            <button type="submit" className="btn-primary">Create Post</button>
            {msg && <p style={{ marginTop: "1rem", fontWeight: 600 }}>{msg}</p>}
          </form>
        </div>

        <div>
          <h2 style={{ marginBottom: "1rem" }}>Recent Leads</h2>
          <div style={{ maxHeight: "500px", overflowY: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "var(--cream)", textAlign: "left" }}>
                  <th style={{ padding: "1rem", border: "1px solid var(--border)" }}>Name</th>
                  <th style={{ padding: "1rem", border: "1px solid var(--border)" }}>Email</th>
                  <th style={{ padding: "1rem", border: "1px solid var(--border)" }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 ? (
                  <tr><td colSpan={3} style={{ padding: "2rem", textAlign: "center" }}>No leads found</td></tr>
                ) : (
                  leads.map((lead: any) => (
                    <tr key={lead._id}>
                      <td style={{ padding: "1rem", border: "1px solid var(--border)" }}>{lead.name}</td>
                      <td style={{ padding: "1rem", border: "1px solid var(--border)" }}>{lead.email}</td>
                      <td style={{ padding: "1rem", border: "1px solid var(--border)" }}>{new Date(lead.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
