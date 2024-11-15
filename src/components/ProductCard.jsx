import PropTypes from "prop-types";
import classes from './ProductCard.module.css';

export default function ProductCard(props) {
    console.log(props.data)
    // console.log(classes.card)
    return (
        <div className={classes.card}>
            <img src={props.data.image}></img>
            <h1>{props.data.title}</h1>
            <h2>Price: ${props.data.price}</h2>
            <p>{props.data.description}</p>
        </div>
    );
}

ProductCard.propTypes = {
    data: PropTypes.object,
}