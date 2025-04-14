import { useState, useEffect } from "react";
import { useProductStore } from "../store/product";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const Products = () => {
  const { fetchProducts, products, updateProduct, deleteProduct } =
    useProductStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Open the modal and set the product to edit
  const handleEditClick = (product) => {
    setEditingProduct(product);
    setUpdatedProduct({ ...product }); // Pre-fill the modal fields
    setIsModalOpen(true);
  };

  // Save the updated product
  const handleSaveEdit = async () => {
    if (!editingProduct) return;

    const { success, message } = await updateProduct(
      editingProduct._id,
      updatedProduct
    );
    if (success) {
      toast.success("Product updated successfully");
      setIsModalOpen(false); // Close the modal
      setEditingProduct(null); // Clear modal state
      setUpdatedProduct({
        name: "",
        price: "",
        description: "",
        src: "",
        category: "",
      }); // Reset input fields
      fetchProducts(); // Refresh product list
    } else {
      toast.error(`Error: ${message}`);
    }
  };

  // Delete a product
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (success) {
      toast.success("Product deleted successfully");
      fetchProducts();
    } else {
      toast.error(`Error: ${message}`);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <p className="text-center font-semibold text-3xl md:text-4xl lg:text-5xl">
        Curated With Premium Products <br /> For Self-Care
      </p>
      <div className="flex justify-end">
        <a href="./create">
          <button className="border-none bg-[#afad55] text-white p-2 w-full sm:w-auto">
            Create New Product
          </button>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((item) => (
          <div
            key={item._id}
            className="bg-[#f1e2c2] p-4 space-y-4 min-h-[40vh] md:w-[20vw]"
          >
            <Link to={`/details/${item._id}`} className="block">
              <img
                src={item.image || "/default-image.jpg"}
                alt={item.name}
                className="w-full h-52 object-cover"
              />
              <div className="mt-2 flex justify-between text-base md:text-lg font-semibold">
                <p>{item.name}</p>
                <p>R{item.price}</p>
              </div>
            </Link>
            <hr />
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button
                onClick={() => handleEditClick(item)}
                className="bg-[#afad55] text-white p-2 w-full hover:bg-[#9d9a4b]"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProduct(item._id)}
                className="p-2 border border-black w-full"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center mt-4">
          <p>No products found ;</p>
          <Link to={"../create"} className="text-blue-500 hover:underline">
            Create product
          </Link>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white shadow-lg w-full sm:w-[500px] p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Edit Product</h2>
            <input
              type="text"
              value={updatedProduct.name}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, name: e.target.value })
              }
              placeholder="Product Name"
              className="border p-2 w-full mb-4"
            />
            <input
              type="text"
              value={updatedProduct.price}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, price: e.target.value })
              }
              placeholder="Product Price"
              className="border p-2 w-full mb-4"
            />
            <input
              type="text"
              value={updatedProduct.description}
              onChange={(e) =>
                setUpdatedProduct({
                  ...updatedProduct,
                  description: e.target.value,
                })
              }
              placeholder="Product Description"
              className="border p-2 w-full mb-4 rounded-md"
            />
            <input
              type="text"
              value={updatedProduct.src}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, src: e.target.value })
              }
              placeholder="Image URL"
              className="border p-2 w-full mb-4 rounded-md"
            />
            <div className="flex flex-col sm:flex-row justify-end gap-4">
              <button
                onClick={handleSaveEdit}
                className="bg-[#afad55] text-white px-4 py-2 rounded-md w-full sm:w-[30%]"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setEditingProduct(null);
                  setUpdatedProduct({
                    name: "",
                    price: "",
                    src: "",
                    category: "",
                  });
                }}
                className="border-black text-black border-2 px-4 py-2 rounded-md w-full sm:w-[30%]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
