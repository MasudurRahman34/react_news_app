import React from "react";
const NewsItem = ({ item }) => (
    <div className="card mb-4">
        {item.urlToImage && (
            <img
                className="card-img-top"
                src={item.urlToImage}
                alt={item.title}
            />
        )}

        <div className="card-body">
            <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#424242' }}
            >
                <h5 className={item.title}>{item.title}</h5>

            </a>
            <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#424242' }}
            >
                <p className="card-text">{item.content}</p>

            </a>
            <div className="mt-2 d-flex align-item-center">
                <small>
                    <strong>
                        published at {item.publishedAt}
                    </strong>
                </small>
                <div
                    style={{
                        padding: "0.25rem 0.5rem",
                        background: "#ededed",
                        color: "#424242",
                        borderRadius: ".25rem",
                        display: "inline-block"
                    }}
                    className="ms-auto"
                >
                    <small>{item.source.name}</small>
                </div>
            </div>

        </div>
    </div>

)
export default NewsItem;