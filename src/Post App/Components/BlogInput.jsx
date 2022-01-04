import { Button, TextField } from "@mui/material"
import { useState } from "react"

const initValue = {
    title: "",
    body: ""
};

const BlogInput = ({ onBlogCreate }) => {
    const [blog, setBlog] = useState(initValue);

    const handleChange = (e) => {
        setBlog({
            ...blog,
            [e.target.name] : e.target.value
        });
    }

    const handleNewBlog = () => {
        onBlogCreate(blog);
        setBlog(initValue);
    };

    return (
        <div style={{display: "flex", flexDirection: "column", gap:"1rem"}}>
            <TextField variant="outlined" value={blog.title} onChange={handleChange} label="Title" name="title" />
            <TextField variant="outlined" value={blog.body} onChange={handleChange} label="Body" name="body" />
            <Button variant="contained" onClick={handleNewBlog}> Create </Button>
        </div>
    )
}

export default BlogInput;