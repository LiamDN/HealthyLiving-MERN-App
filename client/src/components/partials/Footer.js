import '../../public/css/index.css';

function Footer() {
  return (
    <footer>
        <div class="footer-grid">
            <p><a href="/">Home</a></p>
            <p>Blog</p>
            <div class="social-media-link"><p>Facebook</p><img src={require("../../public/images/facebook.png")} alt="Facebook Logo" width="20px"/></div>

            <p><a href="/on-the-menu">On The Menu</a></p>
            <p>FAQ</p>
            <div class="social-media-link"><p>Twitter</p><img src={require("../../public/images/twitter.png")} alt="Twitter Logo" width="20px"/></div>
                        
            <p>Pricing</p>
            <p>Our Ingredients</p>
            <div class="social-media-link"><p>Instagram</p><img src={require("../../public/images/instagram.png")} alt="Instagram Logo" width="20px"/></div>
        </div> 
        <div>Copyright © Winter 2022, Liam Nugara, WEB322 NDD</div>    
    </footer>
  );
}

export default Footer;
