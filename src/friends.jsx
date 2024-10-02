import { useEffect, useState } from "react"
import Friend from "./friend"

export default function Friends(){
const decoration={
    border:'5px  solid purple', 
    padding:'10px', 
    margin:'5px', 
    borderRadius:'20px'
}

const [friends, setFriends]=useState([])
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then(data =>  setFriends(data))

},[])
    return (
<div style={decoration}> 
    <h1> Friends:{friends.length}</h1>

    {friends.map((friend) => <Friend friend={friend}></Friend>)
    
    }

</div>

    )
}


/**
 * first you have to declear a state to hold the data 
 * use "useEfect " with dependeny array . 
 * use fetch to load data 
 *  set loaded data to the state 
 */