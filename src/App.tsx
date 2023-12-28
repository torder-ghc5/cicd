import { BrowserRouter } from "react-router-dom";
import './App.css';

import RouterProvider from './rotues';
import Sidebar from './components/App/Sidebar';

function App() {
  return (   
    <BrowserRouter>
      <div className="Wrapper">
        <Sidebar />
        <RouterProvider />
      </div>
    </BrowserRouter>
  );
}

export default App;
