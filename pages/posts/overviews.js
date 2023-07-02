

export default function Header() {
    return (
            <div>
          <div id="header">
            <div id="mask">
              <h1>SPORTTV.com</h1>
              <a href="https://www.facebook.com/jeremiah.ret.1"><img src="../img/facebook.png" alt="facebook" id="fb" /></a> 
              <a href="https://www.instagram.com/?hl=en"><img src="../img/ig.png" alt="Instagram Icon" id="ig" /></a>
              <a href="https://twitter.com/jazmine_jackie"><img src="../img/twitter.jpg" alt="Twitter Icon" id="twitter" /></a>
              <a style={{padding: '5px'}} href="./cart_page.html"><img id="cart" src="./img/cart1.png" /><div id="cart_number" /></a>
            </div>
          </div>
          <div id="mid">
            <div id="midmask">
              <div id="upper">
                <button id="About"><a href="./Home.html">Home</a></button>
                <button id="Shop"><a href="./shop.html">SHOP</a></button>
                <button id="admin_link" style={{float: 'right'}}><a className="active" href="./adminpage.html">Admin</a></button>
              </div><br /><hr /><br />
              <h1 style={{color: 'white', fontFamily: 'fantasy', backgroundColor: 'black'}}>SPORTTV.Shop</h1>
              <br />
              <hr /><br /><br />
              <h1 style={{color: 'white', fontFamily: 'fantasy'}}>Sport Kits and Jerseys</h1><br /><br />
              <div id="product_box">
              </div><br /><br /><br /><hr /><br />
              <div id="blank">
                <h1>SPORTTV.com</h1>
              </div>
            </div>
          </div>
        </div>
    );
}