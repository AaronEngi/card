import React from 'react';
import ReactDom from 'react-dom';

import './postcard.less'

export default class Postcard extends React.Component{
	state={
		content
	}
	
	render(){
		return (
			<div id="container">
				<div id="branding">

				<h2>Union Postale Universelle</h2>
				<ul>
				<li>Cartolina Postale</li>
				<li>
				<h1>Carte Postale</h1>
				</li>
				<li>Ta</li>
				<li>Levelezo-lap</li>
				<li>Postcard</li>
				<li>Postkarte</li>
				<li>Brief</li>
				</ul>

				</div>
				<div id="border">
				</div>
				<div id="content">
				<ul>
				<li id="message">
				<h3>Partie r��serv��e a la correspondance</h3>
				<p>Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la m��me direction.</p>
				<p>Oscar Wilde</p>


				</li> 
				<li id="sender">
					<h3>Adresse du destinataire</h3>
					<p><span class="capitalm">M</span>lle G. Simon</p><br />
					<p>Rue de Simon 31</p><br />
					<p>Arbestre</p><br />
					<p id="phone">Phone</p>
				</li> 
				</ul>
				</div> 


			</div>
		);
	}
}