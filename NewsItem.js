import React, { Component } from "react";

export class NewsItem extends Component {
    
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src= {!imageUrl?"https://nypost.com/wp-content/uploads/sites/2/2024/05/newspress-collage-gu2nwi3sr-1716624068147.jpg?quality=75&strip=all&1716609780&w=1024":imageUrl}  
           className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
