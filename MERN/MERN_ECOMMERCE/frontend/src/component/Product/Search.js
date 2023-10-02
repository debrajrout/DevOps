import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Search.css";
import MetaData from "../layout/MetaData";

const Search = ({ history }) => {

  const [keyword, setKeyword] = useState(""); 
  const navigate = useNavigate(); // The useNavigate() hook is likely used for handling navigation within the application.

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    navigate(keyword.trim() ? `/products/${keyword}` : "/products");
  }

  return (
    <Fragment>
        <MetaData title="Search A Product -- ECOMMERCE" />
        <form className='searchBox' onSubmit={searchSubmitHandler}>
            <input 
              type='text'
              placeholder='Search a Product...'
              onChange={(e) => setKeyword(e.target.value)}
            />
            <input type='submit' value="Search" />
        </form>
    </Fragment>
  )
}

export default Search; 