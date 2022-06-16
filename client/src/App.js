import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';

import BookingPage from './pages/booking/booking.page';
import QuestionsPage from './pages/questions/questions.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuestionsPage />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;