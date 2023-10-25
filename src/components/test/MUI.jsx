import {
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { useDropzone } from "react-dropzone";
import Gallery from "react-image-gallery";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { UploadIcon } from "../Common/IconComponent";

const img = [
  {
    original: "/images/Human.png",
    thumbnail: "/images/Human.png",
    originalClass: "image-original",
    thumbnailClass: "image-thumbnail",
  },
  {
    original: "/images/Animal.png",
    thumbnail: "/images/Animal.png",
    originalClass: "image-original",
    thumbnailClass: "image-thumbnail",
  },
  {
    original: "/images/Art.png",
    thumbnail: "/images/Art.png",
    originalClass: "image-original",
    thumbnailClass: "image-thumbnail",
  },
  {
    original: "/images/Food.png",
    thumbnail: "/images/Food.png",
    originalClass: "image-original",
    thumbnailClass: "image-thumbnail",
  },
  {
    original: "/images/Nature.png",
    thumbnail: "/images/Nature.png",
    originalClass: "image-original",
    thumbnailClass: "image-thumbnail",
    thumbnailHeight: "100%",
  },
  {
    original: "/images/Plant.png",
    thumbnail: "/images/Plant.png",
    originalClass: "image-original",
    thumbnailClass: "image-thumbnail",
    thumbnailHeight: "100%",
  },
  {
    original: "/images/Robot.png",
    thumbnail: "/images/Robot.png",
    originalClass: "image-original",
    thumbnailClass: "image-thumbnail",
    thumbnailHeight: "100%",
  },
];

const MUI = () => {
  const [images, setImages] = useState(img);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imageUrlInput, setImageUrlInput] = useState("");

  const addImageFromUrl = () => {
    if (imageUrlInput.trim() === "") {
      return; // Don't add empty URLs
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
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Gallery items={images} />
          </Grid>
          <Grid item xs={4}>
            <Stack
              direction={"column"}
              spacing={3}
              sx={{
                backgroundColor: "#F1F1F1",
                padding: "30px",
                borderRadius: "10px",
              }}
            >
              <Box>
                <Typography>Moderation Result:</Typography>
                <Chip
                  icon={<CheckCircleIcon />}
                  label="Pass"
                  sx={{ background: "white" }}
                />
              </Box>
              <Box>
                <Typography>Risk Type:</Typography>
                <Chip
                  icon={<CheckCircleIcon />}
                  label="Normal"
                  sx={{ background: "white" }}
                />
              </Box>
              <Box>
                <Typography>Risk Reason:</Typography>
                <Chip
                  icon={<CheckCircleIcon />}
                  label="Normal"
                  sx={{ background: "white" }}
                />
              </Box>
            </Stack>
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <TextField
                id="outlined-basic"
                label="Please enter the picture URL"
                variant="outlined"
                margin="normal"
                fullWidth
                sx={{ '&.MuiOutlinedInput-root': {
                  borderRadius: '20px'
                  
                } }}
              />

              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: "30px" }}
              >
                Add
              </Button>
            </Box>
            <Box>
              <Button
                startIcon={<UploadIcon />}
                variant="contained"
                size="large"
                fullWidth
                sx={{ borderRadius: "30px" }}
              >
                Upload Media
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default MUI;
