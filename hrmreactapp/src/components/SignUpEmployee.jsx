import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

export const SignUpEmployee = () => {

  const [user, setUser] = useState({email: "", password: "" });

  const navigate = useNavigate();
   
  const handleSubmit = async (e) => {
  e.preventDefault();
   try {
      await api.post("/auth/signup", user);
      alert("Signup Successful");
      navigate("/signin");
    } catch (error) {
      console.error(error);
      alert("Signup failed!");
    }
};


  return (
    <div className="container mt-5 col-12">
        
      <h3 className="text-center">Signup</h3>
      <form onSubmit={handleSubmit} className="card p-4 shadow">
       
   
        <input className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input className="form-control mb-2"
          placeholder="Password"
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="btn btn-primary mt-2 w-100">Signup</button>
      </form>
    </div>
  );
}
