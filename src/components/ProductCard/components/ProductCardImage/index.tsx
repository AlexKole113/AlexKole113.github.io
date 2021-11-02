import productCardCss from "@/components/ProductCard/styles/index.scss";
import {useEffect, useRef, useState} from "react";
import Preloader from "@/components/Preloader";
const LoadableProductCardImage = ({src,title}:{src:string, title:string}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement|null>(null);
    useEffect(()=>{
        if(imgRef.current){
            imgRef.current.onload = () => setIsLoaded(true)
        }
    },[])
    return(
        <div className={`${productCardCss['product-card__image']} ${ (isLoaded) ? productCardCss['loaded']  : '' }`}>
            <img
                ref={imgRef}
                className={productCardCss['product-card__image-img']}
                src={src}
                alt={title}
                title={title}
            />
            <Preloader />
        </div>
    )
}
export default LoadableProductCardImage;
