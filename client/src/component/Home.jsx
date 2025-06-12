import React, { useEffect, useState } from "react";
import { bookBaseUrl } from "../../axiosInstcnces";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";

const Home = () => {
  const [bookForm, setBookForm] = useState({
    BookName: "",
    BookTitele: "",
    Author: "",
    SellingPrice: "",
    PublishingDate: "",
    Id: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [bookList, setBookList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const getAllbookList = async () => {
    try {
      const { data } = await bookBaseUrl.get("booklists");
      setBookList(data?.book);
      console.log(data);
    } catch (error) {
      console.error("Error fetching book list:", error);
    }
  };

  useEffect(() => {
    getAllbookList();
  }, []);

  const handleDelete = async (id) => {
    try {
      const { data } = await bookBaseUrl.delete(`/deletebook/${id}`);
      const response = { success: true };

      // Safe access
      if (response?.success) {
        alert(" delete Successfull!");
        getAllbookList(); // Refresh the book list after deletion
      }
      console.log("Book Form Data:", data);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleUpdate = async (data) => {
    try {
      setBookForm({
        BookName: data?.BookName,
        BookTitele: data?.BookTitele,
        Author: data?.Author,
        SellingPrice: data?.SellingPrice,
        PublishingDate: data?.PublishingDate,
        Id: data?._id,
      });
      setIsUpdate(true);
    } catch (error) {
      console.error("Error updating book:", error);
      alert("Update failed. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    try {
      if (!isUpdate) {
        if (
          !bookForm.BookName ||
          !bookForm.BookTitele ||
          !bookForm.Author ||
          !bookForm.SellingPrice ||
          !bookForm.PublishingDate
        ) {
          alert("All fields are required");
          return;
        }

        // Submit data to the server
        const { data } = await bookBaseUrl.post("/addbook", bookForm);
        const response = { success: true };

        // Safe access
        if (response?.success) {
          alert("Success!");
          setBookForm({
            BookName: "",
            BookTitele: "",
            Author: "",
            SellingPrice: "",
            PublishingDate: "",
            Id: "",
          });
          getAllbookList(); // Refresh the book list after submission
        }

        console.log("Book Form Data:", data);
      } else {
        // Submit data to the server
        const { data } = await bookBaseUrl.put("/updatebook", bookForm);
        const response = { success: true };

        // Safe access
        if (response?.success) {
          alert("Success!");
          setBookForm({
            BookName: "",
            BookTitele: "",
            Author: "",
            SellingPrice: "",
            PublishingDate: "",
            Id: "",
          });
          setIsUpdate(false); 
           getAllbookList();
        // Refresh the book list after submission
        }

        console.log("Book Form Data:", data);
      }
      // Validation
      // Log response for debugging
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  return (
    <div className="w-full px-5 min-h-[calc(100vh-60px)] py-3">
      <div className="w-full  grid-cols-5 gap-3 my-4 flex flex-col md:flex-row">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="BookName">Book Name</label>
          <input
            type="text"
            placeholder="Book Name"
            className="w-full text-gray-800 border-2 border-gray-300 rounded-sm outline-none h-8 px-2"
            name="BookName"
            value={bookForm.BookName}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="BookTitele">Book Title</label>
          <input
            type="text"
            placeholder="Book Title"
            className="w-full text-gray-800 border-2 border-gray-300 rounded-sm outline-none h-8 px-2"
            name="BookTitele"
            value={bookForm.BookTitele}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="Author">Author</label>
          <input
            type="text"
            placeholder="Author"
            className="w-full text-gray-800 border-2 border-gray-300 rounded-sm outline-none h-8 px-2"
            name="Author"
            value={bookForm.Author}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="SellingPrice">Selling Price</label>
          <input
            type="number"
            placeholder="Selling Price"
            className="w-full text-gray-800 border-2 border-gray-300 rounded-sm outline-none h-8 px-2"
            name="SellingPrice"
            value={bookForm.SellingPrice}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="PublishingDate">Publishing Date</label>
          <input
            type="date"
            placeholder="Publishing Date"
            className="w-full text-gray-800 border-2 border-gray-300 rounded-sm outline-none h-8 px-2"
            name="PublishingDate"
            value={bookForm.PublishingDate}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="w-full flex justify-end items-center">
        <button
          className="bg-gray-800 text-white h-9 w-22 rounded-md cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <div className="w-full mt-10">
        <div className="w-full">
          <table className="w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Book Name
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Book Title
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Author
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Selling Price
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Publishing Date
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-align-center">
              {bookList?.map((book, index) => {
                return (
                  <tr className="hover:bg-gray-200" key={index}>
                    <td className="px-6 py-3 whitespace-nowrap">
                      {book?.BookName}
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      {book?.BookTitele}
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      {book?.Author}
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      {book?.SellingPrice}
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      {book?.PublishingDate}
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      <div className="w-20 flex justify-center gap-5">
                        <div
                          className="h-8 w-8 flex justify-center items-center bg-blcak-500 text-red-600 rounded text-lg"
                          onClick={() => handleDelete(book?._id)}
                        >
                          <span>
                            <MdDelete />
                          </span>
                        </div>
                        <div
                          className="h-8 w-8 flex justify-center items-center bg-blcak-500 text-green-600 rounded text-lg cursor-pointer"
                          onClick={() => handleUpdate(book)}
                        >
                          <span>
                            <FaPen />
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
