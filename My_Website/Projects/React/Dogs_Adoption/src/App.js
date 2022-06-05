import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Detail";
import { StrictMode, useState } from "react";
import Biklak from "./Biklak";
import ThemeContext from "./ThemeContext";
// Twworzenie komponentu App --> JSX
const App = () => {
  const theme = useState("#ff4e60");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/"> Adopt Me! </Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/Biklak" element={<Biklak />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
// Twworzenie komponentu App --> BEZ JSX
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Sonia",
//       animal: "Dog",
//       breed: "Puddel",
//     }),
//     React.createElement(Pet, {
//       name: "Pancho",
//       animal: "Horse",
//       breed: "Mix",
//     }),
//     React.createElement(Pet, {
//       name: "Leon",
//       animal: "Dog",
//       breed: "Beagle",
//     }),
//   ]);
// };
