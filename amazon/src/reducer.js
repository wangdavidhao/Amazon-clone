export const initialState = {
    basket:[],   
    user:null,          
}

{/*Basket = array des items présents dans le panier*/}

//Selector
export const getBasketTotal = (basket) => basket?.reduce((amount,item) => item.price + amount, 0 )

const reducer = (state,action) => {


    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id      
            );                             {/*On trouve l'id concerné*/}

            let newBasket = [...state.basket];   {/*Variable temporaire*/}

            if(index >= 0){
                newBasket.splice(index,1);    {/*on enlève UN l'élément à cet index*/}

            }else{
                console.warn('Can t remove this item (id: ${action.id})' )
            }

            return {
                ...state,
                basket:newBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }

        dafault:
        return state;
    }
}

export default reducer;