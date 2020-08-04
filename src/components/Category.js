import React, {useState, useEffect} from 'react';
import '../index.css';
import CategoryAdd from './CategoryAdd';
import CategoryRow from './CategoryRow';



// functional component
const Category = () => {
    const [data, setData] = useState([]); //functional component hook
    const url = `http://localhost:5000/category/`;

    useEffect(() => {
        
    })
    
    const getData = () => {
        console.log(url);
        fetch(url)
        .then((response) => {
            // Add this check and throw an error if it fails
            //console.log(response);
            if (!response.ok) {
                throw Error(`There was an error: ${response.statusText}`);
            }
            return response.json();
        })
        .then((response) => {
            console.log(response);
            setData(response.categories); //JSON output from the API
        })
        .catch((error) => console.log(error));
    }

    return (
        <div>
            <h1>Category</h1>
            <button onClick={getData}>Get Category Data</button><br/>
            <CategoryAdd url={url} refreshList={getData} />
            {
                    // if data is not empty show the table
                    data !== [] && 
                        (<div>
                            <h2>List Categories</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Manage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    // if data is not empty execute the map function
                                    data !== [] && data.map(category =>
                                        <CategoryRow key={category.id} category={category} url={url} refreshList={getData} />
                                    )
                                }
                                </tbody>
                            </table>
                        </div>)
            }
        </div>
    )
}

export default Category;