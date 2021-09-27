//import logo from './logo.svg';
import './App.css';
import NewProduct from './components/NewProduct';
import Display from './components/Display';
import VisibilityFilter from './components/VisibilityFilter'


const App = () => {

  return(
    <div className="App">
      <NewProduct />
      <VisibilityFilter />
      <Display />
    </div>
  )
}

export default App;
