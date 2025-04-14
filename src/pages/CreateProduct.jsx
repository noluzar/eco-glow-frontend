import { useState } from "react";
import { toast } from "react-toastify";
import { useProductStore } from "../store/product";
import { useNavigate } from "react-router-dom";

export const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const { createProduct } = useProductStore();
  const navigate = useNavigate();

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast.error(`Error: ${message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.success(`Success: ${message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    setNewProduct({ name: "", price: "", description: "", image: "" });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="flex justify-between items-center">
        <div></div>
      <div className="w-[40%] space-y-4">
        <h1 className="text-[50px]">Create New Product</h1>
        <form
          className="flex flex-col gap-4 items-center w-full"
          onSubmit={handleAddProduct}
        >
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="p-3 w-full border rounded outline-none"
            required
          />
          <input
            type="text"
            placeholder="Product Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="p-3 w-full border rounded outline-none"
            required
          />
          <input
            type="text"
            placeholder="Product Description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            className="p-3 w-full border rounded outline-none"
            required
          />
          <input
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            className="p-3 w-full border rounded outline-none"
            required
          />
          <div className="flex space-x-4 w-full">
             <button
            type="submit"
            className="border-none bg-[#afad55] text-white p-2 w-full"
          >
            Create Product
          </button>
          <button
            onClick={handleCancel}
            className="flex items-center gap-2 border border-black p-2 justify-center text-lg w-full"
          >
            Cancel
          </button>
          </div>
        </form>
      </div>
      <div className="w-[50%]">
        <img src="/vid.jpg" className="h-[100vh] w-full" alt="Product" />
      </div>
    </div>
  );
};
