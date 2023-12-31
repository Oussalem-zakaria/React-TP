import { useState } from "react";
import GuestBookForm from "./GuestBookForm";

function GuestBookApp() {
    const [listUsers, setListUsers] = useState([])

    function addToList() {
        const newUser = { name: listUsers.name, pays: listUsers.pays, message: listUsers.message }
        listUsers.push([...listUsers, newUser])
    }

    function reset() {
        setListUsers([])
        console.log(listUsers)
    }

    return (
        <>
            <GuestBookForm setListUsers={setListUsers} reset={reset} addToList={addToList} listUsers={listUsers} />
            {
                listUsers.length > 0 &&
                <div className="px-3">
                    <h1 className="text-2xl font-bold py-4">Messages: </h1>
                    <ul className="py-3 px-3 bg-slate-100 space-y-3 text-black">
                        {listUsers.map((list, index) => (
                            <li key={index}><strong>{list.name}</strong>  ({list.pays}): {list.message}</li>
                        ))}
                    </ul>
                </div>
            }
        </>
    );
}

export default GuestBookApp;