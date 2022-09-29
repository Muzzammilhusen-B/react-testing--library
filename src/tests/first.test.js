import React from "react";
import First from "./first";
import {render, screen} from "@testing-library/react";

describe("First test going to run", () => {
  it("Let's start test", () => {
    render(<First />);

    screen.debug();
  });
});
