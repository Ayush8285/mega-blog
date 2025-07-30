/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        appwriteService.getPosts()
            .then((response) => {
                if (response && response.documents) {
                    setPosts(response.documents);
                } else {
                    setError("No posts found.");
                }
            })
            .catch((err) => {
                console.error("Failed to fetch posts:", err);
                setError("Something went wrong while loading posts.");
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="w-full min-h-screen py-10 bg-gradient-to-br from-purple-300 via-blue-1200 to-pink-200">
            <Container>
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    ✍️ Explore All Blog Posts
                </h2>

                {loading ? (
                    <p className="text-center text-gray-500 text-lg">Loading posts...</p>
                ) : error ? (
                    <p className="text-center text-red-500 text-lg">{error}</p>
                ) : posts.length === 0 ? (
                    <p className="text-center text-gray-600 text-lg">No posts available yet.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <PostCard key={post.$id} {...post} />
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
}

export default AllPosts;
