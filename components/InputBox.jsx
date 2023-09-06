'use client'
import axios from "axios";
import React, { useState } from "react";
import Image from "next/image";

export default function InputBox({ newUrl }) {
  const [isDragOver, setIsDragOver] = useState(false);

  const uploadImage = async (file) => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "i7t7cov3");

    axios
      .post("https://api.cloudinary.com/v1_1/dymovtrfj/image/upload", form)
      .then((resp) => {
        newUrl(resp.data.secure_url, "done");
      })
      .catch((error) => {
        console.error(error.message,error.response.data.error.message);
        newUrl("", "initial");
      });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    uploadImage(e.dataTransfer.files[0]);
    newUrl("", "loading");
  };

  const handleChange = (e) => {
    uploadImage(e.target.files[0]);
    newUrl("", "loading");
  };

  return (
    <>
      <h1 className="text-xl font-bold text-gray-600">Upload your image</h1>
      <p className="text-sm text-gray-500">File should be jpeg, png...</p>

      <div
        className={`w-[338px] h-[219px] border-2 p-3 gap-2 flex flex-col justify-evenly items-center border-gray-600 border-dashed ${
          isDragOver ? "opacity-100" : "opacity-70"
        } hover:opacity-100 duration-300 cursor-pointer ease-in rounded-md`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Image
          src={"/image.svg"}
          width={114.131}
          height={88.241}
          alt="svg image upload"
          priority
        />
        <p className="text-sm text-gray-500">Drag & Drop your image here</p>
      </div>

      <p className="text-sm text-gray-500">Or</p>
      <label
        htmlFor="chooseFile"
        className="px-2 py-1 bg-sky-600 hover:bg-sky-700 ef-hover text-white rounded-lg cursor-pointer"
      >
        Choose File
      </label>
      <input
        type="file"
        hidden
        id="chooseFile"
        onChange={handleChange}
        name="file"
      />
    </>
  );
}