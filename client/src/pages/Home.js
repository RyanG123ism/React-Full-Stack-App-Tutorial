import React from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { useState, useEffect } from 'react'; // Import useEffect for side effects in functional components

function Home() {

    const [listOfPosts, setListOfPosts] = useState([]); // State to hold posts data

    useEffect(() => {
      axios.get('http://localhost:3001/posts') // Make a GET request to the server
        .then(response => {
          setListOfPosts(response.data); // Update the state with the fetched posts
        })
    }, []); // This effect runs once when the component mounts

    return (
        listOfPosts.map((value, key) => {return (
        <div className="post"> 
          <div className="title"> {value.title} </div>
          <div className="body"> {value.postText} </div>
          <div className="footer"> {value.username} </div>
        </div>
        )}) 
    )
}

export default Home;