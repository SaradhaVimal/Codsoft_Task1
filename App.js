import Expo from "expo";
import React from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import todos from "./reducers/todos";
import AppContainer from "./containers/AppContainer";

// console.disableYellowBox = true;

const store = createStore(todos);


function App() {
  return (
    <Provider store={store}>
    <AppContainer />
</Provider>
  )
}

export default App;


