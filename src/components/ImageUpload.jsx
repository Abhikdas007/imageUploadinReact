import React, { useRef, useState } from "react";

const ImageUpload = () => {
    const fileInputRef = useRef(null);
    const [image, setImage] = useState(null);

    const handleImageUpload = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div style={styles.container}>

            <button onClick={handleImageUpload} style={styles.uploadButton}>
                <i className="fa fa-folder-open" style={styles.icon}></i> Upload Image
            </button>


            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />


            {image && <img src={image} alt="Preview" style={styles.imagePreview} />}
        </div>
    );
};


const styles = {
    container: {
        textAlign: "center",
        marginTop: "20px",
    },
    uploadButton: {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
    },
    icon: {
        marginRight: "8px",
    },
    imagePreview: {
        marginTop: "20px",
        width: "300px",
        height: "auto",
        borderRadius: "8px",
        border: "1px solid #ccc",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    },
};

export default ImageUpload;
