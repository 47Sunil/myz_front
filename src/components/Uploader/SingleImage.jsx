//create a component that will be used to upload a single image with tailwind css and use form data to send the image to the backend and uses a good ui with a drop image area and a after droping or selecting form should automatically send to backedn and show the image in the frontend no remove function api is not ready yet use a local array to push and pop images use react query to fetch the images from the backend and show them in the frontend and use fontawesome class icons

import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";

const SingleImage = ({ getLink }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const queryClient = useQueryClient();
  const [uploadedImage, setUploadedImage] = useState("");

  const UploadAPICall = async (formData) => {
    const res = await fetch("http://localhost:3000/images", {
      method: "POST",
      body: formData,
    });
    setLoading(false);
    return res.json();
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
      setPreview(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const mutation = useMutation(UploadAPICall, {
    onSuccess: (data) => {
      toast.success("Image Uploaded Successfully");
      queryClient.invalidateQueries("currentLpImage");
      queryClient.setQueryData("currentLpImage", data);
      setUploadedImage(data[0]);
      getLink(data[0]);
      setFile(null);
      setPreview(null);
      setLoading(false);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
      setLoading(false);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);
    mutation.mutate(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        {...getRootProps()}
        className="relative grid h-24 grid-cols-10 gap-3 w-full border-2 border-gray-300/40 border-dashed rounded-lg flex flex-col items-center justify-center bg-[#2A2439] text-xs text-white/60 p-3"
      >
        <div className="w-full col-span-2">
          {preview || uploadedImage ? (
            <img
              src={preview || uploadedImage}
              alt="preview"
              className="h-full object-contain rounded-lg"
            />
          ) : (
            <svg
              width="100%"
              id="Layer_1"
              version="1.2"
              viewBox="0 0 24 24"
              fill="#ffffff2f"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <circle cx="8.5" cy="8.501" r="2.5" />
                <path d="M16,10c-2,0-3,3-4.5,3s-1.499-1-3.5-1c-2,0-3.001,4-3.001,4H19C19,16,18,10,16,10z" />
                <path d="M20,3H4C2.897,3,2,3.897,2,5v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M20,17H4V5h16V17z" />
              </g>
            </svg>
          )}
        </div>

        <input {...getInputProps()} />
        <div className="w-full col-span-5">
          {isDragActive && <div className="h-full w-full absolute top-0"></div>}
          {!uploadedImage ? (
            <p className="text-xs">
              Click here to select image or you can drop images here!
            </p>
          ) : (
            <p className="text-xs">
              Click here to <b>Replace</b> the Image
            </p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 z-[3333] hover:bg-blue-600 text-white py-2 px-2 rounded disabled:opacity-50 text-xs col-span-3 disabled:cursor-not-allowed"
          disabled={loading || !file}
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>
      </div>
    </div>
  );
};

export default SingleImage;
