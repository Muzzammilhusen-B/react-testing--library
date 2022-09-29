import {useState} from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.tagrget.value);
  };

  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Search for {search ? search : "..."}</p>
    </div>
  );
}
function Search({value, onChange, children}) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input type="text" id="search" onChange={onChange} value={value} />
    </div>
  );
}
export default App;
