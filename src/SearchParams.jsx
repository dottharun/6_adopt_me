import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  // the 'useState' gives it a default value but it only for the first time after that it gets ignored every time
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");

  // ABOVE destructuring can be written explicitly as
  // const locationHook = useState("");
  // const location = locationHook[0];
  // const setLocation = locationHook[1];

  // returning jsx
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
