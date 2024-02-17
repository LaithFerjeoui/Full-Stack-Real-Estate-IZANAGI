import { Button, Group } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
const UploadImage = ({
  propertyDetails,
  setPropertyDetails,
  nextStep,
  prevStep,
}) => {
  const [imageURL, setImageURL] = useState(propertyDetails.image);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const handleNext = () => {
    setPropertyDetails((prev) => ({ ...prev, image: imageURL }));
    nextStep();
  };
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dg5en3gpf",
        uploadPreset: "jcnqtm7j",
        maxFiles: 1,
      },
      (err, result) => {
        if (result.event === "success") {
          setImageURL(result.info.secure_url);
        }
      }
    );
  }, []);
  return (
    <div className="flexColCenter mt-12 gap-8">
      {!imageURL ? (
        <div
          className="flexColCenter w-[80%] h-[400px] border-dashed border-[2px] cursor-pointer border-gray-500"
          onClick={() => widgetRef.current?.open()}
        >
          <AiOutlineCloudUpload size={50} color="grey" />
          <span>Upload Image</span>
        </div>
      ) : (
        <div className="w-[80%] h-[400px] cursor-pointer rounded-md overflow-hidden" onClick={() => widgetRef.current?.open()}>
          <img src={imageURL} alt="" className="w-full h-full object-cover" />
        </div>
      )}
    <Group position="center" mt={"xl"}>
        <Button variant="default" onClick={prevStep}>Back Step</Button>
        <Button onClick={handleNext} disabled={!imageURL}>Next Step</Button>
      </Group>
      

    </div>
  );
};

export default UploadImage;
