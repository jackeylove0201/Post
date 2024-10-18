import logo from './logo.svg';
import './App.css';
import { Route,Routes } from "react-router-dom"
import LayoutDefault from './Components/LayoutDefault';
import Blog from './Components/Blog';
import BlogAll from './Components/BLogAll';
import BlogDetail from './Components/BlogDetail';
function App() {
  return (
    <>

      <Routes>
        <Route path='/' element = {<LayoutDefault/>}>   
        <Route path='/' element = {<Blog/>}>
          
             <Route index element = {<BlogAll/>}/>
             <Route path=':id' element = {<BlogDetail/>}/>

        </Route>
       

        </Route>
       
      </Routes>
            


    </>
  );
}

export default App;
