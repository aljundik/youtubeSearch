import _  from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCv_wutms4VJgrZUa1kmd_iTXGbxlFe0sU';

YTSearch({ key: API_KEY, term: 'surfboards' }, function (data) {
    console.log(data);
})


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state =
            {
                videos: [],
                selectedVideo: null
            };
            this.videoSearch('surfboards');

    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }
    render() {
        const videoSearch =_.debounce((term)=>{this.videoSearch(term)},400)
        return (
            <div>
                <SearchBar onSearchTermCange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </div>
        )
    }
}

ReactDom.render(
    <App />, document.getElementById('app')
);

