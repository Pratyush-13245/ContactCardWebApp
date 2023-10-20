import React, { useEffect, useState } from 'react';
import './App.css'
import ContactCard from './ContactCard';

function App() {
    const [results, setResults] = useState([])

    useEffect(()=> {
        fetch("https://randomuser.me/api/?results=20")
        .then(response => response.json())
        .then(response => {
           
            console.log(response)   
            setResults(response.results)
        })
    }, [])

    return (
        <div>
        {results?.map((result, index) => {
            return(
            <ContactCard key = {index}
            avatarUrl = {result.picture.large}
            name = {result.name.first}
            email = {result.email}
            age = {result.dob.age}
            />
            
            )
        })}

            </div>
    );
}

export default App;