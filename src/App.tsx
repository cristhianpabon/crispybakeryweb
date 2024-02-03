import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom"
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeScreen />}>
          <Route index element={<HomeScreen />} />
          {/* <Route path="about" element={<About />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
