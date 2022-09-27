import logo from './logo.svg';
import './App.css';
import MyNave from './components/nave';
import MySlider from './components/slider';
import  MyProdect  from './components/prodect';
import Counter from './fanctionComponent/counter';

function App() {
  return (
    <div className="App">
      <MyNave></MyNave>
      <MySlider></MySlider>
      <MyProdect></MyProdect>
      <Counter></Counter>
  
    </div>
  );
}

export default App;
