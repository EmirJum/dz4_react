import React from "react";
import classes from "./contactsPage.module.css"


class ContactsPage extends React.Component {

  constructor (props) {
    super(props)
    this.state = {menu: false}
  }

  changeTitle = () => {
      this.setState({
        title: "i am new title"
      })
  }

  handleMenu = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  render() {
    return (
      <div>
        {/* Contacts Page - {this.state.title}
        <button onClick={this.changeTitle}>on change title</button> */}
        <div>
            <button onClick={this.handleMenu}>
                MENU
            </button>

            
                <ul 
                className={this.state.menu === true 
                      ? 
                      classes.menuOpen
                      :
                      classes.menuClose
                    }>
                      
                  <li>main page</li>
                  <li>about page</li>
                  <li>contacts page</li>
                </ul>
               
            

            
        </div>
      

      </div>
    )
  }
}

export default ContactsPage;