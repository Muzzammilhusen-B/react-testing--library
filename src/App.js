import {useEffect, useState} from "react";
import "./App.css";

function getUser() {
  return Promise.resolve({id: 1, name: "Robin"});
}

function App() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    loadUser();
  });

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : null}
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
