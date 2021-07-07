import {
  Edit,
  SimpleForm,
  TextField,
  TextInput,
  SelectInput,
} from 'react-admin';

const UsersEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <SelectInput
          source="sex"
          choices={[
            { id: '0', name: 'Femme' },
            { id: '1', name: 'Homme' },
          ]}
        />
        <TextInput source="firstname" />
        <TextInput source="lastname" />
        <TextInput source="zipcode" />
        <TextInput source="city" />
        <TextInput source="country" />
        <TextInput source="email" />
        <TextInput source="mobile" />
      </SimpleForm>
    </Edit>
  );
};

export default UsersEdit;
