const SortProducts = ({ productsArr }) => {
  console.log(productsArr);
  const lowestFirst = productsArr.sort((a, b) => a.price - b.price);
  const highestFirst = productsArr.sort((a, b) => b.price - a.price);

  console.log(lowestFirst);
  // console.log(highestFirst);

  return (
    <div>
      <select name="price">
        <option value="" disabled selected>
          Filter Products
        </option>
        <option value={lowestFirst}>Price (lowest first)</option>
        <option value={highestFirst}>Price (highest first)</option>
      </select>
    </div>
  );
};

export default SortProducts;
