
import './App.css';
 var number =8;
const App=()=> {
  var txt=1;
 for(let i=number;i>1;i--){
    txt=txt*i;
 }
  return (
    <div className="App">
     <h1>{txt}</h1>
    </div>
  );
}

export default App;
