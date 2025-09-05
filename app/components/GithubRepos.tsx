"use client";

import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
  updated_at: string;
}

export default function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return (
    <section id="github" className="py-20 px-6 bg-gray-50">
      <div className="mx-auto max-w-4x1">
        <h2 className="text-3xl font-bold text-center">Github Projects</h2>

        {loading ? (
          <p className="text-center mt-6">Loading...</p>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border bg-white p-5 shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold">{repo.name}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {repo.description || "No description"}
                </p>
                <div className="mt-3 flex gap-4 text-sm text-gray-500">
                  <span>⭐ {repo.stars}</span>
                  {repo.language && <span>{repo.language}</span>}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
