import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

// The preview card shown when a page is shared on LinkedIn, Slack, X, WhatsApp…
// Every page points to it via pageMetadata (src/config/seo.ts).
// Colours match globals.css (navy-900, gold-400, cream-200).

export const alt = `${siteConfig.name}: ${siteConfig.description}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"), "base64");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#070d19",
        color: "#f7f4ec",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
        <img
          src={`data:image/png;base64,${logo}`}
          width={112}
          height={112}
          alt=""
        />
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: "0.12em" }}>
          AURILEARN
        </div>
      </div>
      <div
        style={{
          marginTop: "48px",
          fontSize: 44,
          lineHeight: 1.3,
          maxWidth: "960px",
        }}
      >
        {siteConfig.description}
      </div>
      <div
        style={{
          marginTop: "40px",
          fontSize: 30,
          color: "#e2be6a",
          letterSpacing: "0.08em",
        }}
      >
        aurilearn.ai
      </div>
    </div>,
    size,
  );
}
