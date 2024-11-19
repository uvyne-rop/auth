import react, {useState} from "react";

const LoginForm = () => {
    const [formData, setFormData] = useState({username:"", password:""});
    const[message, setMessage] = useState("");
    const[token, setToken] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});


    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(""); //reset message

        try{
            const response = await fetch("http://localhost:3000/login",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                setToken(data.token);
                setMessage("Login successful");

            }
            else {
                setMessage(data.message);

            }
          
        }
        catch (error) {
            setMessage("Error logging in. Please try again.");

        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Log In</h2>
               <div>
                <label>Username</label>
                <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                />
                </div> 
                <div>
                    <label>Password</label>
                    <input
                    type = "password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required

                    />
                </div>
                <button 
                type="submit"
                > Log In</button>
                {message && <p>{message}</p>}
                {token && (<p>JWT TOKEN: <span>{token}</span></p>
            )}
            </form>
        </div>
    );
};

export default LoginForm;

