import React from "react"


function Card(props){
  return (
    <dl className="dictionary">
        <div className="term">
          <h1>{props.emoji}</h1>
          <dt>
            <span>{props.name}</span>
          </dt>
          <dd>
          {props.meaning}
          </dd>
        </div>
      </dl>
  )
}



export default Card