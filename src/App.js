import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import ViewRecipe from './components/ViewRecipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeRecipe from './components/HomeRecipe';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeRecipe/>} />
          <Route path='/search' element={<SearchRecipe/>} />
          <Route path='/view' element={<ViewRecipe/>} />
          <Route path='/add' element={<AddRecipe/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
