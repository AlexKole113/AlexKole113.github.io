import {IFakeProductItem} from "../../mocks/fakeData/shop";
const addPreloadingData = (currentData:IFakeProductItem[], amount:number) => {
    const newArr = [...currentData];
    for(let i = 0 ; i < amount; i++){
        newArr.push({ id: `loading-${i}` , sku: 0, title: '', image: '', price: 0, currency: '$', stock: 0, data:[]  })
    }
    return newArr;
}
export default addPreloadingData;
