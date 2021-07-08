import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  EmailField,
} from 'react-admin';

const UsersList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="firstname" />
        <TextField source="lastname" />
        <TextField source="zipcode" />
        <TextField source="city" />
        <TextField source="country" />
        <EmailField source="email" />
        <TextField source="mobile" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List>
  );
};

export default UsersList;
