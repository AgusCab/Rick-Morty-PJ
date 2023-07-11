import React from 'react'
import SearchBar from './SearchBar'

// export default function Nav (){
//     return (
//         <Nav>
//             <SearchBar/>
//         </Nav>
//     )
       
// }

const Nav = ({onSearch}) => {
    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;