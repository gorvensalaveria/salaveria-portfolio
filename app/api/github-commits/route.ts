export const runtime = "nodejs";

import { NextResponse } from "next/server";

const GITHUB_USERNAME = "gorvensalaveria";
const REPOS = ["salaveria-portfolio", "salaveria_portfolio"];

export async function GET() {
  try {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      return NextResponse.json(
        { error: "Missing GitHub token" },
        { status: 500 }
      );
    }

    let allCommits: any[] = [];

    for (const repo of REPOS) {
      const response = await fetch(
        `https://api.github.com/repos/${gorvensalaveria}/${repo}/commits?per_page=5`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      if (!response.ok) {
        console.error(
          `Failed to fetch commits for ${repo}: ${response.statusText}`
        );
        continue;
      }

      const commits = await response.json();

      const commitsWithRepo = commits.map((c: any) => ({
        repo,
        sha: c.sha,
        message: c.commit.message,
        date: c.commit.committer.date,
        url: c.html_url,
      }));
      allCommits = allCommits.concat(commitsWithRepo);
    }

    allCommits.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return NextResponse.json(allCommits);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
