import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="error">
            <p>Oopsy boopsy! That page wasnt found!</p>
            <Link to='/'>Take me back to somewhere safe!</Link>
        </div>
    );
}