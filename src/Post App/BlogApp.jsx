import React, { useCallback, useEffect, useRef, useState } from "react";
import BlogInput from "./Components/BlogInput";
import { v4 as uuid } from "uuid";
import BlogDisplay, { MemoBlogDisplay } from "./Components/BlogDisplay";

const BlogApp = () => {
    const [count, setCount] = useState(0);
    const [state, setState] = useState([]);
    const timerRef = useRef(null);

    useEffect(() => {
        if ( !timerRef.current ) timerRef.current = setInterval(()=> {
            setCount(count=>count+1);
        }, 1000);

        return () => {
            timerRef.current && clearInterval(timerRef.current);
        }
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

    const toggleVerify = useCallback(  ( id ) => {
        console.log(state);
        const updatedState = state.map(blog=> blog.id === id ? { ...blog, verify: !blog.verify } : blog );
        setState( updatedState );
    },[state]);

    // const toggleVerify = ( id ) => {
    //     setState( prev => prev.map(blog=> blog.id === id ? { ...blog, verify: !blog.verify } : blog ) )
    // }

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem", width: "50%", margin: "auto"}}>
            <div>Count : { count }</div>
            <BlogInput onBlogCreate={onPostCreate} />
            <div style={{display: "flex", flexDirection: "column", gap: "1rem" }}>
                {
                    state.map( post => (
                        // <BlogDisplay
                        //     key={post.id}
                        //     title={post.title}
                        //     body={post.body}
                        //     id={post.id}
                        //     verify={post.verify}
                        //     onToggle={toggleVerify}
                        // />
                        <MemoBlogDisplay
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