import "@testing-library/jest-dom";

import { test, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";

import PreviewUrls from "./PreviewUrls.svelte";

test("shows proper heading when rendered", () => {
  render(PreviewUrls, { urls: [] });
  const heading = screen.getByText("Preview URLs");
  expect(heading).toBeInTheDocument();
});
