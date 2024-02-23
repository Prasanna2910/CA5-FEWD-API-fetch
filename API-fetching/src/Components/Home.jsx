// import React from "react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
// import image from './assets/kalviumimage-removebg-preview.png';
import { Link } from 'react-router-dom';
// import Register from './register';

function Home() {
  const [data, setData] = useState([]);
  const [state, setState] = useState([]);

  const handleInputRec = (e) => {
    if (e.target.value == '') {
      getData();
    } else {
      const inputText = e.target.value.toLowerCase();
      const modifiedtext = state.filter((element) => {
        const name = element.title.toLowerCase();
        return name.includes(inputText);
      });

      setData(modifiedtext);
    }
  };
  const getData = () => {
    axios
      .get('https://reactnd-books-api.udacity.com/books', {
        headers: {
          Authorization: 'whatever-you-want',
        },
      })
      .then((response) => {
        console.log(response);
        setData(response.data.books);
        setState(response.data.books);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <div>
        <div className="headerDiv">
          <h3 className="kalviumImage">Kalvium Books</h3>
          <input
            type="text"
            placeholder="SearchBooks"
            className="searchBar"
            onChange={handleInputRec}
          />
          <Link to="/Register">
            <button className="registerbutton">Register</button>
          </Link>
        </div>
        <div className="BooksDiv">
          {data?.map(function (ele, index) {
            return (
              <div key={index} className="elementsDiv">
                <img src={ele.imageLinks.thumbnail} alt="" className="img" />
                <p className="titleText">{ele.title}</p>
                <div>
                  <p>Rating: {ele.averageRating}⭐</p>
                  <p>Rs. "{(Math.random() * 100).toFixed(2)}" Free</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Home;
