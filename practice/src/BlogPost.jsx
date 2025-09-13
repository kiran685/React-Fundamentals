function BlogPost({ author, title, description }) {
    return (
        <div>
            <h3>{title}</h3>
            <p><strong>Author:</strong> {author}</p>
            <p>{description}</p>
        </div>
    );
}

export default BlogPost;
