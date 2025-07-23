import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts); // Note: data.posts is the array
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch posts");
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      <input
        className="border px-2 py-1 rounded mb-4 w-full"
        placeholder="Search posts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid gap-4 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <Card key={post.id}>
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
