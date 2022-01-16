import React from "react";
import Card from "./Card"
import emojipedia from "../emojipedia"

function createCard(emojies){
  return( 
    <Card
  key={emojies.id}
  id={emojies.id}
  name={emojies.name}
  emoji={emojies.emoji}
//   meaning={emojies.meaning}
     />
  );
}


function App(){
  return( 
    <div>
      <h1>
      <span> Cuatro Golpes: A Dominican Classic!</span>
      </h1>

      
      <p class="description">If your craving a little DR food,
       but can’t make it to Malecon, you make 
       it yourself with the recipe below.<br/> I can’t 
       promise it will taste exactly you’ll find at
        180th Street and Broadway, but it’s close.</p>
     
      <p className="dictionary animate__animated animate__fadeInDown"> 
    {emojipedia.map(createCard)}
    
    </p>

    <hr/>
    
    <p class="howTo">
    <h4>Mangu</h4>
<strong>Prep Time: 15 minutes</strong> <br/>
<strong>Cook Time: 20 minutes</strong><br/>
<strong>Total Time: 35 minutes</strong><br/>
<h4>Ingredients</h4><br/>
<li>4 unripe plantains</li>
<li>1 1/2 teaspoons of salt</li>
<li>4 tablespoons of olive oil</li>
<li>1 cup of water at room temperature</li>
<li>2 tablespoons of olive oil</li>
<li>2 large onions</li>
<li>1 tablespoon of fruit vinegar</li>
<li>Salt</li>
<h4>To Prepare Mangu</h4><br/>
<li>Peel the plantains and cut into 8 pieces.</li>
<li>Remove the center where the seeds are located (optional)</li>
<li>Boil the plantains adding until they are very tender, having added the salt to the water.</li>
<li>Take the plantains out of the water and mash them with a fork until they are very smooth.</li>
<li>Add olive oil and mix.</li>
<li>Add the water and keep mashing and mixing until it is very smooth puree.</li>
<h4>To Prepare the Onions</h4><br/>
<li>Heat a tablespoon of oil in pan.</li>
<li> Add onions and cook and stir until they become transparent.</li>
<li> Add vinegar and season with salt to taste.</li>
<li>Garnish mangu with the onions and serve with sunny side-up eggs or Dominican scrambled eggs, Dominican fried cheese or fried slices of salami. </li>  
    </p>
   </div>
  )
}


export default App;