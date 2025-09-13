import "./ProductCart.css"

function ProductCart({ name, price, isAvailable, imageUrl }) {
    const stockStyle = {
        color: isAvailable ? 'red' : 'green'
    };

    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '20px',
            width: '200px',
            margin: '10px',
            backgroundColor: '#fff7f7ff', 
            textAlign: 'center'
        }}>
            <img 
                src={imageUrl} 
                alt={name} 
                style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }}
            />
            <p>{name}</p>
            <p>₹{price}</p>

            {isAvailable ? (
                <p style={stockStyle}>In Stock</p>
            ) : null}

            {!isAvailable ? (
                <p style={stockStyle}>Out of stock</p>
            ) : null}
        </div>
    );
}

export default ProductCart;
