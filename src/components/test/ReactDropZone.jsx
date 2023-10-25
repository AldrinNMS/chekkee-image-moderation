import { Button, Chip, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { AddButton, UploadButton } from "../Common/ButtonComponent";
import { InputComponent } from "../Common/InputComponent";

const img = [
  {
    original: "/images/Human.png",
    thumbnail: "/images/Human.png",
  },
  {
    original: "/images/Animal.png",
    thumbnail: "/images/Animal.png",
  },
  {
    original: "/images/Art.png",
    thumbnail: "/images/Art.png",
  },
  {
    original: "/images/Food.png",
    thumbnail: "/images/Food.png",
  },
  {
    original: "/images/Nature.png",
    thumbnail: "/images/Nature.png",
  },
  {
    original: "/images/Plant.png",
    thumbnail: "/images/Plant.png",
  },
  {
    original: "/images/Robot.png",
    thumbnail: "/images/Robot.png",
  },
];

function ImageUpload() {
  const [images, setImages] = useState(img);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imageUrlInput, setImageUrlInput] = useState("");

  const addImageFromUrl = () => {
    if (imageUrlInput.trim() === "") {
      return;
    }

    const newImage = {
      original: imageUrlInput,
      thumbnail: imageUrlInput,
      description: "User-provided Image",
    };

    setImages([...images, newImage]);
    setImageUrlInput("");
  };

  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      original: URL.createObjectURL(file),
      thumbnail: URL.createObjectURL(file),
      description: file.name,
    }));
    setImages([...images, ...newImages]);
    setUploadedImages([...uploadedImages, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-[10px]">
        <div className="">
          <Gallery items={images} />
        </div>
        <div>
          <div className="bg-gray2 p-[30px] space-y-[22px] rounded-[10px] h-full">
            <div className="flex flex-col">
              <div>
                <Typography>Moderation Result:</Typography>
              </div>

              <div className="w-fit">
                <Chip
                  size="lg"
                  value="Pass"
                  className="bg-white text-black rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <Typography>Risk Type:</Typography>
              </div>

              <div className="w-fit">
                <Chip
                  size="lg"
                  value="Pass"
                  className="bg-white text-black rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <Typography>Risk Reason:</Typography>
              </div>

              <div className="w-fit">
                <Chip
                  size="lg"
                  value="Pass"
                  className="bg-white text-black rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="my-4 flex items-center gap-[10px]">
            <div className="w-full">
              <InputComponent
                value={imageUrlInput}
                onChange={(e) => setImageUrlInput(e.target.value)}
              />
            </div>
            <div className="">
              <AddButton onClick={addImageFromUrl}>Add Url</AddButton>
            </div>
          </div>

          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <UploadButton>Upload Media</UploadButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
