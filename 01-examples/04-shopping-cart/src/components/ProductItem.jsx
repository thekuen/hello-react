const ProductItem = (props) => {
  // prettier-ignore
  const {
    id,
    img,
    title,
    price,
    onAddToCart,
  } = props;

  return (
    <section className="card px-0" data-name="ProductItem">
      <img src={img} alt={title} />
      <div className="card-body">
        <div className="d-flex">
          <div>{title}</div>
          <div>${price}</div>
        </div>
        <button
          className="btn btn-sm btn-warning fw-light"
          onClick={() => {
            onAddToCart(id);
          }}
        >
          Add
        </button>
      </div>
    </section>
  );
};
export default ProductItem;
