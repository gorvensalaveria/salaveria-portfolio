export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/users/gorvensalaveria/repos?sort=updated&per_page=5",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repos" },
        { status: res.status }
      );
    }
    const repos = await res.json();

    const data = repos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language,
      updated_at: repo.updated_at,
    }));
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
