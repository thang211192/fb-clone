import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { useReducerContext } from './StateProvider';
import Widgets from './Widgets';

function App() {
  const [{user}] = useReducerContext();
  console.log('App user: ', user);
  return (
    <div className="app">
        
        {!user ? <Login 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
      srcIcon="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
      /> : 
      <>
        <Header 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"/>
            <div className="app__body">
              <Sidebar/>
              <Feed/>
              <Widgets/>
            </div>
      </>
      }
    </div>
  );
}

export default App;
