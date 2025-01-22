"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

type Comment = {
  id: number;
  text: string;
};

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObject = { id: Date.now(), text: newComment.trim() };
      setComments([...comments, newCommentObject]);
      setNewComment("");
    }
  };

  const handleDeleteComment = (id: number) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  const handleEditComment = (id: number, text: string) => {
    setEditingCommentId(id);
    setEditingText(text);
  };

  const handleSaveEdit = () => {
    setComments(
      comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: editingText.trim() }
          : comment
      )
    );
    setEditingCommentId(null);
    setEditingText("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-2xl rounded-lg mt-10 w-full mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
        Comment Section
      </h2>

      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
          className="flex-1 w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 w-full sm:w-auto text-white px-6 py-3 text-base rounded-lg hover:bg-blue-600 transition shadow-md"
        >
          Add
        </button>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="border border-gray-300 rounded-lg p-4 flex flex-wrap items-start justify-between shadow-lg hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-4 flex-1 w-full sm:w-auto">
              <Image
                src="/icon.png"
                alt="Profile"
                width={48}
                height={40}
                className="rounded-full"
              />
              {editingCommentId === comment.id ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ) : (
                <p className="text-gray-900 text-lg">{comment.text}</p>
              )}
            </div>

            <div className="flex gap-2 w-full sm:w-auto mt-4 sm:mt-0 flex-wrap">
              {editingCommentId === comment.id ? (
                <>
                  <button
                    onClick={handleSaveEdit}
                    className="bg-green-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-green-600 transition shadow-sm w-20 sm:w-auto lg:ml-10"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingCommentId(null)}
                    className="bg-gray-400 text-white px-4 py-2 text-sm rounded-lg hover:bg-gray-500 transition shadow-sm w-20 sm:w-auto"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEditComment(comment.id, comment.text)}
                    className="bg-yellow-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-yellow-600 transition shadow-sm w-20 sm:w-auto"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteComment(comment.id)}
                    className="bg-red-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-red-600 transition shadow-sm w-20 sm:w-auto"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;









