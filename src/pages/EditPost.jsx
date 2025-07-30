/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug)
                .then((res) => {
                    if (res) {
                        setPost(res);
                    } else {
                        setError("Post not found");
                    }
                })
                .catch((err) => {
                    console.error("Failed to fetch post:", err);
                    setError("Something went wrong.");
                })
                .finally(() => setLoading(false));
        } else {
            navigate('/');
        }
    }, [slug, navigate]);

    return (
        <div className="min-h-screen py-10 bg-gradient-to-tr from-cyan-600 via-white to-gray-500">
            <Container>
                {loading ? (
                    <p className="text-center text-gray-500 text-lg">Loading post...</p>
                ) : error ? (
                    <p className="text-center text-red-500 text-lg">{error}</p>
                ) : (
                    <>
                        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
                            ✏️ Edit Post
                        </h2>
                        <PostForm post={post} />
                    </>
                )}
            </Container>
        </div>
    );
}

export default EditPost;
