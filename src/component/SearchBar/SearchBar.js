import React from 'react';
// import './SearchBar.css'; // Assuming you will create a CSS file for styling

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };
  
const SearchBar = () => {
    const renderSortByOptions = () =>{
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    }
    return(
        <div>
            <div>
                <ul>{renderSortByOptions()}</ul>
            </div>
            <div>
                <input placeholder="Search Business" />
                <input placeholder="Where" />
            </div>
            <div>
                <a>Let's Go</a>
            </div>
        </div>
    );
}
  
export default SearchBar;
