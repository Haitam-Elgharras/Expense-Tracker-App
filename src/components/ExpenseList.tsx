import React, { useState } from "react";
import "./Categories.css";
interface Item {
  desc: string;
  amount: number;
  category: string;
}
interface CategoriesProps {
  items: Item[];
  onDelete: (index: number) => void;
}

const Categories = ({ items, onDelete }: CategoriesProps) => {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {items.length !== 0 &&
            items.map((item, index) => (
              <tr key={index}>
                <td>{item.desc}</td>
                <td>{"$" + item.amount}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      onDelete(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          {items.length !== 0 && (
            <tr>
              <td colSpan={2}>Total</td>
              <td colSpan={2}>
                $
                {items.reduce((acc, item) => {
                  return acc + item.amount;
                }, 0)}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Categories;
