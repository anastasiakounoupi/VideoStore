import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { movies: [] };

    onSearchSubmit = async (movie) => {
        const response = await axios.get('http://www.omdbapi.com/', {
            params: {
                apikey: 'f190f81c',
                s: movie
            }

        });
        console.log(response);
        this.setState({ movies: response.data.Search });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList movies={this.state.movies} />
            </div>
        );
    }
}

export default App;