const SET_MENU_STATUS = "SET_MENU_STATUS"

const sidebarState = {
    isMenuActive: false
}

let reducerSidebar = (state = sidebarState, action) => {
    switch (action.type) {
        case SET_MENU_STATUS:
            return {
                ...state,
                isMenuActive: !state.isMenuActive
            }
        default:
            return state
    }
}

/* Action Creators! */

export const setMenuStatus = () => ({ type: SET_MENU_STATUS })


export default reducerSidebar