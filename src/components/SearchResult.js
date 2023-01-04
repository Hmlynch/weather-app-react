import { Link } from 'react-router-dom';

export default function SearchResult(props) {
    function buildSearchResult() {
        if (props.showLink) {
            return (
                <h2><Link to={`/profileSearch/${props.searchResult.uid}`}>{ props.searchResult.location }</Link></h2>
            )
        } else {
            return (
                <h2>{ props.searchResult.location }</h2>
            )
        }
    }

    return (
        <div className="searchResult">
            { buildSearchResult() }
            <div className="bottom">
            <div className="location">
              <h1>{data.name}</h1>
            </div>
            <div className="high">
              <h2>High</h2>
              {data.main ? <p>{data.main.temp_max.toFixed()}°F</p> : null}
            </div>
            <div className="low">
              <h2>Low</h2>
              {data.main ? <p>{data.main.temp_min.toFixed()}°F</p> : null}
            </div>
            <div className="forecast">
              <h2>Forecast</h2>
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
            <div className="humidity">
              <h2>Humidity</h2>
              {data.main ? <p>{data.main.humidity}</p> : null}
            </div>
          </div>
        </div>
    )
}