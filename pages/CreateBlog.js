import React from 'react';

const recentBlogs = [
  { id: 1, title: "10 Tips for Selling Your Items", link: "./tips-for-selling" },
  { id: 2, title: "Choosing the Best Laptop for You", link: "./best-laptop-guide" },
  { id: 3, title: "Smartphone Trends in 2024", link: "./smartphone-trends" },
];

const CreateBlog = () => {
  return (
    <div className="extra-section">
     
      <h2>Recent Blogs</h2>
      <div className="help-link">
        <a href="/help">Need Help?</a>
      </div>
      <ul className="blog-list">
        {recentBlogs.map((blog) => (
          <li key={blog.id} className="blog-item">
            <a href={blog.link}>{blog.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateBlog;
