import HomePage from "./HomePage";
import AsteroidPage from "./AsteroidPage";
import { useState, useEffect } from "react";
import { useTypedSelector } from "../hooks/usetypedSelector";
import { myErrorHandler } from "./ErrorBoundary";
import Loading from "./Loading";
import { useErrorHandler } from "react-error-boundary";

const MainContent = () => {
  const [homeIsOpen, setHomeIsOpen] = useState<boolean>(true);
  const [extraLoader, setLoading] = useState<boolean>(false);
  const handleError = useErrorHandler();
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
    handleError(err);
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
