import './style.css';
import Logo from './soju.png'
import generateHome from './home';
import generateMenu from './menu';
/* SKELETON */

// LOGO/HEADING

const mainContainer = document.querySelector('.content');

// Tabs section
const tabsContainer = document.createElement('div');
tabsContainer.classList.add('tab-container')

function createTabElement(name) {
  let element = document.createElement('div');
  element.textContent = name;
  element.setAttribute('id', name.toLowerCase())
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

// Footer 
const footer = document.createElement('footer')
footer.textContent = 'bilguun-ocean'

const tabHome = createTabElement("Home")
const tabMenu = createTabElement("Menu")
const tabLoc = createTabElement("Location")

tabsContainer.appendChild(tabHome)
tabsContainer.appendChild(tabMenu)
tabsContainer.appendChild(tabLoc)

mainContainer.prepend(tabsContainer)
mainContainer.prepend(header)

// generateHome()
// generateMenu()

function deletePage() {
  const displayedTab =  document.querySelector('#current-tab')
  if (displayedTab != null)
    displayedTab.parentNode.removeChild(displayedTab)

}



function selectTab(tabName) {
  console.log(`Selected Tab: ${tabName.id}`)
  deletePage()
  // deletePage()
  if (tabName.id == 'home'){
    generateHome()
  }

  else if (tabName.id == 'menu'){
    generateMenu()
  }
  else
    generateLoc()
}



// Tab selector
// const 
// as starting tab  
// generateHome()

tabHome.addEventListener('click', ()=> {
  selectTab(tabHome)
})
tabMenu.addEventListener('click', ()=> {
  selectTab(tabMenu)
})
tabLoc.addEventListener('click', ()=> {
  selectTab(tabLoc)
})

//if currently on the tab that is being clicked do nothing

//if its another tab than that is being clicked delete the contents

//and generate that tab, and remember it is currently on 

mainContainer.appendChild(footer)



