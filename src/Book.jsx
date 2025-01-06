import React, { Component } from 'react'
import "./App.css";
class Book extends Component {
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
               
                <div class="content-box">
                <h1>Slambook</h1>
                <label>Name :</label>
                <input type="text" id="Name"/><br/><br/>            
                <label>Nickname :</label>
                <input type="text" id="Nickname"/> 
                <br/><br/>
                <label>DOB :</label>
                <input type="date" id="DOB"/>
                <br/><br/>
                <label>Address :</label>
                <input type="text" id="Address"/>
                <br/><br/>
                <label> Memories :</label>
                <input type="text-area" id="Memories"/> 
                <br/><br/>
                <label>Gender :</label>
                <label> Male</label>
                <input type="radio"  id="Gender" name="gender" value="male"/>
                <label>Female</label>
                <input type="radio"  id="Gender" name="gender" value="male"/>
                <br/><br/>
                <label>FAV Actors :</label>
                <input type="checkbox" id="Actors" value="Actors"/>
                <label>Kamal</label>
                <input type="checkbox" id="Actors" value="Actors"/>
                <label>Rajini</label>
                <input type="checkbox" id="Actors" value="Actors"/>
                <label>Vijay</label>
                <input type="checkbox" id="Actors" value="Actors"/>
                <label>Ajith</label>
                <br/><br/>
                <label for="School">School Name :</label> 
                <select id="School Name" name="fSchool Name"> 
                <option value="Govt School">Govt School</option> 
                <option value="Senthil SCl">Senthil SCl</option> 
                <option value="Vijay SCL">Vijay SCL</option> 
                <option value="Vallalar SCL">Vallalar SCL</option>
                </select>
                <br/><br/>
                <div class="container"> 
                    <button>Submit</button>
                    </div>
                    </div>
 </div>
        )
    }
}
export default Book;

    
       
