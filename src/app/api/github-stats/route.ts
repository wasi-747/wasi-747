import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 1. Fetch User Profile Stats (Repos, Followers)
    const userRes = await fetch("https://api.github.com/users/wasi-747", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
      next: { revalidate: 3600 },
    });

    let repos = 9;
    let followers = 3;

    if (userRes.ok) {
      const userData = await userRes.json();
      repos = userData.public_repos ?? 9;
      followers = userData.followers ?? 3;
    }

    // 2. Scrape Real-Time Contributions Data & Daily Array from GitHub
    let contributions = 207;
    let days: Array<{ date: string; level: number; countText: string }> = [];

    try {
      const contribRes = await fetch("https://github.com/users/wasi-747/contributions", {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        },
        next: { revalidate: 3600 },
      });

      if (contribRes.ok) {
        const html = await contribRes.text();

        // Match total contributions
        const totalMatch = html.match(/([0-9,]+)\s+contributions/i);
        if (totalMatch && totalMatch[1]) {
          contributions = parseInt(totalMatch[1].replace(/,/g, ""), 10) || 207;
        }

        // Match tooltips
        const tooltipRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/g;
        const tooltipsMap = new Map<string, string>();
        let tipMatch;
        while ((tipMatch = tooltipRegex.exec(html)) !== null) {
          tooltipsMap.set(tipMatch[1], tipMatch[2].trim());
        }

        // Match td tags
        const tdRegex = /<td[^>]*>/g;
        const tdTags = html.match(tdRegex) || [];

        for (const tag of tdTags) {
          const dateMatch = tag.match(/data-date="([^"]+)"/);
          const levelMatch = tag.match(/data-level="([^"]+)"/);
          const idMatch = tag.match(/id="([^"]+)"/);

          if (dateMatch && levelMatch) {
            const date = dateMatch[1];
            const level = parseInt(levelMatch[1], 10) || 0;
            const cellId = idMatch ? idMatch[1] : "";
            const countText = tooltipsMap.get(cellId) || `${level > 0 ? level * 2 : 'No'} contributions on ${date}`;

            days.push({
              date,
              level,
              countText,
            });
          }
        }

        // CRITICAL: Sort chronologically by date so grid-flow-col displays week-by-week correctly!
        days.sort((a, b) => a.date.localeCompare(b.date));
      }
    } catch (err) {
      console.error("Error scraping GitHub contributions data:", err);
    }

    return NextResponse.json({
      repos,
      followers,
      contributions,
      days,
    });
  } catch (error) {
    console.error("Error in github-stats API route:", error);
    return NextResponse.json({
      repos: 9,
      followers: 3,
      contributions: 207,
      days: [],
    });
  }
}
