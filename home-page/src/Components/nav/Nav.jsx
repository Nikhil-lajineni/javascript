import "./Nav.css";
function Nav() {
    return (
        <div className="navContainer">
            <div className="leftNav">
                <h1>Logo</h1>
            </div>
            <div className="centerNav">
            <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png">Home</a>
        <a href="">Electronics</a>
        <a href="">Jewelery</a>
        <a href="">Mens</a>
        <a href="">Womens</a>
            </div>
      <div className="rightNav">
        <button>Logout</button>
         </div>
        </div>
        
    )
}
export default Nav;