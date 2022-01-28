
import './App.css';
import Component1 from './Components/ClassComp1';
import Component2 from './Components/ClassComp2';
import Component3 from './Components/ClassComp3';
import Component4 from './Components/ClassComp4';
import Component5 from './Components/ClassComp5';
import Popoxel from './Components/Popoxutyun';


function App() {
  return (
    <div className="App">
      <Component1 obj = 'name:Anna, age:33, Professon: Doctor'/>
      <Component2 obj = 'name:Karen,age:24, Proffesson:Dantist'/>
      <Component3 obj='name:Tigran,age:28, Proffesson:Baker'/>
      <Component4 obj='name:Hasmik,age:26, Proffesson: Designer'/>
      <Component5 obj='name:Jora,age:25, Proffesson: Front-End Developer' />
      <Popoxel/>
    </div>
  );
}

export default App;
