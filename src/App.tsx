import React from "react";
import MainContent from "./components/MainContent";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { ErrorBoundary } from "react-error-boundary";
import { Error, myErrorHandler } from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Error} onError={myErrorHandler}>
        <Provider store={store}>
          <MainContent></MainContent>
        </Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
