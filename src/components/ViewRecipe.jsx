import React, { useState } from 'react'
import RecipeHeader from './RecipeHeader'

const ViewRecipe = () => {
    const [data, changeData] = useState(
        [
            {
                "recipeTitle": "Strawberry Shortcake",
                "IMGLink": "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "recipeLink": "https://sallysbakingaddiction.com/easy-homemade-strawberry-shortcake/"
            },
            {
                "recipeTitle": "Strawberry Smoothie",
                "IMGLink": "https://images.unsplash.com/photo-1621797350488-fb28c9217e3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "recipeLink": "https://foodviva.com/smoothie-recipes/strawberry-smoothie-recipe/"
            },
            {
                "recipeTitle": "Strawberry Salad",
                "IMGLink": "https://images.unsplash.com/photo-1570197571499-166b36435e9f?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "recipeLink": "https://www.wellplated.com/spinach-strawberry-salad/"
            },
            {
                "recipeTitle": "Strawberry Jam",
                "IMGLink": "https://images.unsplash.com/photo-1500912239908-4ee48acb3a7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "recipeLink": "https://www.vegrecipesofindia.com/strawberry-jam-recipe-strawberry-recipes/"
            },
            {
                "recipeTitle": "Strawberry Cheesecake",
                "IMGLink": "https://images.unsplash.com/photo-1553882297-6f3260a53da1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "recipeLink": "https://www.recipetineats.com/strawberry-cheesecake/https://www.recipetineats.com/strawberry-cheesecake/"
            },
            {
                "recipeTitle": "Strawberry Sorbet",
                "IMGLink": "https://images.unsplash.com/photo-1650553448920-9432f8086905?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "recipeLink": "https://www.asweetpeachef.com/strawberry-sorbet/"
            },
            {
                "recipeTitle": "Strawberry Pie",
                "IMGLink": "https://images.unsplash.com/photo-1511996571461-5ea529c6d9d7?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "recipeLink": "https://www.allrecipes.com/recipe/15836/strawberry-pie-ii/"
            },
            {
                "recipeTitle": "Strawberry Parfait",
                "IMGLink": "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "recipeLink": "https://www.eatingwell.com/recipe/250955/strawberry-yogurt-parfait/"
            },
            {
                "recipeTitle": "Strawberry Lemonade",
                "IMGLink": "https://images.unsplash.com/photo-1560351520-48e05f3d7d16?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "recipeLink": "https://tastesbetterfromscratch.com/strawberry-lemonade/"
            },
            {
                "recipeTitle": "Strawberry Muffins",
                "IMGLink": "https://images.unsplash.com/photo-1585041006405-61ec2b69fb4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "recipeLink": "https://www.allrecipes.com/recipe/8449/strawberry-muffins/"
            },
            {
                "recipeTitle": "Strawberry Tart",
                "IMGLink": "https://images.unsplash.com/photo-1592382419341-a1ef0ddd7c8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "recipeLink": "https://www.yourhomebasedmom.com/strawberry-tart/"
            },
            {
                "recipeTitle": "Strawberry Waffles",
                "IMGLink": "https://plus.unsplash.com/premium_photo-1693237860654-412480273981?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "recipeLink": "https://www.allrecipes.com/recipe/237219/strawberry-waffles/"
            },
            {
                "recipeTitle": "Strawberry Pancakes",
                "IMGLink": "https://images.unsplash.com/photo-1583747723026-c0296f01f8e4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "recipeLink": "https://mykidslickthebowl.com/strawberry-pancakes/"
            },
            {
                "recipeTitle": "Strawberry Cookies",
                "IMGLink": "https://images.unsplash.com/photo-1644596025702-06b653ac8b57?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "recipeLink": "https://www.theroastedroot.net/healthy-strawberry-oatmeal-cookies/"
            },
            {
                "recipeTitle": "Strawberry Meringue",
                "IMGLink": "https://images.unsplash.com/photo-1693941072703-74802476235a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "recipeLink": "https://itsnotcomplicatedrecipes.com/individual-strawberry-meringues/"
            }

        ]
    )

    return (
        <div>
            <RecipeHeader />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <br />



                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.IMGLink} height="350px" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.recipeTitle}</h5>

                                                <a href={value.recipeLink} class="btn btn-danger">Recipe</a>
                                            </div>
                                        </div>
                                    </div>

                                }
                            )}




                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ViewRecipe