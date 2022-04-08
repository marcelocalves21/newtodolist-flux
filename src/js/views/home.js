import React, {useState, useContext}from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} =useContext(Context)
	const [listItem, setListItem] = useState("")
	return(
	<div className="container text-center mt-5">
		<div className="input-group mb-3">
			<input 
				type="text" 
				className="form-control" 
				placeholder="New Task"
				onChange={e => setListItem(e.target.value)} 
				value={listItem}/>

			<button 
				className="btn btn-outline-secondary" 
				type="button" 
				id="button-addon2"
				onClick={() => {
					actions.updateList([...store.list, {label: listItem, done: false}])
				}}>
					Button
				</button>
		</div>
		<ul className="list-group">
			{store.list.map((element, index) => {
				return(
				<li key={index} className="list-group-item d-flex justify-content-between align-items-center">
					{element.done ? 
					<p className="ms-5 text-decoration-line-through">
						{element.label}
					</p> 
					:
					<p className="ms-5 text-primary">
						{element.label}
					</p>}
					<div className="me-5">
						<a 
							className={element.done ?
								"m-1 btn btn-success"
							:
								"m-1 btn btn-secondary"}
							onClick={() => {
								actions.taskDone(index)
							}}>
							<i className="fas fa-check"></i>
						</a>
						<a className="m-1 btn btn-primary">
							<i className="fas fa-edit"></i>
						</a>
						<a 
							className="m-1 btn btn-danger"
							onClick={() => {
								actions.updateList(store.list.filter((e, i) => i !== index))
							}}>
							x
						</a>
					</div>
				</li>)
			})}
		</ul>
	</div>
	)};
