import { NextResponse } from "next/server";

const repos = [
  "gorvensalaveria/salaveria-portfolio",
  "gorvensalaveria/manila_payroll",
  // add more repos here
];

export async function GET() {
  try {
    const results: { repo: string; commitCount: number }[] = [];

    for (const repo of repos) {
      // Step 1: get repo details (default branch)
      const repoRes = await fetch(`https://api.github.com/repos/${repo}`, {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      });

      if (!repoRes.ok) {
        results.push({ repo, commitCount: 0 });
        continue;
      }

      const repoData = await repoRes.json();
      const defaultBranch = repoData.default_branch || "main";

      // Step 2: fetch commits for that branch
      const commitsRes = await fetch(
        `https://api.github.com/repos/${repo}/commits?sha=${defaultBranch}&per_page=1`,
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
            Accept: "application/vnd.github+json",
          },
        }
      );

      if (!commitsRes.ok) {
        results.push({ repo, commitCount: 0 });
        continue;
      }

      // Step 3: parse headers to get total commits
      const link = commitsRes.headers.get("link");
      let commitCount = 0;

      if (link) {
        const match = link.match(/&page=(\d+)>; rel="last"/);
        commitCount = match ? parseInt(match[1], 10) : 1;
      } else {
        commitCount = 1; // only 1 commit exists
      }

      results.push({ repo, commitCount });
    }

    return NextResponse.json({ repos: results });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
