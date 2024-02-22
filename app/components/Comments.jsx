import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const Comments = ({ postId, refresh, setRefresh }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const getData = async () => {
    const request = await fetch("http://localhost/API/get/comments.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post_id: postId }),
    });
    const response = await request.json();
    console.log(response);
    setComments(response.data);
  };

  const handleComment = async () => {
    const user_id = localStorage.getItem("login");
    const request = await fetch("http://localhost/API/comments/create.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post_id: postId,
        user_id: user_id,
        content: comment,
      }),
    });
    const response = await request.json();
    if (response.code == 201) {
      toast.success(response.message);
      setComment("");
      setRefresh(!refresh);
    }
  };

  useEffect(() => {
    getData();
  }, [refresh]);

  return (
    <div className="w-full pt-3 mb-[60px]">
      <div className="flex gap-3 items-center border-b border-gray-700 pb-3">
        <input
          type="text"
          placeholder="Post a comment..."
          className="bg-transparent outline-none flex-1"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
        />
        <button
          onClick={handleComment}
          className="px-5 py-2 rounded-full bg-white text-[13px] text-black font-bold"
        >
          Comment
        </button>
      </div>
      {comments.map((item, index) => {
        return (
          <div
            className="flex gap-1 items-start border-b border-gray-700 py-2 pl-4"
            key={index}
          >
            <FaUserCircle size={30} color="white" className="min-w-[45px]" />
            <div className="text">
              <p className="text-[13px] font-bold">{item.name}</p>
              <p className="text-[15px]">{item.content}</p>
              {/* <div className="actions flex gap-1 items-center mt-2">
            {item.user_id == user_id && (
              <div className="icons h-[30px] w-[30px] p-1 rounded-full flex items-center justify-center bg-zinc-800">
                <FiTrash size={17} color="red" />
              </div>
            )}
          </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
