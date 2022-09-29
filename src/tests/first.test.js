import React from "react";
import First from "./First";
import {render, screen} from "@testing-library/react";

describe("First test going to run", () => {
  it("Let's start test", () => {
    // screen.debug();

    render(<First />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});
