import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Button, Label, Select, Textarea, TextInput } from "flowbite-react";

const EditBooks = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFUrl, // Corrected camelCase
  } = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    // Access form values
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.CategoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFUrl = form.bookPDFUrl.value; // Corrected to camelCase

    // Construct book object
    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFUrl, // Corrected to camelCase
    };

    // Update book data
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book updated successfully!");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the Book Data</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col gap-4">
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <Label htmlFor="bookTitle" value="Book Title" />
            <TextInput
              id="bookTitle"
              name="bookTitle"
              placeholder="Enter Book Title"
              required
              type="text"
              defaultValue={bookTitle}
            />
          </div>
          <div className="lg:w-1/2">
            <Label htmlFor="authorName" value="Author Name" />
            <TextInput
              id="authorName"
              name="authorName"
              placeholder="Enter Author Name"
              required
              type="text"
              defaultValue={authorName}
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <Label htmlFor="imageURL" value="Book Image URL" />
            <TextInput
              id="imageURL"
              name="imageURL"
              placeholder="Enter Book Image URL"
              required
              type="text"
              defaultValue={imageURL}
            />
          </div>
          <div className="lg:w-1/2">
            <Label htmlFor="inputState" value="Book Category" />
            <Select
              id="inputState"
              name="CategoryName"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor="bookDescription" value="Book Description" />
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write Your Book Description..."
            required
            rows={4}
            defaultValue={bookDescription}
          />
        </div>
        <div>
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          <TextInput
            id="bookPDFURL"
            name="bookPDFUrl" // Corrected to camelCase
            type="text"
            placeholder="Book PDF URL"
            defaultValue={bookPDFUrl} // Corrected to camelCase
            required
          />
        </div>
        <Button type="submit" className="mt-5 bg-teal-700">
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
