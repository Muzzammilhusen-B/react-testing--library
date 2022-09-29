/* eslint-disable testing-library/no-debugging-utils */
import {fireEvent, render, screen} from "@testing-library/react";
import App from "./App";

//render component test
// test("renders app component", () => {
//   render(<App />);
//   expect(screen.getByText("Search:")).toBeInTheDocument();

//   // screen.debug();
// });
// //search types
// test("renders app component for search types", () => {
//   render(<App />);
//   expect(screen.getByRole("textbox")).toBeInTheDocument();

//   // screen.debug();
// });

// //search variants
// describe("App", () => {
//   test("renders App componen for seach variants", () => {
//     render(<App />);

//     expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
//   });
// });
// //test user by findby method
// describe("App for user find", () => {
//   test("renders App componen for seach user", async () => {
//     render(<App />);

//     expect(screen.queryByText(/Signed in as/)).toBeNull();
//     expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
//     screen.debug();
//   });
// });
describe("app for change textbox value", () => {
  it("render app component", async () => {
    render(<App />);
    await screen.findByText(/Signed in as/);
    screen.debug();
    fireEvent.change(screen.getByRole("textbox"), {
      target: {value: "Javascript"},
    });
    screen.debug();
  });
});
