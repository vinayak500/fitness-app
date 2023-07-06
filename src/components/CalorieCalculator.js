import React from 'react';

const CalorieCalculator = () => (
  <div className="calorie-cal-container">
            <h2> CHECK YOUR MAINANNCE CALORIE: </h2>
           <p id="p11"> The Calorie Calculator can be used to estimate the number of calories a person needs to consume each day.</p> 
           <p id="p12"> This calculator can also provide some simple guidelines for gaining or losing weight.</p>

       <div id="container">
        
        <div id="inner-cont1">
            <form id="form1">
            <fieldset id="fieldset1">
            <input type="number" id="age" />
            <br/><br/><br/><br/><br/>

            <label> GENDER:</label><br/><br/>
            <input type="radio" value="male" id="male" name="gender" />
            <label htmlFor="male">MALE:</label><br/><br/>
            <input type="radio" value="female" name="gender" id="female" />
            <label htmlFor="female">FEMALE:</label><br/><br/>
            <label htmlFor="height">HEIGHT:</label>
              <input type="number" id="height" />
               <br/>
              <label htmlFor="weight">WEIGHT:</label>
              <input type="number" id="weight" /><br/><br/>
              <label htmlFor="activity"> ACTVITY: </label>
              <select id="activity">
                <option value="1.85"> Moderate </option>
                <option value="2.2"> Activity </option>
                <option value="2.4"> Highly Active </option>
              </select><br/><br/>
              <button id="buttoncalculate"> CALCULATE </button>
              <div id="calorieView" >
                    <h2 id="calorieView2"> 2500 cals</h2>   
              </div>
            </fieldset>
            </form>
        </div>

        <div id="inner-cont2">
            <ul>
                <li> Exercise: 15-30 minutes of elevated heart rate activity. </li>
                <li> Intense exercise: 45-120 minutes of elevated heart rate activity. </li>
                <li> Very intense exercise: 2+ hours of elevated heart rate activity. </li>
               </ul>
        
     
               <table id="table2">
                 <tr id="tablerow2">
                     <td> Food Component: </td>
                     <td> Calories (kcal) per gram: </td>
                 </tr>
     
                 <tr>
                     <td> Fat </td>
                     <td> 8.8 </td>
                 </tr>
     
                 <tr>
                     <td> Proteins </td>
                     <td> 4.1 </td>
                 </tr>
     
                 <tr>
                     <td> Carbohydrates </td>
                     <td> 4.1 </td>
                 </tr>
     
                 <tr>
                     <td> Fiber </td>
                     <td> 1.9 </td>
                 </tr>
               </table>

          </div>


       </div>

  </div>



);

export default CalorieCalculator;