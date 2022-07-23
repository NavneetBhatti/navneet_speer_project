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
		<svg onClick={() => props.onClick()}
		xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-info-circle detail icon" viewBox="0 0 16 16">
		<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
		<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
		</svg>

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
function ActivityFeed(props) {
	
	const stack = props.stack
	let entries

	if (stack) {
		entries = stack.map((entry, index) => {

			// Check if current page matches entry type
			if (entry.is_archived == props.recent) {
				return null
			}

			return (
				<div>

				<li className={props.recent ? 'fade-in'
					: 'fade-in-right'} key={entry.id}>


				<h4>
					<span><PhoneSymbol inbound={entry.direction == 'inbound'}/> </span>
					{entry.direction == 'inbound' ? entry.from : entry.to}
				{/* <PhoneSymbol inbound={entry.direction == 'inbound'}/> */}
				</h4>

				

				<small>{(new Date(entry.created_at).toLocaleDateString())}
				</small> <small>{(new Date(entry.created_at).toLocaleTimeString([],
					{hour: '2-digit',
						minute: '2-digit'}))} - {entry.call_type}
				</small>

				<DetailSymbol onClick={() => props.onSelect(entry)}/>

				</li>

				</div>
			)
		})

	}

	return (
	<ul className="calls">
		{entries}
	</ul>
	)
}

export default ActivityFeed;
