import { expect, test } from "vitest";
import { render, screen } from "@testing-library/svelte";

import PreviewUrl from "../lib/Previewurl.svelte";

test("shows proper heading when rendered", () => {
  render(PreviewUrl, { url: "https://productsway.com" });
  const heading = screen.getByRole("contentinfo");
  expect(heading).toBeInTheDocument();
});

test("load data if that's shortened url", () => {
  render(PreviewUrl, {
    url: "https://s.productsway.com/kUDbc9Gg",
    shortened: "yes",
  });
  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
});
