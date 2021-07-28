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
        <TextField source="name" label="Nom" />
        <TextField source="logo" label="Logo" />
        <TextField source="banner" label="Bannière" />
        <UrlField source="appWeb" target="_blank" label="URL Web" />
        <UrlField source="appAndroid" target="_blank" label="URL Android" />
        <UrlField source="appIos" target="_blank" label="URL iOS" />
        <UrlField source="providerApp" target="_blank" label="Fournisseur" />
        <EditButton basePath="/apps" />
        <DeleteButton basePath="/apps" />
      </Datagrid>
    </List>
  );
};

export default AppsList;
