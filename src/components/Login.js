import React from "react";
import { Form, Text } from "informed";
const Login = props => {
  const setLogIn = props.setLogIn;
  return (
    <Form onSubmit={setLogIn}>
      Demo mode. Click submit to get to home page. <br></br>You may add, edit,
      or delete whatever you'd like and feel free to add a wine with you name{" "}
      <br></br>
      <label>User Name</label>
      <Text field="name"></Text>
      <label>Password </label>
      <Text field="password"></Text>
      <button type="submit">submit</button>
    </Form>
  );
};
export default Login;
