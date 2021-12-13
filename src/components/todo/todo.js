import React, { useContext, useEffect, useState } from "react";
import useForm from "../../hooks/form.js";
import { FormGroup, InputGroup, Intent, H1 } from "@blueprintjs/core";
import { ListContext } from "../setting/setting.js";
import Pages from "./pages";

import "./todo.scss";

const ToDo = () => {
  const {
    addItem,
    incomplete,
    list,
    toggleComplete,
    displayCompleted,
    setCurrentPage,
    currentPage,
    postsPerPage,
    deleteItem,
  } = useContext(ListContext);

  const { handleChange, handleSubmit } = useForm(addItem);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = list.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h1 id="heading">To Do List Manager: {incomplete}</h1>
      <div className="line-up">
        <div className="form1">
          <h4>Add To Do Item</h4>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <FormGroup
                label="To-Do item"
                labelInfo="(required)"
                required="true"
                className="formToDoItems"
              >
                <InputGroup
                  onChange={handleChange}
                  name="text"
                  placeholder="Item Details"
                  type="text"
                  intent={Intent.PRIMARY}
                />
              </FormGroup>
              <FormGroup
                label="Assigned To"
                labelFor="text-input"
                labelInfo="(required)"
                required="true"
                className="formToDoItems"
              >
                <InputGroup
                  onChange={handleChange}
                  name="assignee"
                  placeholder="Assignee Name"
                  type="text"
                  intent={Intent.PRIMARY}
                />
              </FormGroup>
              <FormGroup label="Difficulty" labelFor="range">
                <input
                  className="deff"
                  onChange={handleChange}
                  defaultValue={2}
                  type="range"
                  min={1}
                  max={5}
                  name="difficulty"
                />
              </FormGroup>
              <FormGroup className="formToDoItems">
                <InputGroup
                  type="submit"
                  style={{ background: "rgb(0 117 255)", color: "white" }}
                  value="Add Item"
                />
              </FormGroup>
            </FormGroup>
          </form>
        </div>
        <div className="result">
          {displayCompleted ? (
            <>
              {currentPost.map((item) => ( 
                    <div className="toDoListItem" key={item.id}>
                      <p>{item.text}</p>
                      <p>
                        <small>Assigned to: {item.assignee}</small>
                      </p>
                      <p>
                        <small>Difficulty: {item.difficulty}</small>
                      </p>
                      <div
                        className="completeStatus"
                        onClick={() => toggleComplete(item.id)}
                      >
                        Complete: {item.complete.toString()}
                      </div>
                      <hr />
                    </div>              
              ))}
            </>
          ) : (
            <>
              {currentPost.map((item) => (
                <>
                  {!item.complete ? (
                    <div className="toDoListItem" key={item.id}>
                      <p>{item.text}</p>
                      <p>
                        <small>Assigned to: {item.assignee}</small>
                      </p>
                      <p>
                        <small>Difficulty: {item.difficulty}</small>
                      </p>
                      <div
                        className="completeStatus"
                        onClick={() => toggleComplete(item.id)}
                      >
                        Complete: {item.complete.toString()}
                      </div>
                      <hr />
                    </div>
                  ) : (
                    deleteItem(item.id)
                  )}
                </>
              ))}
            </>
          )}
          <Pages
            postsPerPage={postsPerPage}
            totalPosts={list.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};

export default ToDo;
