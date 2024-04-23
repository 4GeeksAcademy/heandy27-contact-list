import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contacts = () => {

    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');


    let contactURL = "https://playground.4geeks.com/contact/"

    function getContacts() {
        fetch(`${contactURL}agendas/heandy`, {
            method: "GET"
        })
            .then((response) => {
                console.log("Aqui estamos" + response.status);
                return response.json()

            })
            .then((data) => {
                console.log(data);
                setContacts(data.contacts)

            })
            .catch((error) => { error })
    }

    let newContact = {
        "name": name,
        "phone": phone,
        "email": email,
        "address": address,
    }

    function addContact() {
        fetch(`${contactURL}agendas/heandy/contacts`, {
            method: "POST",
            body: JSON.stringify(newContact),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => { return response.json() })
            .then((data) => {
                console.log(data)
                setContacts([...contacts, data])
                setName("")
                setPhone("")
                setEmail("")
                setAddress("")
            })
            .catch((error) => { "hay un error en addContacts" + error })
    }

function deleteContacts(index) {
    let contactToDelete = contacts[index]

        fetch(`${contactURL}agendas/heandy/contacts/${contactToDelete.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            getContacts();
            return response.json()
            
        })
        
        .catch((error)=>{error})
}


    useEffect(() => {
        getContacts();
    }, [])
    return (
        <div className="container pt-5">
            <div className="d-flex justify-content-end">
                <Link to="/addcontact">
                    <button className=" bg-success text-light border-0 p-2 mb-3 rounded">Add New Contact</button>
                </Link>
            </div>

            {contacts.map((value, index) => (
                <div className="row border border-1 p-3">
                    <div className=" py-3 d-flex flex-row">
                        <div className="col-2">
                            <div className=""><img className="rounded-circle" src="https://picsum.photos/150/150?random=2" /></div>
                        </div>
                        <div className="d-flex flex-column col-8">
                            <h3>{value.name}</h3>
                            <div className="text-secondary"> <p><i className="fa-solid fa-location-dot pe-3 "></i>{value.address}</p></div>
                            <div className="text-secondary"> <p><i className="fa-solid fa-phone-flip pe-3"></i>{value.phone}</p></div>
                            <div className="text-secondary"> <p><i className="fa-solid fa-envelope pe-3"></i>{value.email}</p></div>
                        </div>
                        <div className="col-1"><i className="fa-solid fa-pen"></i></div>
                        <div className="col-1"><i className="fa-solid fa-trash-can" onClick={()=>{deleteContacts(index)}}></i></div>
                    </div>
                </div>
            ))}



        </div>
    )
}

export default Contacts;