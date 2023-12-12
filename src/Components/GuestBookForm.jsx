import { paste } from "@testing-library/user-event/dist/paste";
import { useEffect, useState } from "react";

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
                <div className="flex flex-col space-y-3">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Nom complet</label>
                        <div className="mt-2">
                            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={name} onChange={(e) => setName(e.target.value)} />
                            <p className="text-red-600 text-sm font-medium">{errors.name}</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div className="mt-2">
                            <input type="text" name="email" id="email" autoComplete="given-name" className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <p className="text-red-600 text-sm font-medium">{errors.email}</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="pays" className="block text-sm font-medium leading-6 text-gray-900">Pays</label>
                        <div className="mt-2">
                            <input type="text" name="pays" id="pays" autoComplete="given-name" className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={pays} onChange={(e) => setPays(e.target.value)} />
                            <p className="text-red-600 text-sm font-medium">{errors.pays}</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                        <div className="mt-2">
                            <input type="text" name="message" id="message" autoComplete="given-name" className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={message} onChange={(e) => setMessage(e.target.value)} />
                            <p className="text-red-600 text-sm font-medium">{errors.message}</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">
                            <button onClick={() => props.addToList && setIsSubmitClicked(true)} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Envoyer</button>
                        </div>
                        <div className="">
                            <button onClick={() => props.reset && setIsResetClicked(true)} className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Reset</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default GuestBookForm;