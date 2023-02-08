import { useState } from "react";
import "./HomePage.css";
import { useActions } from "../hooks/useActions";
import { randomAsteroidApiFunc } from "../utils/api";

const HomePage = (props: any) => {
  const [inputValue, setInputValue] = useState<number | null>();
  const { searchAsteroid } = useActions();
  const handleSearchById = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (typeof inputValue === "number") searchAsteroid(inputValue);
  };
  const handleSearchRandom = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.setLoading(true);
    randomAsteroidApiFunc();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  return (
    <>
      <header>Query Asteroids App</header>
      <section className="inputSection">
        <form className="formEl">
          <div className="searchByIdSection">
            <input
              placeholder="Enter Asteroid ID"
              className="inputEl"
              type="number"
              onChange={handleChange}
              value={inputValue ? Number(inputValue) : ""}
            ></input>
            <button
              disabled={!Number(inputValue)}
              onClick={handleSearchById}
              className="btn searchByIdBtn"
            >
              Search By ID
            </button>
          </div>
          <div>
            <button
              onClick={handleSearchRandom}
              className="btn searchRandomBtn"
            >
              Find a Random One!
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default HomePage;
