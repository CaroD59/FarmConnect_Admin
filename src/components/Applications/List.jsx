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
        <UrlField source="appWeb" target="_blank" />
        <UrlField source="appAndroid" target="_blank" />
        <UrlField source="appIos" target="_blank" />
        <UrlField source="providerApp" target="_blank" />
        <EditButton basePath="/apps" />
        <DeleteButton basePath="/apps" />
      </Datagrid>
    </List>
  );
};

export default AppsList;
