import { useState } from "react"

export default function Team(){

    const [teamNumber, setTeam] =useState(11)
const handleAdd=() => {
   setTeam(teamNumber+1)


}
const handleRemove=() => {
    setTeam(teamNumber-1)
}

const teamStyle={
    border:'5px solid purple', 
    borderRadius:'20px',
    padding:'15px', 
    margin:'20px'

}

    return(
<div style={teamStyle}> 
    <h3> Players :{teamNumber} </h3>
    <button onClick={handleAdd}> Add</button>
    <button onClick={handleRemove}> Remove</button>
</div>

    )
}