/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug)
                .then((post) => {
                    if (post) setPost(post);
                    else navigate("/");
                })
                .catch(() => navigate("/"));
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-10 min-h-screen bg-gradient-to-br from-purple-200 via-white to-blue-200">
            <Container>
                <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-xl overflow-hidden">
                    <div className="relative mb-4">
                        <img
                            src={appwriteService.getFileView(post.featuredImage)}
                            alt={post.title}
                            className="w-full h-[300px] object-contain transition-transform duration-300 hover:scale-105"
                        />
                        {isAuthor && (
                            <div className="absolute right-4 top-4 flex gap-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500" className="hover:bg-green-600 cursor-pointer">
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    bgColor="bg-red-500"
                                    className="hover:bg-red-600 cursor-pointer"
                                    onClick={deletePost}
                                >
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                    <hr className="border-t border-gray-300 my-2" />



                    <div className="p-3 mt-2 bg-gradient-to-r from-purple-200 via-purple-100 to-blue-200 rounded-3xl">
                        <h1 className="text-3xl font-bold mb-4 text-purple-800 text-center">
                            {post.title}
                        </h1>
                        <div className="text-gray-700 leading-relaxed prose prose-sm sm:prose lg:prose-lg max-w-none">
                            {parse(post.content)}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    ) : (
        <div className="min-h-screen mt-5 flex items-center justify-center text-gray-500">
            Loading post...
        </div>
    );
}
