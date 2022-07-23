import React, {useState, useEffect} from 'react';

function PhoneSymbol(props) {
	if (props.inbound) {
		return (
		<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi
			bi-telephone-inbound-fill in-phone" fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd"
			d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29
			2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0
			.178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745
			0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034
			1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42
			18.634 18.634 0 0
			1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5
			0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0
			1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"/>
			</svg>
		)

	} else {
		return (
	<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi
		bi-telephone-outbound-fill out-phone" fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd"
		d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29
		2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0
		.178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0
		0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034
		1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42
		18.634 18.634 0 0
		1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0
		0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5
		0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
		</svg>
		)
	}

}

function DetailSymbol(props) {
	return (
		<svg onClick={() => props.onClick()}width="1em" height="1em" viewBox="0 0 16 16" className="bi
			bi-chevron-right detail icon" fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"> <path strokeWidth="1px"
			fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0
			1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0
			1 0-.708z"/> </svg>
	)

}

function Seperator(props) {
	if (props.index == 0 || props.stack[props.index].time[0].toLocaleDateString() !=
		props.stack[props.index - 1].time[0].toLocaleDateString()) {
		return (<div className="date"><h3>
			{props.stack[props.index].time[0].toLocaleDateString()}
			</h3></div>)
	}
	return <span></span>
} 

// The component used for sorting and rendering the call list.
function Feed(props) {
	
	const stack = props.stack
	let entries

	if (stack) {
		entries = stack.map((entry, index) => {

			// Check if current page matches entry type
			if (entry.is_archived == props.recent) {
				return null
			}

			return (
				<li className={props.recent ? 'fade-in'
					: 'fade-in-right'} key={entry.id}>

				<h4>{entry.direction == 'inbound' ? entry.from : entry.to}
				<PhoneSymbol inbound={entry.direction == 'inbound'}/>
				</h4>

				<small>{(new Date(entry.created_at).toLocaleDateString())}
				</small> <small>{(new Date(entry.created_at).toLocaleTimeString([],
					{hour: '2-digit',
						minute: '2-digit'}))} - {entry.call_type}
				</small>

				<DetailSymbol onClick={() => props.onSelect(entry)}/>

				</li>
			)
		})

	}

	return (
	<ul className="calls">
		{entries}
	</ul>
	)
}

export default Feed;
