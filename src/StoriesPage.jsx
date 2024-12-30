// StoriesPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Stories from 'react-insta-stories';
import './StoriesPage.css';

const StoriesPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { stories } = location.state || { stories: [] };

    const handleAllStoriesEnd = () => {
        navigate('/'); // Перенаправляем на главный экран
    };

    return (
        <div className="stories-container">
            <div className="stories-wrapper">
                <Stories
                    stories={stories}
                    defaultInterval={5000}
                    width="100%"
                    height="100%"
                    onAllStoriesEnd={handleAllStoriesEnd}
                />
            </div>
        </div>
    );
};

export default StoriesPage;
