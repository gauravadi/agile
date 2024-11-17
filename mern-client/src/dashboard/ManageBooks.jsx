import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks]=useState([]);
  useEffect( () => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));

  },[])
  //to delete the item
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`,{
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("Book is deleted successfully!")
      //setAllBooks(data);
    })
  } 
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>
      <Table className="w-1">
        <Table.Head className="w-1">
        <Table.HeadCell>NO</Table.HeadCell>
          <Table.HeadCell>Book name</Table.HeadCell>
          <Table.HeadCell>Author name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             {index + 1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {book.bookTitle}
            </Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>₹100</Table.Cell>
            <Table.Cell>
              <Link 
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mb-10"
                to ={`/admin/dashboard/edit-books/${book._id}`}
                >
              <a>
                Edit
              </a>
              </Link>
              <button onClick={() => handleDelete(book._id)} className="bg-red-600" py-1 px-4 font-semibold text-white-700 rounded-sm hover:bg-sky-600>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
       
      </Table>
  
    </div>
  );
};

export default ManageBooks;
