import React from "react";
import { Form, Text } from "informed";
const Login = props => {
  const setLogIn = props.setLogIn;
  return (
    <Form onSubmit={setLogIn}>
      Demo mode. Just submit form to get to home<br></br>
      <label>User Name</label>
      <Text field="name"></Text>
      <label>password </label>
      <Text field="password"></Text>
      <button type="submit">submit</button>
    </Form>
  );
};
export default Login;
