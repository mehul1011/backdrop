import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {useState} from 'react';

function Modal(props) {
  const [value, setValue] = useState(true);

  const buttonForForm = () => {
    setValue(false)
  };

  // conditional displaying of component

  return (
    <div>
      {value === true ? <div>
        <div className='modal'>
    <button className='btn btn--alt' onClick={props.onClose}>
      X
    </button>
    <h2 className="card-title">{props.text}</h2>
    {/* flex */}
    <h3>Quick Start</h3>
    <div className="card">
    <div className="card-outer">
      <div className="card-icon"> 
        <i class="far fa-window-restore"></i>
      </div>
      
      {/* flex */}
      <div className="card-inner">
      <div className="">
        <p className="cards-title">Duplicate Event</p>
        <p>Choose an event to duplicate, tweek a few things, and you are well on your way. </p>
        </div>
      </div>
    </div>
    </div>

    <h3>Create from scratch</h3>
    <div className="card">
    <div className="card-outer">
      <div className="card-icon"> 
      <i class="fas fa-meteor"></i>
      </div>
      
      {/* flex */}
      <button className="btn-form" onClick={buttonForForm}>
      <div className="card-inner">
        {console.log(value)}
      <div className="">
        <p className="cards-title">New Virtual Event 
        <span class="vl"></span>
        <i class="fab fa-meetup cards-title-heading">Zoom integration available</i> </p>
        <p>Host via Zoom, or your preferred virtusl conferencing platform. </p>
        </div>
      </div>
      </button>
    </div>
    </div>

    <div className="card">
    <div className="card-outer">
      <div className="card-icon"> 
        <i class="far fa-window-restore"></i>
      </div>
      
      {/* flex */}
      <div className="card-inner">
      <div className="">
        <p className="cards-title">New in-person Event</p>
        <p>Guest will join you in the real world, face-to-face.</p>
        </div>
      </div>
    </div>
    </div>
  </div>
 <div></div>
      </div>
  
  
  : 
  
  
  <div className='modal'>
    <form className="card-form">
  <div className="date-form">
  <i class="fab fa-elementor"></i>
  <h2 className="date-form-title">Event Name</h2>

  </div>
<input type="text" name="eventname" />
  

  
 
  <div class="date">
  <h2><i class="fas fa-stopwatch"></i>Event Time and Date</h2>
<input type="text" name="datetimes"/>  
  </div>
    
<div name="province" class="province" >
  <h2><i class="fas fa-hospital-symbol"></i>Host</h2>
<select>
  <option value="ec">Eastern Cape</option>
  <option value="fs">Free State</option>
  <option value="gp">Gauteng</option>
  <option value="kzn">KwaZulu-Natal</option>
  <option value="lp">Limpopo</option>
  <option value="mp">Mpumalanga</option>
  <option value="nw">North West</option>
  <option value="nc">Northern Cape</option>
  <option value="wc">Western Cape</option>
</select>
  </div>
  
  

  <button class= "btn-submit" type="submit" value="Submit">Submit</button>    
</form>

  </div>
  
  }
    </div>

  );
}

export default Modal; 