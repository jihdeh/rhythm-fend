import React, { Component } from "react";


class ContestantView extends Component {
  render() {
    return(
      <div className="signup-body">
        <div className="signup-body__logo">
          <h3>SoundIT Africa</h3>
        </div>
        <div className="signup-background">
          
          <form className="signup-form">
            <div className="signup-header">
              <p>Signup to SoundIT Africa</p>
            </div> 
            <div className="form-group signup-form__input">
              <i className="fas fa-user signup-icon"/>
              <label htmlFor="inputFname"></label>
              <input type="text" className="form-control signup-form-control" id="signup-firstname" placeholder="First Name" required/>
            </div>
            
            <div className="form-group signup-form__input">
              <i className="fas fa-user signup-icon"/>
              <label htmlFor="inputLname"></label>
              <input type="text" className="form-control signup-form-control" id="signup-lastname"  placeholder="Last Name" required/>    
            </div>
                
            <div className="form-group signup-form__input">
              <i className="fas fa-at signup-icon"/>
              <label htmlFor="inputEmail"></label>
              <input type="username" className="form-control signup-form-control" id="signup-email" aria-describedby="emailHelp"  placeholder="Email Address" required/>    
            </div>
            
            <div className="form-group signup-form__input">
              <i className="fas fa-key signup-icon" />
              <label htmlFor="inputPassword"></label>
              <input type="password" className="form-control signup-form-control" id="signup-password" minlength="4" placeholder="Password" required/>
            </div>

            <div className="form-group signup-form__input">
              <i className="fas fa-key signup-icon" />
              <label htmlFor="inputConfirmPassword"></label>
              <input type="password" className="form-control signup-form-control" id="signup-confirm-password" minlength="4" placeholder="Confirm Password" required/>
            </div>

            <div className="signup-checkbox">
              <div className="checkbox-contestant">
                <input type="checkbox" name="contestant" value="Bike" /> 
                <p className="checkbox-contestant__text">Contestant</p>
              </div>
              <div className="checkbox-voter">
                <input type="checkbox" name="voter" value="Car" /> 
                <p className="checkbox-voter__text">Voter</p>
              </div>
            </div>

            <button type="submit" className="btn signup-submit">Create Account</button>
          </form>
          <p className="signup-footer">Already have an account? <span className="signup-signin">Sign in</span></p> 
        </div>
      </div>
    );
  }
}

export default ContestantView;