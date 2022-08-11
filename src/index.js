import './style.css';

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

const header = document.createElement('header')
header.classList.add('header-content')
header.textContent =  'Korean Street Food Stalls 포장마차'

tabsContainer.appendChild(createTabElement("Home"))
tabsContainer.appendChild(createTabElement("Menu"))
tabsContainer.appendChild(createTabElement("Location"))

mainContainer.appendChild(header)
mainContainer.appendChild(tabsContainer)
