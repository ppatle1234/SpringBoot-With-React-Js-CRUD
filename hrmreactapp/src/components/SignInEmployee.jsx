import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

export const SignInEmployee = () => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await api.post("/auth/signin", login);

    localStorage.setItem("token", res.data.token);
    alert("Login Successful");

    navigate("/employees");
  } catch (err) {
    alert("Invalid Email or Password");
    console.error("Login error:", err);
  }
};

  return (
    <div className="container mt-5 col-12">
      <h3 className="text-center">Sign In</h3>
      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <input className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
        />
        <input className="form-control mb-2"
          placeholder="Password"
          type="password"
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />
        <button className="btn btn-danger mt-2 w-100">Sign In</button>
      </form>
    </div>
  );
}
