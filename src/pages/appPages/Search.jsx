import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Heading2 from '../../components/common/Heading2';

const Search = () => {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const query = queryParams.get('query');
        if (query) {
            setSearchTerm(query);
            // In a real application, you would make an API call here to fetch results
            // For now, simulating an async call
            setLoading(true);
            setTimeout(() => {
                setSearchResults([
                    { id: 1, title: `Result for "${query}" (Example 1)`, description: "This is a placeholder description for the first search result." },
                    { id: 2, title: `Result for "${query}" (Example 2)`, description: "This is a placeholder description for the second search result, potentially more relevant." },
                    { id: 3, title: `Result for "${query}" (Example 3)`, description: "Another example of a search result matching your query." },
                ]);
                setLoading(false);
            }, 500);
        } else {
            setSearchResults([]);
            setLoading(false);
        }
    }, [location.search]);

    return (
        <div className="container mx-auto px-4 py-16">
            <Heading2 text={`Search Results for "${searchTerm}"`} />
            <p className="text-center text-gray-600 mt-4 mb-8">
                Showing results related to your query across Immify.
            </p>

            {loading ? (
                <p className="text-center text-blue-600 mt-12">Loading search results...</p>
            ) : searchResults.length > 0 ? (
                <div className="mt-12">
                    <div className="space-y-6">
                        {searchResults.map((result) => (
                            <div key={result.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-2">{result.title}</h4>
                                <p className="text-gray-700 leading-relaxed">{result.description}</p>
                                <a href="#" className="text-blue-500 hover:underline mt-4 inline-block text-sm font-medium">View Full Article</a>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-12 text-lg">No results found for "{searchTerm}". Please try a different query.</p>
            )}
        </div>
    );
};

export default Search;
