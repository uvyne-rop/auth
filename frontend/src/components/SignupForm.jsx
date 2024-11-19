import React, {useState } from "react";


const SignupForm = () =>{
    const [formData, setFormData] = useState({username:"", password:"", confirmPassword: ""});
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({...formData, [name]: value });

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(""); //reset message

        try
        {
            const response = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });
            const data = await response.json();
if (response.ok) {
    setMessage(
        <>
            Sign up successful! You can now{" "}
            <a href="/login" style={{ color: "blue", textDecoration: "underline" }}>
                log in
            </a>
            .
        </>
    );
} else {
    setMessage(data.message);
}

            } catch (error) {
                setMessage("error signing up. please try again.");
            }
        };
        return (
            <div className="flex items-center justify-center">
                <form onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    <div>
                    <label>Username</label>
                    <input
                    type="text"
                    name="username"
                    value ={formData.username}
                    onChange={handleChange}
                    required
                    />
              
                </div>
                <div>
                    <label>Password</label>
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label>confirm Password</label>
                    <input
                    type="confirmPassword"
                    name="confirmPassword"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </div>
                <button
                type="submit"

                >Sign Up</button>
                {message && <p>{message}</p>}
                </form>

            </div>
        );

   
};
export default SignupForm;