import { useState } from "react";
import GuestBookForm from "./GuestBookForm";

function GuestBookApp() {
    const [listUsers, setListUsers] = useState([{}])

    function addToList() {
        
        listUsers.push(listUsers)
    }

    return (
        <>
            <GuestBookForm setListUsers={setListUsers} addToList={addToList} />
            <ul>
                {listUsers.map((list,index) => (
                    <li key={index}>{list.name}</li>
                ))}
                {        console.log(listUsers)}
            </ul>
        </>
    );
}

export default GuestBookApp;