import React, { useState } from "react";
import { AddButton, UploadButton } from "../Common/ButtonComponent";
import { Chip, Spinner, Typography } from "@material-tailwind/react";
import Gallery from "react-image-gallery";
import { useDropzone } from "react-dropzone";
import { NormalIcon, PassedIcon } from "../Common/IconComponent";
import { Data } from "../../utils/data";
import { TextFieldComponent } from "../Common/InputComponent";

const ImageModeration = () => {
  const [images, setImages] = useState(Data);
  const [uploadedImages, setUploadedImages] = useState([]); 
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImageData, setSelectedImageData] = useState(
    images[currentImageIndex]
  );
  const [isLoading, setIsLoading] = useState(false);

  const addImageFromUrl = () => {
    if (imageUrlInput.trim() === "") {
      return;
    }

    const newImage = {
      original: imageUrlInput,
      thumbnail: imageUrlInput,
      result: (
        <Chip
          icon={<PassedIcon />}
          size="lg"
          value="Pass"
          className="bg-white text-black rounded-full font-heading font-light normal-case"
        />
      ),
      type: (
        <Chip
          icon={<NormalIcon />}
          size="lg"
          value="Normal"
          className="bg-white text-black rounded-full font-heading font-light normal-case"
        />
      ),
      reason: (
        <Chip
          icon={<NormalIcon />}
          size="lg"
          value="Normal"
          className="bg-white text-black rounded-full font-heading font-light normal-case"
        />
      ),
    };

    setImages([...images, newImage]);
    setImageUrlInput("");
    setCurrentImageIndex(images.length);
  };

  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      original: URL.createObjectURL(file),
      thumbnail: URL.createObjectURL(file),
      result: (
        <Chip
          icon={<PassedIcon />}
          size="lg"
          value="Pass"
          className="bg-white text-black rounded-full font-heading font-light normal-case"
        />
      ),
      type: (
        <Chip
          icon={<NormalIcon />}
          size="lg"
          value="Normal"
          className="bg-white text-black rounded-full font-heading font-light normal-case"
        />
      ),
      reason: (
        <Chip
          icon={<NormalIcon />}
          size="lg"
          value="Normal"
          className="bg-white text-black rounded-full font-heading font-light normal-case"
        />
      ),
    }));
    setImages([...images, ...newImages]);
    setUploadedImages([...uploadedImages, ...acceptedFiles]);
    setCurrentImageIndex(images.length);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const handleSlide = (currentIndex) => {
    setIsLoading(true);
    setCurrentImageIndex(currentIndex);
    setSelectedImageData(images[currentIndex]);

    // Simulate an async operation (e.g., API call, data fetch) here
    setTimeout(() => {
      setIsLoading(false[currentImageIndex]);
    }, 3000);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  return (
    <div className="">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-[10px]">
        <div className="image-gallery-wrapper">
          <Gallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            startIndex={currentImageIndex}
            onSlide={handleSlide}
            slideDuration={1}
            slideInterval={1}
          />
        </div>

        <div id="right-content" className="flex flex-col">
          <div
            id="results"
            className="bg-gray2 p-[30px] space-y-[22px] rounded-[10px] h-full"
          >
            {isLoading ? (
              <div className="flex justify-center place-items-center">
                <Spinner className="h-12 w-12" color="green" />
              </div>
            ) : (
              <div>
                <div className="flex flex-col space-y-[10px]">
                  <ModerationResult imageData={selectedImageData} />
                </div>
                <div className="flex flex-col space-y-[10px]">
                  <RiskType imageData={selectedImageData} />
                </div>
                <div className="flex flex-col space-y-[10px]">
                  <RiskReason imageData={selectedImageData} />
                </div>
              </div>
            )}
          </div>

          <div className="my-4 flex flex-row gap-[10px]">
            <div className="grow rounded-full border-1 border-black">
              <TextFieldComponent
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
};

function ModerationResult({ imageData }) {
  return (
    <div>
      {imageData && (
        <div className="space-y-[10px]">
          <div>
            <Typography className="font-heading font-normal text-title">
              Moderation Result:
            </Typography>
          </div>

          <div className="w-fit">{imageData.result}</div>
        </div>
      )}
    </div>
  );
}

function RiskType({ imageData }) {
  return (
    <div>
      {imageData && (
        <div className="space-y-[10px]">
          <div>
            <Typography className="font-heading font-normal text-title">
              Risk Type:
            </Typography>
          </div>

          <div className="w-fit">{imageData.type}</div>
        </div>
      )}
    </div>
  );
}

function RiskReason({ imageData }) {
  return (
    <div>
      {imageData && (
        <div className="space-y-[10px]">
          <div>
            <Typography className="font-heading font-normal text-title">
              Risk Reason:
            </Typography>
          </div>

          <div className="w-fit">{imageData.reason}</div>
        </div>
      )}
    </div>
  );
}

export default ImageModeration;
