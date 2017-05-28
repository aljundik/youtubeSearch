//AIzaSyCv_wutms4VJgrZUa1kmd_iTXGbxlFe0sU
var React = require('react');
import ReactDom from 'react-dom';

class SearchBar extends React.Component {
    constructor(props) {
        //
        super(props);
        this.state = {
            term: ""
        };
    }


    render() {
        return (
            <div className="search-bar">
                <input
                //when we give the input a value its called a controlled component,
                // its value set by the state when the state changes its value change as well
                    value={this.state.term}
                    onChange={(event) => { this.onInputChange(event.target.value) }} />
            </div>
        );
    }

onInputChange(term){
    this.setState({ term });
    this.props.onSearchTermCange(term);

}


}

module.exports = SearchBar;

// export default SearchBar; another way of exporting