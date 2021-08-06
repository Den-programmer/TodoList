import { faHome, faImage, faMobile, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

const SET_MENU_STATUS = "SET_MENU_STATUS"
const SET_MENUITEM_STATUS = "SET_MENUITEM_STATUS"
const SET_MENUITEM_STATUS_HOVERED = 'SET_MENUITEM_STATUS_HOVERED'

const SET_SIDEBAR_WIDTH = 'SET_SIDEBAR_WIDTH' 

const sidebarState = {
    menu: [
        {
            id: 1,
            title: 'Home',
            path: '/',
            isActive: true,
            isItLink: false,
            isItOption: false,
            href: '',
            isHovered: false,
            icon:  faHome
        },
        {
            id: 2,
            title: 'About Us',
            path: '/aboutUS',
            isActive: false,
            isItLink: false,
            isItOption: false,
            href: '',
            isHovered: false,
            icon:  faInfoCircle
        },
        {
            id: 3,
            title: 'Contacts',
            path: '',
            isActive: false,
            isItLink: true,
            isItOption: false,
            href: '#contact',
            isHovered: false,
            icon:  faMobile
        },
        {
            id: 4,
            title: 'Background',
            path: '',
            isActive: false,
            isItLink: false,
            isItOption: true,
            href: '',
            isHovered: false,
            icon:  faImage
        },
    ],
    isMenuActive: false,
    sidebarWidth: '240px'
}

const reducerSidebar = (state = sidebarState, action) => {
    switch (action.type) {
        case SET_MENU_STATUS:
            return {
                ...state,
                isMenuActive: !state.isMenuActive
            }
        case SET_MENUITEM_STATUS:
            return {
                ...state,
                menu: state.menu.map(item => {
                    if(item.id === action.itemId) return { ...item, isActive: true }
                    return { ...item, isActive: false }
                })
            }    
        case SET_MENUITEM_STATUS_HOVERED:
            return {
                ...state,
                menu: state.menu.map(item => {
                    if(item.id === action.itemId) return { ...item, isHovered: action.isHovered ? true : false }
                    return { ...item, isHovered: false }
                })
            }  
        case SET_SIDEBAR_WIDTH:
            return {
                ...state,
                sidebarWidth: action.sidebarWidth
            }      
        default:
            return state
    }
}

// Action Creators! 

export const setMenuStatus = () => ({ type: SET_MENU_STATUS })
export const setMenuItemStatus = (itemId) => ({ type: SET_MENUITEM_STATUS, itemId })
export const setMenuItemStatusHovered = (itemId, isHovered) => ({ type: SET_MENUITEM_STATUS_HOVERED, itemId, isHovered })

export const setSidebarWidth = (sidebarWidth) => ({ type: SET_SIDEBAR_WIDTH, sidebarWidth })

export default reducerSidebar