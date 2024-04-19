import React from 'react'
import RecipeHeader from './RecipeHeader'

const HomeRecipe = () => {
    return (
        <div>
            <RecipeHeader />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExampleCaptions" class="carousel slide">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://images.unsplash.com/photo-1612472844581-dd9310a6bad1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Strawberry Recipes</h5>
                                                <p>My Love for strawberries is immaculate and i have poured my heart into making my strawberry cook book. 
                                                    <br />
                                                    Find your easy-peasy strawberry recipes here.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://images.unsplash.com/photo-1499889808931-317a0255c0e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                            <h5>Strawberry Recipes</h5>
                                                <p>My Love for strawberries is immaculate and i have poured my heart into making my strawberry cook book. 
                                                    <br />
                                                    Find your easy-peasy strawberry recipes here.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://plus.unsplash.com/premium_photo-1691787288744-d586fffa3550?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                            <h5>Strawberry Recipes</h5>
                                                <p>My Love for strawberries is immaculate and i have poured my heart into making my strawberry cook book. 
                                                    <br />
                                                    Find your easy-peasy strawberry recipes here.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeRecipe