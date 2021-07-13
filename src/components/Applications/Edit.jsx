import { Edit, SimpleForm, TextInput, SelectInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const AppsEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
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
    </Edit>
  );
};

export default AppsEdit;
