import * as actions from'./cartAction';

const cart = (state = {
    data : [],
    payementOption: null,
    total : 0,
    state : null,
    error : null
},action) => {
    const updateTotal = (data) => {
        let total
         = 0;
        data.map(t => total += t.quantityCart * t.prix_unit);
        return total.toFixed(2);
    }
    switch(action.type){
        case actions.ADD_PRODUCT : {
            let product = action.product;
            product['quantityCart'] = parseInt(action.quantityCart);
            let data = [...state.data, product];
            let total = updateTotal(data)
            return {
                ...state,
                data,
                total
            };
        }
        case actions.DELETE_PRODUCT: {
            let data = state.data.filter((t) => t.id !== action.index);
            let total = updateTotal(data)
            return {
                ...state,
                data,
                total
            }
        }
        case actions.ADD_QUANTITY: {
            let data = state.data.map( t => {
                if (t.id === action.index) {
                  if(t.quantity >= t.quantityCart + action.quantity){
                    t.quantityCart += parseInt(action.quantity)
                  }
                }
                return t;
                });
            let total = updateTotal(data);
                return {
                    ...state,
                    data ,
                    total,
            }
        }
        case actions.REMOVE_QUANTITY: {
            let data = state.data.map( t => {
                if (t.id === action.index) {
                  if(t.quantityCart > 1){
                    t.quantityCart -= parseInt(action.quantity)
                  }
                }
                return t;
                });
            let total = updateTotal(data);
            return {
                ...state,
                data,
                total,

            }
        }
        case actions.ADD_PAYEMENT_OPTION: {
            return {
                ...state,
                payementOption : action.option
            }
        }
        case actions.COMMANDE_VALIDER_SUCCESS : {
            return {
                    data : [],
                    payementOption: null,
                    total : 0,
                    error:null,
                    state : 'valider'
            }

        }
        case actions.COMMANDE_VALIDER_ERROR : {
            return {
                ...state,
                error : action.error
            }

        }
        default : {
            return state
        }
    }
}

export default cart
