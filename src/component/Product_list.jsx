const Product_list = ({ product, onDeleteProduct, onEditProduct }) => {
  const { id, name, description, price } = product;
  return (
    <tr>
      <td className="text-left p-3">{name}</td>
      <td className="text-left p-3">{description}</td>
      <td className="text-left p-3">{price}</td>
      <td className="text-left flex p-3">
        <button
          className="px-3 py-1 text-sm text-white bg-blue-500 rounded-md"
          onClick={() => onEditProduct(product)}
        >
          Edit
        </button>
        <button
          className="px-3 py-1 text-sm text-white bg-red-500 rounded-md ml-2"
          onClick={() => onDeleteProduct(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Product_list;
