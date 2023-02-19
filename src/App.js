import { Redirect, Route, Switch,Link } from 'react-router-dom';
import './App.css';
import Components from './Components/Components';
import Dashboard from'./Components/Dashboard';
import Charts from './Components/Charts'; 
import Pages from './Components/Pages';
import Tables from './Components/Tables';
import Utilities from './Components/Utilities';
import Nopage from './Components/Nopage';


function App() {
  return (
    <div className="App">
   <Switch>

<Route exact path ="/">
  <Dashboard/>
</Route>

<Route path ="/charts">
<Charts/>
</Route>


<Route path ="/components">
  <Components/>
</Route>


<Route path ="/utilities">
  <Utilities/>
</Route>


<Route path ="/tables">
  <Tables/>
</Route>


<Route path ="/pages">
 <Pages/> 
</Route>



<Route path ="**">
 <Nopage/> 
</Route>



   </Switch>
    </div>
  );
}

export default App;
