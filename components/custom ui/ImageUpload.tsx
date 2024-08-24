import { CldUploadWidget } from "next-cloudinary";
import { Plus } from "lucide-react";

import { Button } from "../ui/button";
import Image from "next/image";

interface ImageUploadProps {
  value: string[]; // Changed to an array of strings
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  value,
}) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {" "}
        {/* Added gap size */}
        {value.map((url) => (
          <div key={url} className="relative">
            {" "}
            {/* Use url as the key */}
            <Image
              src={url}
              alt="collection"
              className="object-cover rounded-lg"
              width={200} // Adjust width and height as needed
              height={200}
            />
            <Button
              onClick={() => onRemove(url)}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
      <CldUploadWidget uploadPreset="fuhpq7lm" onUpload={onUpload}>
        {({ open }) => {
          return (
            <Button onClick={() => open()} className="bg-grey-1 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
