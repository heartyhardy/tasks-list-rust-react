import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar = ({onSpinnerChange}) => {

    return(
        <div className={styles.parent}>
            <label className={styles.label} htmlFor="idselector">Task ID ►</label>
            <input
             className={styles.spinner} 
             id="idselector" 
             type="number" 
             min="0" 
             max="100"
             onChange={(e) => onSpinnerChange(e.target.value)}
             />
        </div>
    )
}

export default SearchBar