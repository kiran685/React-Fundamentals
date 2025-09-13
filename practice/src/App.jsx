import ProductCart from "./ProductCart";
import BlogPost from "./BlogPost.jsx";

function App() {
    const products = [
        { productname: "Laptop", price: 50000, isAvailable: true },
        { productname: "Smartphone", price: 20000, isAvailable: false },
        { productname: "Headphones", price: 3000, isAvailable: true },
        { productname: "Smartwatch", price: 7000, isAvailable: false }
    ];

    const posts = [
        {
            id:1,
            author: "Kiran",
            title: "My first blog",
            description: "This is my first blog post content"
        },
        {
            id:2,
            author: "Teja",
            title: "My second blog",
            description: "This is my second blog post content"
        },
        {
            id:3,
            author: "Sai",
            title: "My third blog",
            description: "This is my third blog post content"
        },
    ];

    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            {posts.map((post) => (
                <BlogPost
                    key={post.id}
                    author={post.author}
                    title={post.title}
                    description={post.description}
                />
            ))}
        </div>
    );
}

export default App;


