import { paste } from "@testing-library/user-event/dist/paste";
import { useEffect, useState } from "react";
import ThemedButton from "./ThemedButton";
import FormInputContainer from "../Components/Form/FormInputContainer";
import FormButton from "../Components/Form/FormButton";

function GuestBookForm(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pays, setPays] = useState("")
    const [message, setMessage] = useState("")
    const [isSubmitClicked, setIsSubmitClicked] = useState(false)
    const [isResetClicked, setIsResetClicked] = useState(false)
    const [errors, setErrors] = useState({});

    const handleSumit = async (e) => {
        e.preventDefault();
        if (isSubmitClicked) {

            const formErrors = {};

            if (!name.trim()) {
                formErrors.name = "Name is required";
            }

            if (!email.trim()) {
                formErrors.email = "Email is required";
            }

            if (!pays.trim()) {
                formErrors.pays = "Pays is required";
            }

            if (!message.trim()) {
                formErrors.message = "Message is required";
            }

            setErrors(formErrors);

            if (Object.keys(formErrors).length === 0) {
                const newUser = { name, pays, message }
                props.setListUsers([...props.listUsers, newUser])
                setIsSubmitClicked(false)
            }
        }
        else if (isResetClicked) {
            props.setListUsers([])
            setName("")
            setEmail("")
            setPays("")
            setMessage("")
            setIsResetClicked(false)
        }
    }

    return (
        <>
            
            <form action="" onSubmit={handleSumit}>
                <div className={`flex flex-col space-y-3 px-3 py-3`}>
                    <h1 className="text-2xl font-bold text-slate-950">livre d'or</h1>
                    <FormInputContainer props={{ name: "first-name", text: "Nom complet", type: "text", value: name, onChange_: setName, message: errors.name }} />
                    <FormInputContainer props={{ name: "email", text: "Email", type: "text", value: email, onChange_: setEmail, message: errors.email }} />
                    <FormInputContainer props={{ name: "pays", text: "Pays", type: "text", value: pays, onChange_: setPays, message: errors.pays }} />
                    <FormInputContainer props={{ name: "message", text: "Message", type: "text", value: message, onChange_: setMessage, message: errors.message }} />
                    <div className="flex justify-between">
                        {/* <button onClick={() => props.addToList && setIsSubmitClicked(true)} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Envoyer</button> */}
                        <FormButton action={() => props.addToList && setIsSubmitClicked(true)} text="Envoyer" color="indigo" />
                        {/* <button onClick={() => props.reset && setIsResetClicked(true)} className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Reset</button> */}
                        <FormButton action={() => props.reset && setIsResetClicked(true)} text="Reset" color="red" />
                    </div>
                </div>
            </form>
        </>
    );
}

export default GuestBookForm;