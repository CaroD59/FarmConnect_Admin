import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const UsersList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="sex" />
        <TextField source="firstname" />
        <TextField source="lastname" />
        <TextField source="zipcode" />
        <TextField source="city" />
        <TextField source="country" />
        <TextField source="email" />
        <TextField source="mobile" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List>
  );
};

export default UsersList;
