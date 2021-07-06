import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const AppsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="logo" />
        <TextField source="banner" />
        <TextField source="isFree" />
        <TextField source="app_web" />
        <TextField source="app_android" />
        <TextField source="app_ios" />
        <TextField source="provider_app" />
        <EditButton basePath="/apps" />
        <DeleteButton basePath="/apps" />
      </Datagrid>
    </List>
  );
};

export default AppsList;
