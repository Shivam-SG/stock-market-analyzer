import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
    const [selectedTicker, setSelectedTicker] = useState('AAPL');

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = "9p70BQvR7pnuqYpWLOJ7RJuPfFJWHgVK";
      const limit = '20';
            const date = '2022-11-14';

            try {
                const response = await axios.get(`https://api.polygon.io/v2/reference/news?ticker=${selectedTicker}&order=desc&limit=${limit}&published_utc.gte=${date}&sort=published_utc&apiKey=${apiKey}`);
                const filteredNews = response.data.results.filter(item => item.image_url !== null);
                setNews(filteredNews);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
    };

    fetchNews();
  }, [selectedTicker]);

  const handleTickerChange = (event) => {
    setSelectedTicker(event.target.value);
};

  return (
    <div data-theme = 'light'>
      <div className="container mx-auto">
            <h2 className="text-center text-2xl font-bold mb-4">News</h2>
            <div className="mb-4">
                <label htmlFor="ticker" className="block text-gray-700 font-bold mb-2">Select Ticker:</label>
                <select id="ticker" value={selectedTicker} onChange={handleTickerChange} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500">
                    <option value="AAPL">APPLE</option>
                    <option value="GOOGL">GOOGLE</option>
                    <option value="MSFT">MICROSOFT</option>
                    {/* <option value="ARKG">ARKG</option>
                    <option value="ARKF">ARKF</option>
                    <option value="NIU">NIU</option>
                    <option value="DDD">DDD</option>
                    <option value="DOCU">DOCU</option> */}
                </select>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {news.map((item, index) => (
                    <li key={index} className="bg-white rounded-lg shadow-lg p-4">
                        <img src={item.image_url} alt="News" className="rounded-lg w-full h-auto mb-2" />
                        <p className="text-gray-800">{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default News;
