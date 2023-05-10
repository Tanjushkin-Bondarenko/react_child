import './App.css';
import { ParentOne } from './components/ParentOne';
import { ParentTwo } from './components/ParentTwo';
import { FirstChildComponent } from './components/FirstChildComponent';
import { SecondChildComponent } from './components/SecondChildComponent';

function App() {
  return (
    <>
      <ParentOne>
        <FirstChildComponent />
        <SecondChildComponent/>
    </ParentOne>
      <ParentTwo>
        <SecondChildComponent />
        <FirstChildComponent/>
    </ParentTwo>
    
    </>
  );
}

export default App;
