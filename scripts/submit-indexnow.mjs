/**
 * IndexNow URL Submission Script
 *
 * Submits all site URLs to IndexNow-compatible search engines (Bing, Yandex, Naver, Seznam).
 * These engines also power AI assistants like Copilot, ChatGPT search, and others.
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs              # Submit all pages
 *   node scripts/submit-indexnow.mjs /contact      # Submit specific URL(s)
 */

const SITE_HOST = "lcr.aero";
const SITE_URL = "https://lcr.aero";
const INDEXNOW_KEY = "5ab18de16bd64f1e93a4ddf4dce1d601";

const ALL_PAGES = [
  "/",
  "/solutions",
  "/solutions/certification",
  "/solutions/expansion",
  "/solutions/safety-sms",
  "/solutions/publications",
  "/solutions/ai-enhanced",
  "/solutions/technology",
  "/solutions/compliance-auditing",
  "/solutions/training",
  "/industries",
  "/industries/commercial",
  "/industries/cargo-charter",
  "/industries/mro",
  "/industries/agricultural",
  "/about",
  "/about/team",
  "/about/case-studies",
  "/contact",
  "/knowledge",
];

async function submitToIndexNow(urls) {
  const urlList = urls.map((path) =>
    path.startsWith("http") ? path : `${SITE_URL}${path}`
  );

  const body = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  const engines = [
    { name: "IndexNow (Bing + Yandex + others)", url: "https://api.indexnow.org/indexnow" },
  ];

  for (const engine of engines) {
    try {
      const response = await fetch(engine.url, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(body),
      });

      const status = response.status;
      const statusMessages = {
        200: "OK — URLs submitted successfully",
        202: "Accepted — URLs received, will be processed",
        400: "Bad Request — invalid format",
        403: "Forbidden — key not valid for this host",
        422: "Unprocessable — URLs don't belong to host",
        429: "Too Many Requests — rate limited, try later",
      };

      const message = statusMessages[status] || `HTTP ${status}`;
      const icon = status >= 200 && status < 300 ? "+" : "x";
      console.log(`  [${icon}] ${engine.name}: ${message}`);
    } catch (error) {
      console.log(`  [x] ${engine.name}: ${error.message}`);
    }
  }
}

async function pingSitemap() {
  // Both Google and Bing have deprecated sitemap ping endpoints in favor of
  // Search Console / IndexNow respectively. IndexNow submission above handles Bing.
  // This function is kept as a hook for future ping endpoints.
  console.log(`  Sitemap ping endpoints deprecated — IndexNow handles Bing/Yandex directly.`);
}

async function main() {
  const args = process.argv.slice(2);
  const urls = args.length > 0 ? args : ALL_PAGES;

  console.log(`\n  LCR Aero — Search Engine Submission\n`);
  console.log(`  Submitting ${urls.length} URL(s) to IndexNow...\n`);

  await submitToIndexNow(urls);

  console.log(`\n  Pinging sitemaps...\n`);
  await pingSitemap();

  console.log(`\n  Done. URLs submitted to Bing, Yandex, and AI-powered search engines.`);
  console.log(`\n  For Google: go to Search Console > Sitemaps > resubmit sitemap.xml`);
  console.log(`  For Google: use URL Inspection > Request Indexing for priority pages\n`);
}

main();
