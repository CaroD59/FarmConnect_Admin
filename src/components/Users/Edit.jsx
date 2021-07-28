import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  TextField,
} from 'react-admin';

const UsersEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" label="ID" />
        <SelectInput
          source="sex"
          choices={[
            { id: '0', name: 'Femme' },
            { id: '1', name: 'Homme' },
          ]}
          label="Sexe"
        />
        <TextInput source="firstname" label="Prénom" />
        <TextInput source="lastname" label="Nom" />
        <TextInput source="zipcode" label="Prénom" />
        <TextInput source="city" label="Code Postal" />
        <TextInput source="country" label="Pays" />
        <TextInput source="email" />
        <TextInput source="mobile" min={10} max={10} />
        <SelectInput
          source="isStaff"
          choices={[
            { id: '0', name: 'Non' },
            { id: '1', name: 'Oui' },
          ]}
          label="Admin"
        />
      </SimpleForm>
    </Edit>
  );
};

export default UsersEdit;
