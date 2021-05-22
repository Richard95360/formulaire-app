import NavBar from './Components/NavBar/NavBar';
import Home from './Containers/Home/Home';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Contact from './Containers/Contact/Contact'
import AddArticle from './Containers/AddArticle/AddArticle'
import Article from './Containers/Article/Article'


function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/ecrire' exact component={AddArticle}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/articles/:slug' exact component={Article}/>

      </Switch>
    </Router>
 
     
    </>
  );
}

export default App;
