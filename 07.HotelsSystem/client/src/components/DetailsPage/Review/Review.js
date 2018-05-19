import React from 'react';

const review = ({ comment, rating, user, date }) => {
    return (
        <div className="col-6 offset-3 mr-1">
            <div className="card">
                <div className="card-header">
                    <strong>{user}</strong> - {rating} stars
                    <footer style={{ fontStyle: 'italic' }}>posted on {date}</footer>
                </div>
                <p>{comment}</p>
            </div>
        </div>
    );
}

export default review;