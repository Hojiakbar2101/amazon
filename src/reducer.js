export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    case "ADD_TO_BASKET":
      // LOGIC FOR ADDING ITEM TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    // break;
    case "REMOVE_FROM_BASKET":
      // LOGIC FOR REMOVING ITEM FROM BASKET
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        console.log(index);
        // item exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.id}) as its not`);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
