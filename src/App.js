import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';

import AllMeetupsPage from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetupPAge from './pages/NewMeetupPAge';


function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
       <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
       <NewMeetupPAge/>
      </Route>
      <Route path='/favorites'>
       <Favorites/>
      </Route>
    </Switch>
     
    </Layout>
  );
}

export default App;
