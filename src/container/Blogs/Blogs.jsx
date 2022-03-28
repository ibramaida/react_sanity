import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";

import "./Blogs.scss";

const Blogs = () => {
  const [blogs, setBloge] = useState([]);

  useEffect(() => {
    const query = '*[_type == "blogs"]';
    client.fetch(query).then((data) => setBloge(data));
  }, []);
  return (
    <div className="app__blogs">
      {blogs.map((blog) => (
        <div className="app__blogs-item" key={blog.title}>
          <div>
            <img src={urlFor(blog.mainImage)} alt={blog.title} />
          </div>
          <h1>{blog.title}</h1>
          <p>{blog.author}</p>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
