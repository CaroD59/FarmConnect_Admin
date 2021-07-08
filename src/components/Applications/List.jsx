import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  UrlField,
} from 'react-admin';

const AppsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="logo" />
        <TextField source="banner" />
        <UrlField source="app_web" target="_blank" />
        <UrlField source="app_android" target="_blank" />
        <UrlField source="app_ios" target="_blank" />
        <UrlField source="provider_app" target="_blank" />
        <EditButton basePath="/apps" />
        <DeleteButton basePath="/apps" />
      </Datagrid>
    </List>
  );
};

export default AppsList;
