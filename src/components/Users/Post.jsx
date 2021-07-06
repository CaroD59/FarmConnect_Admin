import { Create, SimpleForm, TextField, SelectInput } from 'react-admin';

const UsersPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <SelectInput
          source="sex"
          choices={[
            { id: '0', name: 'Femme' },
            { id: '1', name: 'Homme' },
          ]}
        />
        <TextField source="firstname" />
        <TextField source="lastname" />
        <TextField source="zipcode" />
        <TextField source="city" />
        <TextField source="country" />
        <TextField source="email" />
        <TextField source="mobile" />
      </SimpleForm>
    </Create>
  );
};

export default UsersPost;
