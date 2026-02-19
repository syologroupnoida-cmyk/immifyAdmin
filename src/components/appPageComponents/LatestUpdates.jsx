import React from 'react';
import { Link } from 'react-router-dom';
import Heading2 from '../common/Heading2';

// Placeholder data for blog posts
const blogPosts = [
    {
        id: 1,
        title: 'Canada’s new pathway for international graduates',
        date: 'Jan 10, 2026',
        category: 'Immigration News',
        imageUrl: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1974&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'Top 5 countries to study abroad in 2026',
        date: 'Jan 08, 2026',
        category: 'Study Abroad',
        imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1974&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'How to prepare for your IELTS exam',
        date: 'Jan 05, 2026',
        category: 'Coaching',
         imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1974&auto=format&fit=crop',
    },
];

const LatestUpdates = () => {
    return (
        <section className="w-full bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <Heading2 text="Latest Updates" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <p className="text-sm text-gray-500 mb-2">{post.date} | {post.category}</p>
                                <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                                <Link to={`/blog/${post.id}`} className="text-blue-600 font-semibold hover:underline">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestUpdates;
