import './App.css';
import { Routes, Route } from 'react-router-dom';
import Challenge from './pages/challenge/Challenge';
import Daily from './pages/daily/Daily';
import Home from './pages/home/Home';
import RecipeDetail from './pages/recipeDetail/ReacipeDetail';
import SavedList from './pages/savedList/SavedList';
import Searching from "./pages/searching/Searching";
import Notfound from './pages/Notfound';


function App() {

  return (
    <Routes>
      <Route path = "/" element = {<Home /> }/>
      <Route path = "/challenge" element = {<Challenge /> }/>
      <Route path = "/daily" element = {<Daily /> }/>
      <Route path = "/recipe/:id" element = {<RecipeDetail /> }/>
      <Route path = "/saved" element = {<SavedList /> }/>
      <Route path = "/searching" element = {<Searching /> }/>
      <Route path = "*" element = {<Notfound /> }/>
    </Routes>
  );
}

export default App;
