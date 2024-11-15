import PropTypes from "prop-types";
import classes from './ProductCard.module.css';
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    // console.log(props.data)
    // console.log(classes.card)
    return (
        <Link to={`product${props.data.id}`}>
            <div className={classes.card}>
                <img src={props.data.image}></img>
                <h1>{props.data.title}</h1>
                <h2>Price: ${props.data.price}</h2>
                <p>{props.data.description}</p>
            </div>
        </Link>
    );
}

ProductCard.propTypes = {
    data: PropTypes.object,
}