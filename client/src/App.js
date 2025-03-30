import React, { Fragment, useReducer } from "react";
import Routes from "./components";
import { LayoutContext, layoutState, layoutReducer } from "./components/shop";
import "./components/shop/partials/button-fix.css";
import "./components/shop/partials/cursor-fix.css";

function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);
  return (
    <Fragment>
      <LayoutContext.Provider value={{ data, dispatch }}>
        <Routes />
      </LayoutContext.Provider>
    </Fragment>
  );
}

export default App;
