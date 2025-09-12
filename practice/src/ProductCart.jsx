function ProductCart(){
    const Productname = "Mobile Phone"
    const Price=19000
    const isAvailable = true
    return(
        <div>
            <p>{Productname}</p>
            <p>{Price}</p>
            <p>{isAvailable===true?"Stock is available":"Out OF stock"}</p>
            
        </div>
    )
}

export default ProductCart