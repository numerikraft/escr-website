import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import BlogPostOne from './BlogPostOne';
import BlogPostTwo from './BlogPostTwo';

export default function BlogPost() {
  const { id } = useParams();

  if (id === '1') {
    return <BlogPostOne />;
  }

  if (id === '2') {
    return <BlogPostTwo />;
  }

  return <Navigate to="/blog" replace />;
}
