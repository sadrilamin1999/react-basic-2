import { useContext, useState } from "react";
import { UserContext } from "../context/userContextProvider";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const { setUserData } = useContext(UserContext);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleUserSubmit = (e) => {
    e.preventDefault();
    setUserData(user.name, user.email);

    setUser({
      // Resetting user state to empty values
      name: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handleUserSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Log in</button>
    </form>
  );
};

export default Login;
