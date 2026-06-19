import styles from './Tag.css'

function Tag({className="", children, onClick, type="submit", altBtn, ...props}){

    const classes = className.split(' ')
        .map(cls => styles[cls] || cls).join(' ')

    return(
        <button className={`${styles.button} ${classes}`} type={type} onClick={onClick} {...props}>
            {children || <>Submit</>} 
        </button>
    );
}

export default Tag