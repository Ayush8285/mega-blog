/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import contentImg from "../assets/content.webp";
import topic from "../assets/topic.png";
import community from "../assets/community.png";
import blog from "../assets/blog-illustration.avif";
import about from "../assets/about.avif";
import { useSelector } from "react-redux"; // Make sure this is at the top

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status); // true/false

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  const features = [
    {
      title: "📚 Publish Content",
      text: "Write and publish articles with our easy editor.",
      img: contentImg,
    },
    {
      title: "🔍 Discover Topics",
      text: "Read topics curated just for your interests.",
      img: topic,
    },
    {
      title: "💬 Community Engagement",
      text: "Read each other blogs",
      img: community,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-24 sm:py-32 bg-gradient-to-br from-blue-200 via-white to-purple-200 text-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4 sm:px-8">
          {/* Text Content */}
          <div className="lg:w-1/2 text-left">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800 mb-6 animate-fadeIn">
              Welcome to <span className="text-purple-600">Mega Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
              Discover and share knowledge through beautifully written articles.
              Create, read, and engage — all in one place.
            </p>
            {/* Hero Section Button */}
{authStatus ? (
  <a
    href="/add-post"
    className="inline-block bg-purple-600 text-white text-lg font-medium px-8 py-3 rounded-md hover:bg-purple-700 transition-all duration-300 shadow-md"
  >
    Write a Post
  </a>
) : (
  <a
    href="/signup"
    className="inline-block bg-purple-600 text-white text-lg font-medium px-8 py-3 rounded-md hover:bg-purple-700 transition-all duration-300 shadow-md"
  >
    Get Started
  </a>
)}

          </div>

          {/* Image / Illustration */}
          <div className="lg:w-1/2">
            <img
              src={blog}
              alt="Blog Illustration"
              className="w-full max-w-md mx-auto animate-slideInUp"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-24 sm:py-32 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-purple-600">Mega Blog</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              A platform crafted for <strong>writers</strong>,{" "}
              <strong>readers</strong>, and <strong>thinkers</strong>. Whether
              you want to share insights, publish tutorials, or simply tell your
              story—Mega Blog provides a simple and elegant space to do it all
              with ease.
            </p>

            {/* Optional Image / Illustration */}
            <img
              src={about}
              alt="About illustration"
              className="w-full max-w-lg mx-auto rounded-md shadow-md animate-fadeIn"
            />
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-gray-100">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              ✨ Key Features
            </h2>
            <p className="text-lg text-gray-600">
              Explore the powerful tools that make Mega Blog a writer and
              reader’s paradise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Posts Section */}
      <section className="w-full py-20 bg-white">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              📢 Latest Posts
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Dive into fresh content from the community — curated, written, and
              shared by passionate minds.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              {authStatus ? (
                <p className="text-xl">
                  📝 No posts yet. Be the first to share something amazing!
                </p>
              ) : (
                <p className="text-xl">
                  🔒 No posts available. Please log in to view content.
                </p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {posts.map((post) => (
                <PostCard key={post.$id} {...post} />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Call to Action */}
      <section className="w-full py-24 bg-gradient-to-r from-purple-400 via-purple-200 to-blue-300 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            ✍️ Start Writing Today!
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            Create your first post, share your voice, and inspire the world
            through your words.
          </p>
          {/* Call to Action Button */}
{authStatus ? (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="inline-block cursor-pointer bg-white text-purple-700 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-purple-100 transition duration-300"
  >
    🚀 Get Started
  </button>
) : (
  <a
    href="/signup"
    className="inline-block bg-white text-purple-700 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-purple-100 transition duration-300"
  >
    🚀 Get Started
  </a>
)}

        </div>
      </section>
    </div>
  );
}

export default Home;
