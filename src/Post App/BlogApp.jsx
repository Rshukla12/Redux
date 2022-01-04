import { useEffect, useState } from "react";
import BlogInput from "./Components/BlogInput";
import { v4 as uuid } from "uuid";
import BlogDisplay from "./Components/BlogDisplay";

const BlogApp = () => {
    const [count, setCount] = useState(0);
    const [state, setState] = useState([]);

    useEffect(() => {
        setInterval(()=> {
            setCount(count=>count+1);
        }, 1000);
    }, []);

    const onPostCreate = ( {title, body} ) => {
        const newTask = {
            id: uuid(),
            title,
            body,
            verify: false
        };
        setState(prev => [...prev, newTask]);
    };

    const toggleVerify = ( id ) => {
        setState( prev => prev.map(blog=> blog.id === id ? { ...blog, verify: !blog.verify } : blog ) )
    }

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem", width: "50%", margin: "auto"}}>
            <div>Count : { count }</div>
            <BlogInput onBlogCreate={onPostCreate} />
            <div style={{display: "flex", flexDirection: "column", gap: "1rem" }}>
                {
                    state.map( post => (
                        <BlogDisplay
                            key={post.id}
                            title={post.title}
                            body={post.body}
                            id={post.id}
                            verify={post.verify}
                            onToggle={toggleVerify}
                        />
                    ) )
                }
            </div>
        </div>
    )
};

export default BlogApp;