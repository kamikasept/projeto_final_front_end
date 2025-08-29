const SingleItem = ({ id, name, image, price }) => {
  return (
    <div>
      <div className="single-item">
        <img
          className="single-item_image"
          src={image}
          alt={`Imagem de ${name}`}
        />
        <h3>{name}</h3>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default SingleItem;
