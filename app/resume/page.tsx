import React from 'react';

const Resume = () => {
  return (
    <div className="bg-black-100 min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto w-full">
        <iframe
          src="https://drive.google.com/file/d/1ph5wUg0IDNFPFrw2VL5wiohh2bDomrUg/preview"
          className="w-full"
          style={{ height: '90vh', border: 'none' }}
          allow="autoplay"
        />
      </div>
    </div>
  );
};

export default Resume;
