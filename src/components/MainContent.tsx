import HomePage from "./HomePage";
import AsteroidPage from "./AsteroidPage";
import { useState, useEffect } from "react";
import { useTypedSelector } from "../hooks/usetypedSelector";
import { myErrorHandler } from "./ErrorBoundary";
import Loading from "./Loading";
const MainContent = () => {
  const [homeIsOpen, setHomeIsOpen] = useState<boolean>(true);
  const [extraLoader, setLoading] = useState<boolean>(false);
  const { data, loading, error } = useTypedSelector(
    (state) => state.asteroidData
  );

  useEffect(() => {
    if (!loading && data.name !== "") {
      setHomeIsOpen(false);
      setLoading(false);
    }
  }, [data.name, loading]);

  const closeAsteroidPage = () => {
    setHomeIsOpen(!homeIsOpen);
  };

  if (error) {
    const err = new Error(error);
    myErrorHandler(err, { componentStack: err.message });
    throw err;
  }
  return (
    <div className="mainPage">
      <Loading isLoading={loading || extraLoader}>
        {homeIsOpen ? (
          <HomePage setLoading={setLoading}></HomePage>
        ) : (
          <AsteroidPage closeWindow={closeAsteroidPage}></AsteroidPage>
        )}
      </Loading>
    </div>
  );
};

export default MainContent;
