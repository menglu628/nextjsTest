import { ReactElement } from "react";

const ImageToImage = () => {
  return (
    <main className="flex items-center justify-center">
      <div>图生图</div>
    </main>
  );
};

export default ImageToImage;

ImageToImage.getLayout = (page: ReactElement) => {
  return (
    <div>
      <span>getLayout</span>
      {page}
    </div>
  );
};
