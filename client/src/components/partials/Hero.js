import '../../public/css/index.css';

function Hero() {
    return (
        <div>
            <div class="hero-image">
                <div class="hero-text">
                    <h1>Fresh, Healthy Food at Lower Cost</h1>
                    <p>HealthyLiving is growing as one of Canada's top food delivery services! Sign up now and get your first meal on us.</p>
                    <a href="/user/registration" class="get-started">Get Started</a>
                </div>
            </div>
            {/* //             !-- < div id = "content-section-grid" >
                //     <div class="grid-img1"></div>
                //     <div class="grid-img2"></div>
                //     <div class="grid-img3"></div>
                //     <div class="grid-img4"></div>

                //     <div><h3>Order Food Online</h3>Order delicious and healthy meals right here on our website! All our ingredients are fresh and are grown organically.</div>
                //     <div><h3>Learn New Recipies</h3>View our recipies for free and use your own ingredients to master healthy eating on your own!</div>
                //     <div><h3>Learn About Nutrition</h3>Read our articles to learn more about nutrition and how your diet can affect you. Take a step towards better health!</div>
                //     <div><h3>Download our App</h3>Download our new app for iPhone and Android now! Ordering healthy food is easier than ever before.</div>
                // </div > --} */}

            <div class="content-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col">
                            <div class="grid-img1 mx-auto"></div>
                            <div><h3 class="mt-3">Order Food Online</h3>Order delicious and healthy meals right here on our website! All our ingredients are fresh and are grown organically.</div>
                        </div>
                        <div class="col">
                            <div class="grid-img2 mx-auto"></div>
                            <div><h3 class="mt-3">Learn New Recipies</h3>View our recipies for free and use your own ingredients to master healthy eating on your own!</div>
                        </div>
                        <div class="col">
                            <div class="grid-img3 mx-auto"></div>
                            <div><h3 class="mt-3">Learn About Nutrition</h3>Read our articles to learn more about nutrition and how your diet can affect you. Take a step towards better health!</div>
                        </div>
                        <div class="col">
                            <div class="grid-img4 mx-auto"></div>
                            <div><h3 class="mt-3">Download our App</h3>Download our new app for iPhone and Android now! Ordering healthy food is easier than ever before.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;