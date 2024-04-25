import { json, useParams } from "react-router";


const getState = ({ getStore, getActions, setStore }) => {
	let contactURL = "https://playground.4geeks.com/contact/"
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getContacts: () => {
				fetch(`${contactURL}agendas/heandy`, {
					method: "GET"
				})
					.then((response) => {
						console.log(response.status);
						return response.json()

					})
					.then((data) => {
						console.log(data);
						setStore({ contacts: data.contacts })

					})
					.catch((error) => { error })
			},


			addNewContact: (name, phone, email, address) => {
				fetch(`${contactURL}agendas/heandy/contacts`, {
					method: "POST",
					body: JSON.stringify({ name: name, phone: phone, email: email, address: address }),
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then((response) => { return response.json() })
					.then((data) => {

						setStore([...contacts, data])
					})
					.catch((error) => { "hay un error en addContacts" + error })
			},


			deleteContact: (index) => {
				let contactToDelete = getStore().contacts[index]

				fetch(`${contactURL}agendas/heandy/contacts/${contactToDelete.id}`, {
					method: "DELETE",
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then((response) => {

						if (response.status == 204) {
							getActions().getContacts();
							return response.json()
						}
					})

					.catch((error) => { error })
			},
			editContact: (id, name, phone, email, address) => {

				fetch(`${contactURL}agendas/heandy/contacts/${id}`, {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ name: name, phone: phone, email: email, address: address })
				})
					.then((response) => {


						getActions().getContacts();
						return response.json()

					})


					.catch((error) => { error })
			}

			

		}
	};
};

export default getState;
