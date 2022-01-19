import logo from './logo.svg';
import './App.css';
import EmailTemplate from './Pages/EmailTemplate';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ViewTemplate from './Pages/ViewTemplate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<EmailTemplate />}>
        </Route>
        <Route path="/view" exact  element={<ViewTemplate />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
