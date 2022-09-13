import { useEffect, useState } from "react";
import PostItem from "./components/PostItem";

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://react-api.cederdorff.com/wp-json/wp/v2/posts?_embed")
            .then(res => res.json())
            .then(setPosts);
    }, []);

    return (
        <>
            <header className="topbar">
                <h1>Fetch Posts From Headless WP</h1>
            </header>
            <main className="page">
                <section className="grid-container">
                    {posts.map(post => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </section>
            </main>
        </>
    );
}

export default App;
