import React, {useState, useEffect} from 'react';

// Icons could be moved to their own file in the future
function ContactIcon() {
	return (
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0
		350 350" xmlSpace="preserve"> <g> <path
		d="M175,171.173c38.914,0,70.463-38.318,70.463-85.586C245.463,38.318,
		235.105,0,175,0s-70.465,38.318-70.465,85.587
		C104.535,132.855,136.084,171.173,175,171.173z"/> <path
		d="M41.909,301.853C41.897,298.971,41.885,301.041,
		41.909,301.853L41.909,301.853z"/>
		<path d="M308.085,304.104C308.123,303.315,308.098,
		298.63,308.085,304.104L308.085,304.104z"/>
		<path d="M307.935,298.397c-1.305-82.342-12.059-105.805-94.352-120.657c0,
		0-11.584,14.761-38.584,14.761
		s-38.586-14.761-38.586-14.761c-81.395,14.69-92.803,37.805-94.303,
		117.982c-0.123,6.547-0.18,6.891-0.202,6.131
		c0.005,1.424,0.011,4.058,0.011,8.651c0,
		0,19.592,39.496,133.08,39.496c113.486,0,133.08-39.496,133.08-39.496
		c0-2.951,0.002-5.003,0.005-6.399C308.062,304.575,308.018,303.664,
		307.935,298.397z"/>
		</g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g>
		</g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
		</svg>
	)
}

function BackIcon(props) {
	return (
<svg onClick={() => props.onClick()} width="1em" height="1em" viewBox="0 0 16
		16" className="bi bi-chevron-left" fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" d="M11.354
		1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0
		1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>
	)
}

// Function should be moved to parent component idealy
function moveCall(call, update) {
	fetch('https://aircall-job.herokuapp.com/activities/'
		+ String(call.id),
		{
			method: 'POST',
			headers: {'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({'is_archived': !call.is_archived})
		}
	).then(response => {
		if (response.ok) {
			update(call)
		}
	})
}

// Displays details of a specific call
function Call(props) {
	return (
		<div className="fade-in call">

		<ContactIcon/>

		<div>
		<h3>{props.info.direction == 'inbound'
			? props.info.from
			: props.info.to}
		</h3>

		<h4>
		{new Date(props.info.created_at).toLocaleTimeString([],
			{hour: '2-digit', minute: '2-digit'})
		} - {props.info.call_type}
		</h4>
		<small>
		{new Date(props.info.created_at).toLocaleDateString()}
		</small>
		</div>

		<div>
		<h4>
		{parseInt(props.info.duration / 60)
		} mins {props.info.duration % 60
		} seconds </h4>
		</div>

		<div className="call-nav">
		<BackIcon onClick={() => props.onBack()}/>
		<button onClick={() => moveCall(props.info, props.onUpdate)}>
		{props.info.is_archived
		? "Unarchive" : "Archive"}
		</button>
		</div>

		</div>
	)
}

export default Call
