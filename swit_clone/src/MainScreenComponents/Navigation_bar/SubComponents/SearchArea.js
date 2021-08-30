import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchArea(){
    return(
        <div className = "search_area">
            <div className = "search_bar_icon">
                <FontAwesomeIcon icon={faSearch} className="search" />
            </div>

            <input type="text" placeholder="Search in ..."></input>
        </div>
    );
}

export default SearchArea;

