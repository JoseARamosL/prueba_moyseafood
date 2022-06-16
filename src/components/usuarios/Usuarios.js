import React, { useEffect, useState } from "react";
import { render } from "react-dom"; 
import "./Usuarios.css";

import json from './usuarios.json';

let usuarios = json; 

class Usuarios extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			buscarString: "",
			usuarios: []
		};
		this.manejarBusqueda = this.manejarBusqueda.bind(this);
		this.search = React.createRef();

	} 

	componentDidMount() {
		this.setState({
			usuarios: usuarios
		});
		this.search.current.focus(); 
	}

	manejarBusqueda() {
		this.setState({
			buscarString: this.search.current.value
		});
	}

	render() {
		let usu = this.state.usuarios;
		let search = this.state.buscarString.trim().toLowerCase(); 

		if (search.length > 0) {
			usu = usu.filter(function(usuario) {
				return usuario.nombre.toLowerCase().match(search); 
			})
		}

	return(

		<div className="container cont">

			<div className="row"> 

				<div className="col-md-12">

				<h1>Buscador de usuarios</h1>

				<input
					type="text"
					className="form-control"
					value={this.state.buscarString}
					ref={this.search}
					onChange={this.manejarBusqueda}
					placeholder="Ejemplo: Tom"
				/>

				</div>

			</div>

			<div className="row mt-3">

				{usu.map(p => {
				

				return(

					<div className="col-md-4">

						<div className="card mb-3">

							<img className="card-img-top" src={`${process.env.PUBLIC_URL}/img/${p.img}`} alt={p.nombre} className="img-fluid" />

							<div className="card-body">

								<h3 className="card-title mb-3">{p.name}</h3>

								<p className="card-text">

									<strong>Usuario: </strong> {p.username}

								</p>

								<p className="card-text">

									<strong>Email: </strong> {p.email}

								</p>

								<p className="card-text">

									<strong>Teléfono: </strong> {p.phone}

								</p>

							</div>

						</div>


					</div>


				)


				})}


		  	</div>

		</div>

	);


	}


}

export default Usuarios;
