import './App.css'
import Header from './header.jsx';
import ToDoList from './toDoList.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer.jsx';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';

function App() {

  return <>
  <Router>
<Header/>
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
<Footer/>
</Router>
</>;
}

export default App
