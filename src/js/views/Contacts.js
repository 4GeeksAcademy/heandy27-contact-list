import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "./../store/appContext"

const Contacts = () => {

    const params = useParams();
    console.log(params.idContact);


    const { store, actions } = useContext(Context);


    return (
        <div className="container pt-5">
            <div className="d-flex justify-content-end">
                <Link to="/addcontact">
                    <button className=" bg-success text-light border-0 p-2 mb-3 rounded">Add New Contact</button>
                </Link>
            </div>

            {store.contacts.map((value, index) => (


                <div className="row border border-1 p-3">
                    <div className=" py-3 d-flex flex-row">
                        <div className="col-2">
                            <div className=""><img className="rounded-circle" src="https://picsum.photos/150/150?random=2" /></div>
                        </div>
                        <div className="d-flex flex-column col-8 ps-4">
                            <h3>{value.name}</h3>
                            <div className="text-secondary"> <p><i className="fa-solid fa-location-dot pe-3 "></i>{value.address} </p></div>
                            <div className="text-secondary"> <p><i className="fa-solid fa-phone-flip pe-3"></i>{value.phone}</p></div>
                            <div className="text-secondary"> <p><i className="fa-solid fa-envelope pe-3"></i>{value.email}</p></div>
                        </div>

                        <Link to={`/editcontact/${value.id}`}>
                            <button className="col-1 btn btn-success" style={{ height: "40px", width: "40px" }} ><i className="fa-solid fa-pen"></i></button>
                        </Link>
                        <button className="col-1 btn btn-success ms-4" style={{ height: "40px", width: "40px" }} onClick={() => { actions.deleteContact(index) }}><i class="fa-solid fa-trash-can"></i></button>

                    </div>
                </div>

            ))}



        </div>

    )
}

export default Contacts;