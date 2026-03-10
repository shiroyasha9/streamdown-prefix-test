"use client";

import { cjk } from "@streamdown/cjk";
import { code } from "@streamdown/code";
import { math } from "@streamdown/math";
import { mermaid } from "@streamdown/mermaid";
import { Streamdown } from "streamdown";

export const StreamdownRenderer = ({ children }: { children: string }) => {
  return (
    <Streamdown plugins={{ code, math, mermaid, cjk }} prefix="tw">
      {children}
    </Streamdown>
  );
};
