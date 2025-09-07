"use client";
import { useEffect, useState } from "react";

type RepoCommit = {
  repo: string;
  commitCount: number;
};

export default function GithubRepos() {
  const [repos, setRepos] = useState<RepoCommit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCommits() {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();
        setRepos(data.repos);
      } catch (error) {
        console.error("Error fetching commits:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCommits();
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">GitHub Commits</h2>
      {loading ? (
        <p>Loading commits...</p>
      ) : (
        <ul className="space-y-2">
          {repos.map((repo) => (
            <li key={repo.repo} className="flex justify-between">
              <span>{repo.repo}</span>
              <span>{repo.commitCount} commits</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
