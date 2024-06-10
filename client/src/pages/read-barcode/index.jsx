// import { useState } from "react";
import Html5QrcodePlugin from "./read";
import { useNavigate } from "react-router-dom";
// import ResultContainerPlugin from "./result";

const Index = () => {
  const navigate = useNavigate();
  const onNewScanResult = (decodedText) => {
    navigate(`/${decodedText}`); };
  return (
    <div>
      <Html5QrcodePlugin
        fps={10} qrbox={200} disableFlip={false} qrCodeSuccessCallback={onNewScanResult}
      />
    </div>
  );
};

export default Index;
