/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

describe("Home", () => {
  it("renders user's name", async () => {
    render(await Page());

    const userName1 = screen.getByText("hoge");
    const userName2 = screen.getByText("fuga");

    expect(userName1).toBeInTheDocument();
    expect(userName2).toBeInTheDocument();
  });
});
