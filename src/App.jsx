import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './authProvider';
import UsersList from './components/Users/List';
import UsersEdit from './components/Users/Edit';
import AppsList from './components/Applications/List';
import AppsEdit from './components/Applications/Edit';
import AppsPost from './components/Applications/Post';

function App() {
  return (
    <div className="App">
      <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="users" list={UsersList} edit={UsersEdit} />
        <Resource
          name="apps"
          list={AppsList}
          edit={AppsEdit}
          create={AppsPost}
        />
      </Admin>
    </div>
  );
}

export default App;
