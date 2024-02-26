// import React from "react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

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
    <div className="main">
      <div>
        <div className="headerDiv">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="kalviumIMG"
          />
          <h4 className='Books'>Books</h4>
          <input
            type="text"
            placeholder="SearchBooks"
            className="searchBar"
            onChange={handleInputRec}
          />
          <Link to="/Register">
            <Button variant="outlined">Register</Button>
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
