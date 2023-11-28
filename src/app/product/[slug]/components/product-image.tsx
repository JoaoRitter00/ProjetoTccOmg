"use client"
import Image from "next/image"
import { useState } from "react"

interface ProductImagesProps{
    name: string
    imageURLs: string[]
}
const ProductImages = ({name, imageURLs}:ProductImagesProps) => {
    const [currentImage, setCurrentImage] = useState(imageURLs[0])

    const handleImageClick = (imageURL: string) =>{
        setCurrentImage(imageURL)
    }
    return ( <div className="flex flex-col">
        <div className="flex h-[380px] w-full lg:w-[736px] lg:h-[670px] items-center justify-center bg-accent">
            <Image src={currentImage}
                alt={name}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto max-h-[70%] w-auto max-w-[80%]"
                style={{
                    objectFit: "contain"
                }}
                />
        </div>
        <div className="grid grid-cols-4 gap-4 px-5 mt-7 lg:absolute lg:flex lg:flex-col">
            {imageURLs.map((imageURL)=> (
                <button key={imageURL} className={`flex h-[80px] items-center justify-center rounded-lg bg-accent${imageURL === currentImage && "border-2 border-solid border-primary"}`}onClick={()=>handleImageClick(imageURL)}>
                    <Image src={imageURL}
                alt={name}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto max-h-[70%] w-auto max-w-[80%]"
                />
                </button>
            ))}
        </div>
    </div>
        
     );
}
 
export default ProductImages;