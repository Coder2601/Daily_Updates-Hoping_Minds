import {books} from '../../data'

export const handleAddToCart=(id)=>{
    let cartBook = books[id];
    // console.log(cartBook);
    return {type:'ADD', payload:{...cartBook, id:id}}
}

export const getTotalAmount = ()=>{
    let pp = 0;
    let cartData = JSON.parse(localStorage.getItem('cartItems'));
    let checkoutData = JSON.parse(localStorage.getItem('checkoutItems'))

    if(cartData !== null){
        for(let i=0;i<cartData.length;i++){
            pp += cartData[i].price;
        }
        // console.log(pp);
        return pp;
    }
    else if(checkoutData !==null){
        for(let i=0;i<checkoutData.length;i++){
            pp += checkoutData[i].price;
        }
        return pp; 
    }
    else{
        return pp;
    }

}