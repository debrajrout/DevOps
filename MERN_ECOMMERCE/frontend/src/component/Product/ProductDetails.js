import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getProductDetails, newReview } from "../../actions/productAction";
import { Rating } from "@material-ui/lab";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from '../../actions/cartAction';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button
} from "@material-ui/core";
import { NEW_REVIEW_RESET } from '../../constants/productConstants';

const ProductDetails = ({ match }) => {
    const dispatch = useDispatch();
    /*Basically dispatch is used as a callback which gets invoked once some async action is complete. In redux-thunk dispatch is simply a function which dispatches an action to the Redux store after, let's say, you fetch data from an API (which is asynchronous). You can pass any function you like to .then() or .catch() of some Promise and it will be invoked upon success or failure.*/
    const alert = useAlert();

    const { id } = useParams();

    const { product, loading, error } = useSelector((state) => state.productDetails); // Pulling data from redux-store
    const { success, error: reviewError } = useSelector((state) => state.newReview);

    const options = {
        // edit: false,
        // color: "rgba(20, 20, 20, 0.1)",
        // activeColor: "#FFB100",
        // size: window.innerWidth < 600 ? 20 : 25,
        size: "large",
        value: product.ratings,
        // isHalf: true,
        readOnly: true,
        precision: 0.5,
    };
    
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const increaseQuantity = () => {
        if(product.Stock <= quantity)
        {
            return;
        }
        const qty = quantity + 1;
        setQuantity(qty);
    }

    const decreaseQuantity = () => {
        if(1 >= quantity)
        {
            return;
        }
        const qty = quantity - 1;
        setQuantity(qty);
    }

    const addToCartHandler = () => {
        dispatch(addItemsToCart(id, quantity));
        alert.success("Item Added To Cart!");
    }

    const submitReviewToggle = () => {
        open ? setOpen(false) : setOpen(true); // for swapping
    }

    const reviewSubmitHandler = () => {
        const myForm = new FormData();

        myForm.set("rating", rating);
        myForm.set("comment", comment);
        myForm.set("productId", id);

        dispatch(newReview(myForm));
        setOpen(false);
    }

    useEffect(() => {                // Store the data in redux store, but we will not get the product directly
        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if(reviewError) {
            alert.error(reviewError);
            dispatch(clearErrors());
        }

        if(success)
        {
            alert.success("Review Submitted Successfully!");
            dispatch({ type: NEW_REVIEW_RESET });
        }
        dispatch(getProductDetails(id));
    }, [dispatch, id, error, alert, reviewError, success]);
  return (
    <Fragment>
        {loading ? (
            <Loader />
            ) : (
                <Fragment>
                <MetaData title={`${product.name} -- ECOMMERCE`} />
                <div className='ProductDetails'>
                    <div>
                        <Carousel className='carou'>
                            {product.images && 
                                product.images.map((item, i) => (
                                    <img 
                                        className = "CarouselImage" 
                                        key = {item.url} 
                                        src = {item.url} 
                                        alt = {`${i} Slide`}
                                    />
                                ))
                            }
                        </Carousel>
                    </div>

                    <div>
                        <div className='detailsBlock-1'>
                            <h2>{product.name}</h2>
                            <p>{product._id}</p>
                        </div>

                        <div className='detailsBlock-2'>
                            <Rating {...options} />
                            {/* <ReactStars {...options} /> */}
                            <span className='detailsBlock-2-span'> ({product.numOfReviews} Reviews) </span>
                        </div>

                        <div className='detailsBlock-3'>
                            <h1>{`₹${product.price}`}</h1>
                            <div className='detailsBlock-3-1'>
                                <div className='detailsBlock-3-1-1'>
                                    <button onClick={decreaseQuantity}>-</button>
                                    <input readOnly type="number"  value={quantity}/>
                                    <button onClick={increaseQuantity}>+</button>
                                </div>{" "}
                                <button disabled={product.Stock < 1 ? true : false} className='cartButton' onClick={addToCartHandler}>Add To Cart</button>
                            </div>

                            <p>
                                Status : {" "}
                                <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                                {product.Stock < 1 ? "outOfStock" : "InStock"}
                                </b>
                            </p>
                        </div>

                        <div className='detailsBlock-4'>
                            Description : <p>{product.description}</p>
                        </div>

                        <button onClick={submitReviewToggle} className='submitReview'>Submit Review</button>
                    </div>
                </div>

                <h3 className='reviewsHeading'>REVIEWS</h3>

                <Dialog
                    aria-labelledby="simple-dialog-title"
                    open={open}
                    onClose={submitReviewToggle}
                >
                    <DialogTitle>Submit Review</DialogTitle>
                    <DialogContent className="submitDialog">
                    <Rating
                        onChange={(e) => setRating(e.target.value)}
                        value={rating}
                        size="large"
                    />

                    <textarea
                        className="submitDialogTextArea"
                        cols="30"
                        rows="5"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={submitReviewToggle} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={reviewSubmitHandler} color="primary">
                        Submit
                    </Button>
                    </DialogActions>
                </Dialog>

                {product.reviews && product.reviews[0] ? (
                    <div className='reviews'>
                        {product.reviews && product.reviews.map((review) => <ReviewCard review={review} />)}
                    </div>
                ) : (
                    <p className='noReviews'>No Reviews Yet!</p>
                )}
                </Fragment>
            )}
    </Fragment>
  )
}

export default ProductDetails;