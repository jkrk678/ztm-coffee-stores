import styles from './Banner.module.css'

const Banner = ({ handleOnClick, buttonText }) => {
    const { container, title, title1, title2, subTitle, button } = styles;
    return(
        <div className={container}>
            <h1 className={title}>
                <span className={title1}>Coffee</span>&nbsp;
                <span className={title2}>Connoisseur</span>
            </h1>
            <p className={subTitle}>Discover your local coffee shops!</p>
            <button
                className={button}
                onClick={handleOnClick}
            >{buttonText}</button>
        </div>
    )
}

export default Banner;