'use client'
import React, { useState } from 'react';

function FetchExample() {
    const [postData, setPostData] = useState<null|any>(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('localhost:3000/api/user');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPostData(data);
        } catch (error) {
         console.log(error)
        }
    };

    return (
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            {postData && (
                <div>
                    <h2>Post Title: {postData.title}</h2>
                    <p>Post Body: {postData.body}</p>
                </div>
            )}
        </div>
    );
}

export default FetchExample;
