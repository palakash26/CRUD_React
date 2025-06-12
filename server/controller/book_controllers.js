const { Book } = require("../module/book_module");

// Function to add a new book

const handeleBookController = async (req, res) => {
  try {
    const body = req.body;
    // validation filed
    if (
      !body.BookName ||
      !body.BookTitele ||
      !body.Author ||
      !body.SellingPrice 
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const bookAdd = await Book.insertMany(body);
    console.log("Book added successfully:", bookAdd);
    
    // Check if the book was added successfully
    if (bookAdd) {
      return res.status(201).json({
        message: "Book added successfully",
        book: bookAdd,
      });
    } else {
      return res.status(500).json({ message: "Failed to add book" });
    }
  } catch (error) {
    console.error("Error in handleBookController:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


const handleBookListController = async(req,res)=>{
  try {
    
    const booklist = await Book.find();
   if (booklist) {
      return res.status(201).json({
        message: "Book added successfully",
        book: booklist,
      });
    } else {
      return res.status(500).json({ message: "Failed to add book" });
    }
  } catch (error) {
     console.error("Error in handleBookController:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


const handleBookUpdateController = async (req, res) => {
  try {
  

    // const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
    const updatedBook = await Book.updateOne({_id:req.body?.Id},{$set:req.body});
    console.log("Book updated successfully:", updatedBook);

    // Check if the book was updated successfully
    if (updatedBook) {
      return res.status(200).json({
        message: "Book updated successfully",
        book: updatedBook,
      });
    } else {
      return res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.error("Error in handleBookUpdateController:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


const handleBookDeleteController = async(req,res)=>{
  try {
   const deleted = await Book.findByIdAndDelete(req.params.id);
  console.log(deleted ? "Deleted document:" : "No document found:", deleted);
    

     if (deleted) {
      return res.status(201).json({
        message: "Book delete successfully",
        // book: deleted,
      });
    } else {
      return res.status(500).json({ message: "Failed to add book" });
    }
  } catch (error) {
    console.error("Error in handleBookController:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}



module.exports = {
  handeleBookController,handleBookListController,handleBookDeleteController, handleBookUpdateController
};
