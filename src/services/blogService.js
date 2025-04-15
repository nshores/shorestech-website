import axios from 'axios';

const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
const BLOG_URL = 'https://opsandautomation.com';
const PLACEHOLDER_IMAGE = '/blog-preview-placeholder.svg';

export async function fetchBlogPosts() {
    try {
        // Fetch the blog page
        const response = await axios.get(CORS_PROXY + encodeURIComponent(BLOG_URL));
        const html = response.data;

        // Extract blog posts from HTML
        const posts = [];
        const postElements = html.match(/<article[^>]*>[\s\S]*?<\/article>/g) || [];

        for (let i = 0; i < Math.min(3, postElements.length); i++) {
            const titleMatch = postElements[i].match(/<h2[^>]*>(.*?)<\/h2>/);
            const dateMatch = postElements[i].match(/<time[^>]*>(.*?)<\/time>/);
            const excerptMatch = postElements[i].match(/<p[^>]*>(.*?)<\/p>/);
            const linkMatch = postElements[i].match(/href="([^"]*)"/) || [null, ''];
            const imageMatch = postElements[i].match(/<img[^>]*src="([^"]*)"/) || [null, PLACEHOLDER_IMAGE];

            posts.push({
                title: titleMatch ? titleMatch[1].replace(/<[^>]*>/g, '') : 'Recent Blog Post',
                date: dateMatch ? dateMatch[1] : new Date().toLocaleDateString(),
                excerpt: excerptMatch ? excerptMatch[1].slice(0, 150) + '...' : '',
                link: linkMatch[1].startsWith('http') ? linkMatch[1] : `${BLOG_URL}${linkMatch[1]}`,
                image: imageMatch[1].startsWith('http') ? imageMatch[1] : PLACEHOLDER_IMAGE
            });
        }

        // If no posts were found, return fallback content
        if (posts.length === 0) {
            return [{
                title: "Visit Our Blog",
                date: "Recent",
                excerpt: "Check out our latest articles on Kubernetes, DevOps, and cloud native technologies...",
                link: BLOG_URL,
                image: PLACEHOLDER_IMAGE
            }];
        }

        return posts;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        // Return fallback data if the fetch fails
        return [{
            title: "Visit Our Blog",
            date: "Recent",
            excerpt: "Check out our latest articles on Kubernetes, DevOps, and cloud native technologies...",
            link: BLOG_URL,
            image: PLACEHOLDER_IMAGE
        }];
    }
} 