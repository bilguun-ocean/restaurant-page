import './style.css';
import Logo from './soju.png'

/* SKELETON */

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

mainContainer.appendChild(header)
mainContainer.appendChild(tabsContainer)
