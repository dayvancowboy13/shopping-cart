import PropTypes from "prop-types";
import classes from './styles/ProductCard.module.css';
import { Link } from "react-router-dom";
import { checkPriceDecimal, trimTextString } from "./UtilityFunctions";

export default function ProductCard(props) {
    // console.log(props.data)
    // console.log(classes.card)
    return (
        <Link to={`product${props.data.id}`}>
            <div className={classes.card}>
                <img src={props.data.image}></img>
                <h1 className={classes.productTitle}>{trimTextString(props.data.title)}</h1>
                <h2 className={classes.productPrice}>Price: ${checkPriceDecimal(props.data.price)}</h2>
            </div>
        </Link>
    );
}

ProductCard.propTypes = {
    data: PropTypes.object,
}