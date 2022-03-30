import "./index.css";
import { Route, Routes} from 'react-router-dom';
import RentalForm from './components/RentalForm';
import Header from "./components/Header";
import BidDetails from "./components/BidDetails";


function App() {
  return (
  <>
  <Header />
 
   <Routes>
        <Route exact path="/" element={<RentalForm />} />
   </Routes>
   <Routes>
        <Route exact path="/bid" element={<BidDetails />} />
   </Routes>
   
    </>
  );
}

export default App;
