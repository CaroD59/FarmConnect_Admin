import {
  Create,
  SimpleForm,
  TextField,
  SelectInput,
  TextInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const UsersPost = (props) => {
  return (
    <Create title="Ajouter une application" {...props}>
      <SimpleForm>
        <TextField source="id" label="ID" />
        <TextInput source="name" label="Nom" />
        <RichTextInput source="description" label="Description" />
        <TextInput source="logo" label="Logo" />
        <TextInput source="banner" label="Bannière" />
        <SelectInput
          source="isFree"
          choices={[
            { id: '0', name: 'Oui' },
            { id: '1', name: 'Non' },
          ]}
          label="Est Gratuit"
        />
        <TextInput source="appWeb" label="URL Web" />
        <TextInput source="appAndroid" label="URL Android" />
        <TextInput source="appIos" label="URL iOS" />
        <TextInput source="providerApp" label="Fournisseur" />
      </SimpleForm>
    </Create>
  );
};

export default UsersPost;
