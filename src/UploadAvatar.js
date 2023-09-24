import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar-edit'

export default function UploadAvatar() {
    const [src, setSrc] = useState(null);
    const [preview, setPreview] = useState(null);

    const onClose = () => {
        setPreview(null);
    }
    const onCrop = (preview) => {
        setPreview(preview);
    }
    return (
        <>
            <Avatar
                width={400}
                height={300}
                onCrop={onCrop}
                onClose={onClose}
                src={src}
            />

            <br />
            <img src={preview} />
            <br />
            <button onClick={() => window.print()}>PRINT ME</button>
        </>
    )
}
