import React, { Fragment, useEffect, useState } from 'react';
import "./Products.css";
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getProduct} from "../../actions/productAction";
import Loader from '../layout/Loader/Loader';
import ProductCard from '../Home/ProductCard';
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination";
import { Typography, Slider } from  "@mui/material";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";

const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
];

const Products = ({ match }) => {

    const dispatch = useDispatch(); //In Redux, "dispatch" is a function used to send actions
    //This allows the component to dispatch actions to the Redux store and trigger state updates.

    const alert = useAlert();

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 25000]);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);

    const { products, loading, error, productsCount, resultPerPage, filteredProductsCount } = useSelector((state) => state.products);

    // const { params } = useParams();

    // const keyword = match.params.keyword;
    // const keyword = match.params.keyword; 
    const { keyword } = useParams();  // same as const keyword = match.params.keyword;

    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    };

    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    };

    useEffect(() => {
        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }
      dispatch(getProduct(keyword, currentPage, price, category, ratings));
    }, [dispatch, keyword, currentPage, price, category, ratings, alert, error])
    
    // const totalItemsCount = productsCount || 0;

    let count = filteredProductsCount;
    // console.log(count);

  return (
    <Fragment>
        {loading ? ( 
            <Loader />
        ) : (
            <Fragment>

                <MetaData title="PRODUCTS -- ECOMMERCE" />
                <h2 className='productsHeading'>Products</h2>
                <div className='products'>
                    {products && products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>

                {/* Filters */}
                <div className="filterBox">
                    <Typography>Price</Typography>
                    <Slider 
                        value={price}
                        onChange={priceHandler}
                        valueLabelDisplay='auto'
                        aria-labelledby='range-slider'
                        min={0}
                        max={25000}
                    />

                    <Typography>Categories</Typography>
                    <ul className='categoryBox'> 
                        {categories.map((category) => (
                            <li
                                className='category-link'
                                key={category}
                                onClick={() => setCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>

                    <fieldset>
                        <Typography component="legend">Ratings Above</Typography>
                        <Slider 
                            value={ratings}
                            onChange={(e, newRating) => {
                                setRatings(newRating);
                            }}
                            aria-labelledby='continuous-slider'
                            valueLabelDisplay='auto'
                            min={0}
                            max={5}
                        />
                    </fieldset>

                </div>

                {/* Pagination */}
                {resultPerPage < count && (
                    <div className="paginationBox">
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={resultPerPage}
                            totalItemsCount={productsCount}
                            onChange={setCurrentPageNo}
                            nextPageText="Next"
                            prevPageText="Prev"
                            firstPageText="1st"
                            lastPageText="Last"
                            itemClass="page-item"
                            linkClass="page-link"
                            activeClass="pageItemActive"
                            activeLinkClass="pageLinkActive"
                        />
                    </div>
                )}
                
            </Fragment>
        )}
    </Fragment>
  )
}

export default Products;