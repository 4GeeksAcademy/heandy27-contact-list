import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";




const AddContact = () => {


    return (

        <div className="bg-dark py-5">
            <div className="container bg-light p-3" style={{ width: "1200px" }}>
                <form>
                    <legend className="d-flex justify-content-center fs-1"><b>Add a new contact</b></legend>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder="Full Name" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Phone</label>
                        <input type="email" className="form-control" placeholder="Enter phone" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Address</label>
                        <input type="password" className="form-control" placeholder="Enter address" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={() => { }}>Submit</button>

                </form>
                <Link to="/contacts/:idContact">
                    <span>or get back to contacts</span>
                </Link>
            </div>
        </div>

    )
}

export default AddContact