import classes from './styles/Footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className={classes.footer}>
                Copyright © 2024 Chris Friedrich
                <span className={classes.logoSpan}>
                    <a href='https://github.com/dayvancowboy13'>
                        <img src='../../images/svg/github.svg' /></a>
                </span>
                (dayvancowboy13)
            </footer >
        </>
    )
}