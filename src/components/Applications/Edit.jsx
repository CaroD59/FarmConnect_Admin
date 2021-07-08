import { Edit, SimpleForm, TextInput, SelectInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const AppsEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <RichTextInput source="description" />
        <TextInput source="logo" />
        <TextInput source="banner" />
        <SelectInput
          source="isFree"
          choices={[
            { id: '0', name: 'Oui' },
            { id: '1', name: 'Non' },
          ]}
        />
        <TextInput source="app_web" />
        <TextInput source="app_android" />
        <TextInput source="app_ios" />
        <TextInput source="provider_app" />
      </SimpleForm>
    </Edit>
  );
};

export default AppsEdit;
