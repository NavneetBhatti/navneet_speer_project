//import React, {useState, useEffect} from 'react';


import React from 'react'

const Archive = (props) => {
    function moveCall(call, update) {
        fetch('https://aircall-job.herokuapp.com/activities/'
            + String({call}.id),
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({'is_archived': !{call}.is_archived})
            }
        ).then(response => {
            if (response.ok) {
                {update}({call})
            }
        })
    }
    
  return (
    <div>
        <button className="btn" onClick={() => moveCall(props.info, props.onUpdate)}>
		{props.info.is_archived
		? "Unarchive" : "Archive"}
		</button>
    </div>
  )
}

export default Archive;
