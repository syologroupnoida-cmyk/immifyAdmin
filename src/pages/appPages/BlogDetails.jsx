import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Tag, 
  User, 
  ChevronLeft, 
  Share2, 
  Bookmark, 
  Clock, 
  ArrowRight 
} from 'lucide-react';

// Full Data
const blogPosts = [
    {
        id: 1,
        title: 'Canada’s new pathway for international graduates',
        date: 'Jan 10, 2026',
        author: 'Immigration Team',
        category: 'Immigration News',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1974&auto=format&fit=crop',
        content: "Canada has just announced a groundbreaking new pathway for international graduates, aiming to retain top talent within its borders. This policy shift focuses on streamlining the transition from study permits to permanent residency. Key highlights include reduced work experience requirements and a faster processing timeline for those in high-demand sectors like healthcare and technology. This move is expected to benefit thousands of students who have chosen Canada as their educational home."
    },
    {
        id: 2,
        title: 'Top 5 countries to study abroad in 2026',
        date: 'Jan 08, 2026',
        author: 'Education Expert',
        category: 'Study Abroad',
        readTime: '8 min read',
        imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1974&auto=format&fit=crop',
        content: 'Choosing where to study is a life-changing decision. In 2026, countries like Germany, Australia, and the UK continue to lead, but new contenders are emerging. Germany offers tuition-free education at public universities, while Australia has revamped its post-study work visas. This guide compares living costs, quality of education, and post-graduation opportunities across the globe to help you make an informed choice.'
    },
    {
        id: 3,
        title: 'How to prepare for your IELTS exam',
        date: 'Jan 05, 2026',
        author: 'IELTS Coach',
        category: 'Coaching',
        readTime: '10 min read',
        imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1974&auto=format&fit=crop',
        content: 'Success in the IELTS exam requires more than just English proficiency; it requires a strategic approach. Start by understanding the test format: Listening, Reading, Writing, and Speaking. Consistent practice with authentic materials is key. Don\'t ignore the importance of time management during the test. Our experts suggest taking at least five full-length mock tests before the actual exam to build stamina and confidence.'
    },
];

const BlogDetails = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));
    const [copied, setCopied] = useState(false);

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Scroll to top when post changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <h2 className="text-3xl font-bold text-gray-800">Post Not Found</h2>
                <p className="text-gray-500 mt-2">The article you're looking for might have been moved.</p>
                <Link to="/" className="mt-6 flex items-center gap-2 text-blue-600 font-semibold hover:underline">
                    <ChevronLeft size={20} /> Back to Homepage
                </Link>
            </div>
        );
    }

    return (
        <section className="w-full bg-[#f8fafc] min-h-screen py-10 lg:py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                
                {/* Navigation & Actions */}
                <div className="flex justify-between items-center mb-8">
                    <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors font-medium">
                        <ChevronLeft size={20} />
                        <span>Back to News</span>
                    </Link>
                    <div className="flex gap-3">
                        <button onClick={handleShare} className="p-2 bg-white rounded-full border border-gray-200 hover:shadow-md transition-shadow text-gray-600">
                            <Share2 size={18} />
                        </button>
                        {copied && <span className="text-sm text-gray-500">Copied!</span>}
                        <button className="p-2 bg-white rounded-full border border-gray-200 hover:shadow-md transition-shadow text-gray-600">
                            <Bookmark size={18} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* Main Content Area */}
                    <article className="lg:col-span-8">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                            {/* Feature Image */}
                            <img 
                                src={post.imageUrl} 
                                alt={post.title} 
                                className="w-full h-[300 md:h-[450px] object-cover"
                            />
                            
                            <div className="p-6 md:p-10">
                                {/* Badge & Stats */}
                                <div className="flex flex-wrap items-center gap-4 mb-6">
                                    <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-lg border border-blue-100">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                                        <Clock size={16} />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                                    {post.title}
                                </h1>

                                {/* Author Card */}
                                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                                        {post.author[0]}
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-bold leading-none">{post.author}</p>
                                        <p className="text-gray-500 text-sm mt-1">{post.date}</p>
                                    </div>
                                </div>

                                {/* Article Body */}
                                <div className="prose prose-blue prose-lg max-w-none text-gray-700">
                                    <p className="text-xl text-gray-600 leading-relaxed italic mb-8 border-l-4 border-blue-500 pl-4 bg-gray-50 py-4">
                                        {/* Intro snippet */}
                                        Summary: Expert insights on {post.title.toLowerCase()}.
                                    </p>
                                    <div className="leading-loose space-y-6">
                                        {post.content}
                                    </div>
                                    <p className="mt-8">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                    </p>
                                </div>

                                {/* Bottom Tags */}
                                <div className="mt-12 flex flex-wrap gap-2">
                                    <span className="text-sm font-semibold text-gray-400 mr-2 flex items-center gap-1">
                                        <Tag size={16} /> Tags:
                                    </span>
                                    {['Education', 'Guide', 'Global'].map(tag => (
                                        <span key={tag} className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 cursor-pointer">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 flex flex-col gap-8">
                        {/* Featured Sidebar Card */}
                        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Plan Your Future</h3>
                                <p className="text-blue-200 mb-6">Connect with our certified consultants today for personalized guidance.</p>
                                <button className="w-full bg-white text-blue-900 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group">
                                    Consult Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                            {/* Decorative Circle */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                        </div>

                        {/* Recent Posts Widget */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                                Related Stories
                            </h3>
                            <div className="space-y-6">
                                {blogPosts.filter(p => p.id !== post.id).map(related => (
                                    <Link to={`/blog/${related.id}`} key={related.id} className="flex gap-4 group cursor-pointer">
                                        <div className="relative shrink-0">
                                            <img src={related.imageUrl} className="w-20 h-20 object-cover rounded-2xl group-hover:opacity-80 transition-opacity" alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h4 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                                                {related.title}
                                            </h4>
                                            <span className="text-[10px] text-gray-400 mt-2 font-medium flex items-center gap-1">
                                                <Calendar size={12} /> {related.date}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </section>
    );
};

export default BlogDetails;