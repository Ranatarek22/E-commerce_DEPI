import React, { useState ,useEffect} from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({users, SetLogged}) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  //   const changeUserName=(e)=>{

  // console.log(e.target.value);

  // };

  const getUser = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/mazenz",
    });
    // .then((res) => console.log(res.data));
  };
  useEffect(() => {
    getUser();
  }, []);
  const navigate = useNavigate();
  const handelForm = (e) => {
    e.preventDefault();

    const check = users.find(
      ({ name, password }) => user.name == name && user.password == password
    );

    if (check) {
      localStorage.cn = check.id;
      SetLogged(true);
      navigate("/");
    }
  };
  return (
    <div className="w-full flex justify-center items-center pt-8 ">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>

        <form
          onSubmit={handelForm}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Input
              label="UserName"
              value={user.name}
              onChange={(e) =>
                setUser({
                  ...user,
                  name: e.target.value,
                })
              }
            />
            <Input
              label="Email"
              value={user.email}
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
            />
            <Input
              label="Password"
              type="password"
              value={user.password}
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
