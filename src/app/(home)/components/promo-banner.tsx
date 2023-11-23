import Image, { ImageProps } from "next/image"
import {cn} from "@/lib/utils"


const PromoBanner = ({alt, className, ...props}:ImageProps) => {
    return ( 
        <Image
        width={0}
        height={0}
        className={cn("h-auto w-full px-5 mt-8 mb-8", className)}
        sizes="100vw"
        alt={alt}
        {...props}
      />
     );
}
 
export default PromoBanner;