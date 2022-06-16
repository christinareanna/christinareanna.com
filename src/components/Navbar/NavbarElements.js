// style components
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
// import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
max-width: 1100px;
`

export const NavLogo = styled(Link)`
color: white;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px
font-weight: bold;
text-decoration: none;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin: 0;
padding: 0;


@media screen and (max-width: 768px) {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
}

@media screen and (max-width: 425px) {
    height: 60px;
    width: 100%;
    font-size: 8px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    margin: 0;
    padding: 0;
}

@media screen and (max-width: 375px) {
    height: 60px;
    width: 100%;
    font-size: 6px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    margin: 0;
    padding: 0;
}

@media screen and (max-width: 320px) {
    height: 60px;
    width: 100%;
    font-size: 4px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    margin: 0;
    padding: 0;
}
`

export const NavItem = styled.li`
height: 80px;
margin-top: 50px;
`

// export const NavLink = styled(Link)`
// color: #fff;
// border-radius: 20px;
// display: flex;
// align-items: center;
// padding: 0 1rem;
// height: 100%;
// cursor: pointer;
// letter-spacing: 10px;



// &.active {
//     border-bottom: 3px solid #01bf71;
// }
// `;