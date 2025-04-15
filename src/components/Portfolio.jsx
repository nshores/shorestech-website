import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/outline';

const Portfolio = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch more repos to ensure we get the most starred ones
        fetch('https://api.github.com/users/nshores/repos?per_page=100')
            .then(response => {
                if (!response.ok) {
                    throw new Error('GitHub API request failed');
                }
                return response.json();
            })
            .then(data => {
                // Sort by stars (highest first) and take the top 3
                const sortedRepos = data
                    .sort((a, b) => b.stargazers_count - a.stargazers_count)
                    .slice(0, 3);

                setRepos(sortedRepos);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching GitHub repos:', err);
                setError('Failed to load GitHub repositories');
                setLoading(false);
            });
    }, []);

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Check out some of my most popular open-source projects
                    </p>
                </div>

                {loading ? (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <p className="mt-4 text-gray-600">Loading repositories...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-12 text-red-500">{error}</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {repos.map(repo => (
                            <motion.div
                                key={repo.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-semibold text-blue-600">{repo.name}</h3>
                                    <div className="flex items-center">
                                        <StarIcon className="h-5 w-5 text-yellow-500 mr-1" />
                                        <span>{repo.stargazers_count}</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4 overflow-hidden text-ellipsis h-[4.5rem]">{repo.description || "No description available"}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">{repo.language || "Various"}</span>
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        View on GitHub →
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/nshores"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio; 