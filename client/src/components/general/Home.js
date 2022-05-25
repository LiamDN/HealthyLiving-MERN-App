import '../../public/css/index.css';
import Hero from '../partials/Hero'

function Home() {
       return (
              <div>
                     <Hero />
                     <div class="mb-5">
                            <h1 class="meal-category">Our Current Top Meals</h1>
                            <div class="container">
                                   <div class="row justify-content-center">
                                          {/* {{ #each topMeals }}
                                   <div class="col-12 col-md-6 col-xl-4 mt-4">
                                          {{> mealkit this}}
                                   </div>
                                   {{/ each}} */}
                                   </div>
                            </div>
                     </div>
              </div>
       );
}

export default Home;


