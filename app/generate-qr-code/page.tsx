/* eslint-disable jsx-a11y/alt-text */
'use client';
import React, { useState } from 'react';
import { useQRCode } from 'next-qrcode';

export default function QR() {
  const { Image } = useQRCode();
  const [url, setUrl] = useState('');
  const [qrUrl, setQrUrl] = useState('');

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setQrUrl(url);
  };

  const handleDownload = () => {
    const img = document.querySelector('img');
    if (img) {
      const link = document.createElement('a');
      link.href = img.src;
      link.download = 'qr-code.png';
      link.click();
    }
  };

  return (
    <div className="bg-black-100 h-screen">
      <div className="flex justify-center relative pt-12 pb-5 z-10">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="p-2 text-white bg-gray-800 rounded dark:text-white"
            value={url}
            onChange={handleInputChange}
            placeholder="Enter URL"
          />
          <button
            type="submit"
            className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Generate QR Code
          </button>
        </form>
      </div>

      <div className="flex justify-center">
        {qrUrl ? (
          <div className="text-center">
            <Image
              text={qrUrl}
              options={{
                type: 'image/jpeg',
                quality: 0.3,
                errorCorrectionLevel: 'M',
                margin: 3,
                scale: 4,
                width: 500,
                color: {
                  dark: '#000000',
                  light: '#ffffff',
                },
              }}
            />

            <button
              onClick={handleDownload}
              className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5"
            >
              Download QR Code
            </button>
          </div>
        ) : (
          <p>
            Please enter a URL and click &quot;Generate&quot; to
            create a QR code.
          </p>
        )}
      </div>
    </div>
  );
}
