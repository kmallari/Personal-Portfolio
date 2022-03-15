import React from "react";

interface TodoProps {
  todo: [];
}

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <>
      {todo.map(
        (todo: { title: string; description: string }, index: number) => (
          <div key={index}>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
          </div>
        )
      )}
    </>
  );
};
