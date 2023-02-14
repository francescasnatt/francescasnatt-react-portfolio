import React from "react";

const Header = (props) => {
    function clickHandler(event) {
        const id = event.target.id;
        props.setWhatToRender(id)
    }

    return (
        <nav className="navbar">
            <h1>Francesca Snatt</h1>
            <div className="links">
                <a id="home" href="#" onClick = {clickHandler}>Home</a>
                <a id="gallery" href="#" onClick = {clickHandler}>Gallery</a>
                <a id="contact" href="#" onClick = {clickHandler}>Contact</a>
            </div>
        </nav>
    );
}
 
export default Header;