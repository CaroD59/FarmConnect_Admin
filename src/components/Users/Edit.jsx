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
        <TextInput source="mobile" min={10} max={10} />
      </SimpleForm>
    </Edit>
  );
};

export default UsersEdit;
