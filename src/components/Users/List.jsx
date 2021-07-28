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
        <TextField source="firstname" label="Prénom" />
        <TextField source="lastname" label="Nom" />
        <TextField source="zipcode" label="Code Postal" />
        <TextField source="city" label="Ville" />
        <TextField source="country" label="Pays" />
        <EmailField source="email" />
        <TextField source="mobile" />
        <TextField source="isStaff" label="Admin" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List>
  );
};

export default UsersList;
