
import React from "react";
import styles from '../styles/Home.module.css'

class NavBar extends React.Component<{}, any> {
    constructor(props: Readonly<{}> | {}) {
      super(props);
      this.state = {
        show: true,
        scrollPos: 0
      };
    }
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      document.getElementById('hamburgerMenu')!.addEventListener('click',this.toggleClassMenu)
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  
    handleScroll = () => {
      let buttonId = document.getElementById('hamburgerMenu');
      if (!buttonId!.classList.contains(styles.open)){
        this.setState({
          scrollPos: document.body.getBoundingClientRect().top,
          show: document.body.getBoundingClientRect().top > this.state.scrollPos
        });
      }
    };
    
    toggleClassMenu = () => {
      let buttonId = document.getElementById('hamburgerMenu');
      let ham = document.getElementById('Ham');
      let sideBar = document.getElementById('sideBar');

      if (!buttonId!.classList.contains(styles.open)) {
        buttonId!.classList.add(styles.open)
      } else {
        buttonId!.classList.remove(styles.open)
      }

      if (ham!.classList.contains(styles.HamHidden) && buttonId!.classList.contains(styles.open)) {
        ham!.classList.add(styles.HamButton)
        ham!.classList.remove(styles.HamHidden)
      }

      if (buttonId!.classList.contains(styles.open)) {
        sideBar!.classList.add(styles.openSlide)
      } else {
        sideBar!.classList.remove(styles.openSlide)
      }
    }

    render() {
      return (
        <header className={`${this.state.scrollPos == 0 ? styles.header : styles.headerScroll} ${!this.state.show && window.innerWidth > 800 ? styles.hidden : styles.headerEffectOnScroll }`}>
          <nav className = {`${styles.navB} ${this.state.show ? styles.active : styles.hidden}`}>
              <ul>
                <li><a href={'#AboutMe'}>About Me</a></li>
                <li><a href={'#Projects'}>Projects</a></li>
                <li><a href={'#Contact'}>Contact</a></li>
              </ul>
            </nav>
            <button className={this.state.show ? styles.HamButton : styles.HamHidden} id='Ham'>
              <div className={styles.HamIcon}>
                <div className={styles.HamBars} id='hamburgerMenu'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </button>
            <nav className={styles.sideNav} id='sideBar'>
                <ul>
                  <li><a href={'#AboutMe'}>About Me</a></li>
                  <li><a href={'#Projects'}>Projects</a></li>
                  <li><a href={'#Contact'}>Contact</a></li>
                </ul>
            </nav>
        </header>
        )
    }
  }

export default NavBar
