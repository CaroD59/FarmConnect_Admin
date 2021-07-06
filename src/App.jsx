import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import UsersList from './components/Users/List';
import UsersEdit from './components/Users/Edit';
import UsersPost from './components/Users/Post';

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
        <Resource
          name="users"
          list={UsersList}
          edit={UsersEdit}
          create={UsersPost}
        />
      </Admin>
    </div>
  );
}

export default App;
