const toggleMenu = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      console.log("reducer is called");
      return !state;
    default:
      return state;
  }
};

export default toggleMenu;
