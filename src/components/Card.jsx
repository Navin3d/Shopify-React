const Card = ({ imageUrl, title, price }) => (
    <div className="col-sm-4">
        <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" width={100} height={250} src={imageUrl} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text"><b>Price :</b> $ {price}</p>
                <p class="card-text"><b>Stock :</b> 10</p>
                <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
        <br/>
    </div>
);

export default Card;
