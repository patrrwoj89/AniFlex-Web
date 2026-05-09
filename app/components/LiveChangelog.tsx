import ChangelogUI from "./ChangelogUI";

type GitHubRelease = {
  tag_name: string;
  published_at: string;
  body: string;
  html_url: string;
};

// WAŻNE: zmień na nazwę swojego repo Flutter (nie tego landing page)
const GITHUB_OWNER = "patrrwoj89";
const GITHUB_REPO = "AniFlex";

async function getLatestRelease(): Promise<GitHubRelease | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`,
      { next: { revalidate: 600 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function LiveChangelog() {
  const release = await getLatestRelease();
  if (!release) return null;

  const date = new Date(release.published_at).toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return <ChangelogUI release={release} date={date} />;
}
