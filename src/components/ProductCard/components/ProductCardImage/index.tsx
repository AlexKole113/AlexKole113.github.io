import productCardCss from "@/components/ProductCard/styles/index.scss";
import {useState} from "react";
import Preloader from "@/components/Preloader";
const LoadableProductCardImage = ({src,title}:{src:string, title:string}) => {

    //TODO: This function only for testing and demonstration. !!!Must be deleted!!!
    const loadDemo = () => { setTimeout(()=>{ setIsLoaded(true) }, Math.random() * (900 - 300) + 300 )}

    const [isLoaded, setIsLoaded] = useState(false);
    return(
        <div className={`${productCardCss['product-card__image']} ${ (isLoaded) ? productCardCss['loaded']  : '' }`}>
            <img
                className={productCardCss['product-card__image-img']}
                src={src}
                alt={title}
                title={title}
                onLoad={loadDemo}
            />
            {
                (!isLoaded) && <Preloader />
            }
        </div>
    )
}
export default LoadableProductCardImage;
