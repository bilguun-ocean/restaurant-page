import './style.css';
import Logo from './soju.png'
import generateHome from './home';
/* SKELETON */

// LOGO/HEADING

const mainContainer = document.querySelector('.content');

// Tabs section
const tabsContainer = document.createElement('div');
tabsContainer.classList.add('tab-container')

function createTabElement(name) {
  let element = document.createElement('div');
  element.textContent = name;
  element.classList.add("tab")
  return element
}

// Tab selector 

//if currently on the tab that is being clicked do nothing

//if its another tab than that is being clicked delete the contents

//and generate that tab, and remember it is currently on 


// Header 
const header = document.createElement('div')
header.classList.add('header-content')
const headerText = document.createElement('header')
headerText.textContent =  '포장마차'
header.appendChild(headerText)
const logo = document.createElement('img')
logo.setAttribute('src', Logo)
logo.classList.add('logo')
header.appendChild(logo)

tabsContainer.appendChild(createTabElement("Home"))
tabsContainer.appendChild(createTabElement("Menu"))
tabsContainer.appendChild(createTabElement("Location"))

mainContainer.prepend(tabsContainer)
mainContainer.prepend(header)

generateHome()



