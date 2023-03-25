import { expect, test } from "vitest";
import { render, screen } from "@testing-library/svelte";

import PreviewUrls from "../lib/PreviewUrls.svelte";

test("shows proper heading when rendered", () => {
  render(PreviewUrls, { urls: [] });
  const heading = screen.getByText("Preview URLs");
  expect(heading).toBeInTheDocument();
});
