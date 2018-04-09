import React, { Component } from "react";
import "../styles/dashboard.css";
//import WebHeader from "../components/webheader";
import nobody from "../assets/images/nobody.jpg";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
//import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return(
      <MuiThemeProvider>
      <div className="content">
      <div className="mobile-drawer">

          <Drawer open={this.state.open} containerStyle={{marginTop:'8em'}} >
        <MenuItem>
          {<div className="dashboard-search">
              <form className="dashboard-form">
                <input className="dashboard-input" type="search" name="search" placeholder="Search ..."/>
                <i class="fas fa-search search-icon"></i>
              </form>
            </div>}
            
           </MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Media</MenuItem>
          <MenuItem>Socials</MenuItem>
          <MenuItem>Connect</MenuItem>
          <MenuItem>Music</MenuItem>
          <MenuItem>Videos</MenuItem>
          <MenuItem>Most Liked</MenuItem>
          <MenuItem>Most Viewed</MenuItem>
          <MenuItem>Winners</MenuItem>
        </Drawer>    
      </div>
        <div className="row dashboard-menu">
          <div className="col-sm-2 dashboard-menu__left">
            <p>SoundIT Africa</p>
          </div>
          <div className="col-sm-10 dashboard-menu__right">
          <div className="menu-icon">
          <IconButton tooltip="Font Icon" onClick={this.handleToggle} tooltip="menu">
          <FontIcon color={'white'} />
        </IconButton>
        </div>
            <div className="right-b">
              <i class="far fa-envelope right-b__icon"></i>
              <i class="far fa-bell right-b__icon"></i>
              <i class="far fa-flag right-b__icon"></i>
              <div className="right-b__owner">
                <img className="owner__image" src={nobody} alt=""/>
                <p>Doe</p>
              </div>
              <i class="fas fa-cogs right-b__icon"></i>
            </div>
          </div>
        </div>

        <div className="row dashboard-body">
          <div className="col-sm-2 dashboard-body__left">
            <div className="dashboard-search">
              <form className="dashboard-form">
                <input className="dashboard-input" type="search" name="search" placeholder="Search ..."/>
                <i class="fas fa-search search-icon"></i>
              </form>
            </div>
            <div className="dashboard-navigation">
              <h4>Links</h4>
              <ul>
                <li>Blog</li>
                <li>Media</li>
                <li>Social</li>
                <li>Connect</li>
              </ul>
              <ul>
                <li>Music</li>
                <li>Videos</li>
                <li>Most Liked</li>
                <li>Most Viewed</li>
                <li>Winners</li>
              </ul>
            </div>
          </div>
          
          <div className="col-sm-10 dashboard-body">
            <div className="row head">
              <div className="col-md-6 col-left">
                <div className="col1">
                  <h1>Lorem ipsum</h1>
                </div>

                <div className="row a">
                  <div className="col-sm-6 a1">
                  <h1>Lorem ipsum</h1>
                  </div>
                  <div className="col-sm-6 a2">
                  <h1>Lorem ipsum</h1>
                  </div>
                </div>

                <div className="col2">
                <h1>Lorem ipsum</h1>
                </div>

                <div className="row b">
                  <div className="col-sm-6 b1">
                  <h1>Lorem ipsum</h1>
                  </div>
                  <div className="col-sm-6 b2">
                  <h1>Lorem ipsum</h1>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-right">
                <div className="col3">
                <h1>Lorem ipsum</h1>
                </div>

                <div className="col4">
                <h1>Lorem ipsum</h1>
                </div>

                <div className="col5">
                <h1>Lorem ipsum</h1>
                </div>

                <div className="row c">
                  <div className="col-sm-6 c1">
                  <h1>Lorem ipsum</h1>
                  </div>
                  <div className="col-sm-6 c2">
                  <h1>Lorem ipsum</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      </MuiThemeProvider>
    )
  }
}