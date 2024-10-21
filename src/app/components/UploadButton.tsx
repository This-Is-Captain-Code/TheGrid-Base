import React, { useState } from 'react';

const UploadButton: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyAddress = () => {
        setCopied(true);
    };

    return (
        <button onClick={handleCopyAddress}>
            {copied ? 'OEPN UP!' : 'FBI'}
        </button>
    );
};

export default UploadButton;
