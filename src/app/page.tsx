import { readFileSync } from "node:fs";
import path from "node:path";
import { StreamdownRenderer } from "./StreamdownRenderer";

const markdown = readFileSync(
  path.join(process.cwd(), "src/app/text.md"),
  "utf-8",
);

export default function Home() {
  return <StreamdownRenderer>{markdown}</StreamdownRenderer>;
}
