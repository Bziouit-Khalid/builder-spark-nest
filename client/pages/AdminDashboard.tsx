import { useEffect, useState } from "react";

type Submission = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

export default function AdminDashboard() {
  const [loading, setLoading] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/submissions", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Unauthorized");
      const body = await res.json();
      setSubmissions(body.submissions || []);
    } catch (err) {
      console.error(err);
      setSubmissions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const del = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/submissions/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed");
      setSubmissions((s) => s.filter((x) => x.id !== id));
    } catch (err) {
      console.error(err);
      alert("Impossible de supprimer");
    }
  };

  return (
    <section className="container py-16 md:py-24">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Submissions</h1>
        <div>
          <button
            className="rounded-md bg-[hsl(var(--accent))] px-3 py-1 text-white"
            onClick={() => {
              localStorage.removeItem("admin_token");
              window.location.href = "/admin/login";
            }}
          >
            Sign out
          </button>
        </div>
      </div>

      <div className="mt-6">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="text-left text-sm text-muted-foreground">
                  <th className="px-3 py-2">Name</th>
                  <th className="px-3 py-2">Email</th>
                  <th className="px-3 py-2">Message</th>
                  <th className="px-3 py-2">Date</th>
                  <th className="px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s) => (
                  <tr key={s.id} className="border-t">
                    <td className="px-3 py-2 align-top">{s.name}</td>
                    <td className="px-3 py-2 align-top">{s.email}</td>
                    <td className="px-3 py-2 align-top max-w-xl truncate">
                      {s.message}
                    </td>
                    <td className="px-3 py-2 align-top">
                      {new Date(s.created_at).toLocaleString()}
                    </td>
                    <td className="px-3 py-2 align-top">
                      <button
                        className="rounded bg-destructive px-3 py-1 text-white"
                        onClick={() => del(s.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
