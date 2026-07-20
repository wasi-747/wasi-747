import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://ghchart.rshah.org/ff8c32/wasi-747", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch upstream chart: ${res.status}`);
    }

    const svgText = await res.text();

    return new NextResponse(svgText, {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Error in github-chart API route:", error);
    return new NextResponse(
      `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="100" viewBox="0 0 700 100"><text x="50%" y="50%" fill="#ff8c32" text-anchor="middle" font-family="sans-serif" font-size="13">@wasi-747 GitHub Contributions (Click below to view full profile)</text></svg>`,
      {
        status: 200,
        headers: { "Content-Type": "image/svg+xml" },
      }
    );
  }
}
