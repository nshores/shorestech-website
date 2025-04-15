import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { fetchBlogPosts } from '../services/blogService';
import logo from '../assets/logo.png';

const BlogCard = ({ title, date, excerpt, link, image }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
        <div className="overflow-hidden flex justify-center">
            <img
                src={logo}
                alt={title}
                className="w-1/2 object-contain"
                onError={(e) => {
                    e.target.src = logo
                }}
            />
        </div>
        <div className="p-6">
            <span className="text-sm text-gray-500">{date}</span>
            <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-600 mb-4">{excerpt}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
            >
                Read More →
            </a>
        </div>
    </motion.div>
);

const LoadingCard = () => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
        <div className="h-48 bg-gray-200" />
        <div className="p-6">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4" />
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
            <div className="h-4 bg-gray-200 rounded w-full mb-4" />
            <div className="h-4 bg-gray-200 rounded w-full mb-4" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
        </div>
    </div>
);

const BlogPreview = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;

        const loadPosts = async () => {
            try {
                const fetchedPosts = await fetchBlogPosts();
                if (mounted) {
                    setPosts(fetchedPosts);
                    setLoading(false);
                }
            } catch (err) {
                console.error('Error loading blog posts:', err);
                if (mounted) {
                    setError('Failed to load blog posts');
                    setLoading(false);
                    // Fallback content
                    setPosts([{
                        title: "Visit Our Blog",
                        date: "Recent",
                        excerpt: "Check out our latest articles on Kubernetes, DevOps, and cloud native technologies...",
                        link: "https://opsandautomation.com",
                        image: logo
                    }]);
                }
            }
        };

        loadPosts();

        return () => {
            mounted = false;
        };
    }, []);

    if (error) {
        console.log('Rendering error state:', error);
    }

    return (
        <section id="blog" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
                    <p className="text-xl text-gray-600">
                        Expert articles on Kubernetes, DevOps, and cloud native technologies
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        <>
                            <LoadingCard />
                            <LoadingCard />
                            <LoadingCard />
                        </>
                    ) : posts.length > 0 ? (
                        posts.map((post, index) => (
                            <BlogCard key={index} {...post} />
                        ))
                    ) : (
                        <div className="col-span-3 text-center text-gray-600">
                            <p>No blog posts available at the moment.</p>
                            <a
                                href="https://opsandautomation.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
                            >
                                Visit our blog →
                            </a>
                        </div>
                    )}
                </div>
                <div className="text-center mt-12">
                    <a
                        href="https://opsandautomation.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        View All Posts
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BlogPreview; 