import './App.css';
import { Route, Switch,Router, Redirect} from  'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Products from './components/Products';
import Orders from './components/Orders';
import Discounts from './components/Discounts';
import Delivery from './components/Delivery';
import Customers from './components/Customers';
import Operations from './components/Operations';
import Reports from './components/Reports';
import Addproducts from './components/Addproducts';
import Purebakes from './components/Purebakes';
import Brandreviews from './components/Brandreviews';
import Productedit from './components/Productedit';
import history from './components/history';
import addproducttype from './components/addproducttype';
function App() {
  return (
    <>  
      <Sidebar/>
      <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/Products' component={Products}/>
        <Route  path='/Orders' component={Orders}/>
        <Route  path='/Discounts' component={Discounts}/>
        <Route  path='/Delivery' component={Delivery}/>
        <Route  path='/Customers' component={Customers}/>
        <Route  path='/Operations' component={Operations}/>
        <Route  path='/Reports' component={Reports}/>
        <Route  path='/Addproducts' component={Addproducts}/>
        <Route  path='/Purebakes' component={Purebakes}/>
        <Route  path='/Brandreviews' component={Brandreviews}/>
        <Route  path='/Productedit' component={Productedit}/>
        <Route  path='/addproducttype' component={addproducttype}/>

        <Redirect to="/" />
      </Switch>
      </Router>
    </>
  );
}

export default App;
