import { paste } from "@testing-library/user-event/dist/paste";
import { useEffect, useState } from "react";

function GuestBookForm(props) {
    const [name, setName] = useState("name")
    const [email, setEmail] = useState("email")
    const [pays, setPays] = useState("pays")
    const [message, setMessage] = useState("your message")
    const [clicked, setClicked] = useState(false)

    const handleSumit = async (e) => {
        e.preventDefault();
        setClicked(true)
        props.setListUsers([{"name": name,"pays": pays, "message": message}])
    }

    return (
        <>
            <form action="" onSubmit={handleSumit}>
                <div className="flex flex-col space-y-3">
                    <div className="flex flex-col">
                        <label className="mx-5" htmlFor="name">Nom complet</label>
                        <input type="text" name="name" className="bg-slate-200 mx-5 p-1" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label className="mx-5" htmlFor="email">Email</label>
                        <input type="text" name="email" className="bg-slate-200 mx-5 p-1" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label className="mx-5" htmlFor="pays">Pays</label>
                        <input type="text" name="pays" className="bg-slate-200 mx-5 p-1" value={pays} onChange={(e) => setPays(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label className="mx-5" htmlFor="message">Message</label>
                        <input type="text" name="message" className="bg-slate-200 mx-5 p-1" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <div className="flex justify-center">
                        <button onClick={() => props.addToList}>Envoyer</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default GuestBookForm;