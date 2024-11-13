import { render, screen, cleanup } from "@testing-library/react";
import Button from "../index";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("버튼 렌더링 테스트하기!", () => {
    render(<Button text="Click Me!" />);
    expect(screen.getByText("Click Me!")).toBeInTheDocument();
  });
});
