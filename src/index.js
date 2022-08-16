import './style.css';
import Logo from './soju.png'
import generateHome from './home';
import generateMenu from './menu';
import generateLocation from './location';
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
footer.textContent = 'by '

const gitLink = document.createElement('a')
gitLink.setAttribute('href', 'https://github.com/bilguun-ocean')
gitLink.textContent = 'bilguun-ocean'

footer.appendChild(gitLink)



// Adding tab section

const tabHome = createTabElement("Home")
const tabMenu = createTabElement("Menu")
const tabLoc = createTabElement("Location")

tabsContainer.appendChild(tabHome)
tabsContainer.appendChild(tabMenu)
tabsContainer.appendChild(tabLoc)

mainContainer.prepend(tabsContainer)
mainContainer.prepend(header)


function deletePage() {
  const displayedTab =  document.querySelector('#current-tab')
  if (displayedTab != null)
    displayedTab.parentNode.removeChild(displayedTab)

}

function addFooter() {
  mainContainer.appendChild(footer)
}

let current_tab = ''

function selectTab(tabName) {
  console.log(`Selected Tab: ${tabName.id}`)
  if (current_tab == tabName.id)
    return
  current_tab = tabName.id
  deletePage()
  // deletePage()
  if (tabName.id == 'home'){
    generateHome()
    addFooter()
  }

  else if (tabName.id == 'menu'){
    generateMenu()
    addFooter()
  }
  else {
    generateLocation()
    addFooter()
  }
}


tabHome.addEventListener('click', ()=> {
  selectTab(tabHome)
})
tabMenu.addEventListener('click', ()=> {
  selectTab(tabMenu)
})
tabLoc.addEventListener('click', ()=> {
  selectTab(tabLoc)
})

// Starting on Home Page

selectTab(tabHome)

