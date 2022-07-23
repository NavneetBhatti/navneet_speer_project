import React, {useState, useEffect} from 'react';

function Navigator(props) {
	let recent = "recent" + (props.recent ? " selected" : '')
	let archived = "archived" + (props.recent ? "" : " selected")
	let slider = "nav-slider" + (props.recent ? " left" : " right")
	return (
		<nav>
			<button onClick={() => props.onPageChange(true)}
			className={recent}>Recent
			</button>
			<button onClick={() => props.onPageChange(false)}
			className={archived}>Archived
			</button>
			<div>
				<span className={slider}></span>
			</div>
		</nav>
	)
}

export default Navigator
