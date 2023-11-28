import { useState } from "react";

export default function SignupForm() {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const updateFirstname = (evt) => {
        setFirstName(evt.target.value);
    }
    const updateLastName = (evt) => {
        setLastName(evt.target.value);
    }
    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input
                type="text"
                placeholder="firstname"
                value={firstname}
                onChange={updateFirstname}
                id="firstname"
            />
            <label htmlFor="lastname">Last Name</label>
            <input
                type="text"
                placeholder="lastname"
                value={lastname}
                onChange={updateLastName}
                id="lastname"
            />
            <button>Submit</button>
        </div>
    )
}