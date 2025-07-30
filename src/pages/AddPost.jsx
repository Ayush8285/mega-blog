/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, PostForm } from '../components';

function AddPost() {
  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-cyan-600 via-cyan-300 to-gray-600 text-white">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
