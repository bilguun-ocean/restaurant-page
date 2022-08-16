import mandu from './food-images/mandu.jpeg'
import kimbap from './food-images/kimbap.jpg'
import corndog from './food-images/corndog.png'
import eomuk from './food-images/eomuk.jpeg'
import hotteok from './food-images/hotteok.jpeg'
import bungeoppang from './food-images/bungeoppang.png'
import tteokbokki from './food-images/tteokbokki.jpg'
import soju from './food-images/soju.png'
import makgeolli from './food-images/makgeolli.jpg'
import hite from './food-images/hite.png'

export default function generateMenu() {

  //function for creating menu-item 
  function createMenuItem(name, price, description, imageSrc) {
    const item = document.createElement('div')
    item.classList.add('menu-item')

    const image = document.createElement('img')
    image.setAttribute('src', imageSrc)
    image.classList.add('menu-item-image')

    const descriptionContainer = document.createElement('div')
    descriptionContainer.classList.add('item-description')

    const itemName = document.createElement('div')
    itemName.classList.add('item-name')
    itemName.textContent = name

    const itemPrice = document.createElement('span')
    itemPrice.textContent = price
    itemPrice.classList.add('price')
    itemName.appendChild(itemPrice)
    descriptionContainer.appendChild(itemName)

    const itemDescription = document.createElement('div')
    itemDescription.textContent = description
    itemDescription.classList.add('item-description-text')
    descriptionContainer.appendChild(itemDescription)

    item.appendChild(image)
    item.appendChild(descriptionContainer)
    
    return item

  }

  // Function for creating section header
  function createSectionHeader(sectionName) {
    const header = document.createElement('div')
    header.classList.add('section-header')
    header.textContent = sectionName

    return header

  }

  function createSectionContainer() {
    const container = document.createElement('div')
    container.classList.add('menu-items')

    return container
  }

  // Header and container for menu
  const mainContainer = document.querySelector('.content')
  const menuHeader = document.createElement('div')
  const menuContent = document.createElement('div')
  menuContent.classList.add('menu-content')
  menuContent.setAttribute('id', 'current-tab')
  menuHeader.classList.add('menu-header')
  menuHeader.textContent = 'Menu'
  menuContent.appendChild(menuHeader)
  const menuContainer = document.createElement('div')
  menuContainer.classList.add('menu')
  menuContent.appendChild(menuContainer)


  // Creating main food section 
  menuContainer.appendChild(createSectionHeader('Main'))
  const menuMainSectionItems = createSectionContainer()
  menuContainer.appendChild(menuMainSectionItems)
  
  menuMainSectionItems.appendChild(createMenuItem('Mandu | 만두', '$3.11', 'Korean dumplings that is either fried, boiled, or deep-fried', mandu))
  menuMainSectionItems.appendChild(createMenuItem('Gimbap | 김밥', '$2.75', 'Seaweed wrap of rolled rice with variations of ingredients', kimbap))
  menuMainSectionItems.appendChild(createMenuItem('Corndog | 핫도그', '$2.50', 'Crispy, sweet and savory', corndog))
  menuMainSectionItems.appendChild(createMenuItem('Eomuk | 어묵', '$0.58', 'Soft and savory fish cakes', eomuk))

  // Creating snack section
  menuContainer.appendChild(createSectionHeader('Snack'))
  const menuSnackSectionItems = createSectionContainer()
  menuContainer.appendChild(menuSnackSectionItems)

  menuSnackSectionItems.appendChild(createMenuItem('Hotteok | 호떡', '$3.51', 'Korean style pancake with brown sugar syrup, topped with nuts and seeds', hotteok))
  menuSnackSectionItems.appendChild(createMenuItem('Bungeoppang | 붕어빵', '$3.51', 'Fish shaped pastry stuffed with sweet red bean paste', bungeoppang))
  menuSnackSectionItems.appendChild(createMenuItem('Tteokbokki | 떡볶이', '$3.51', 'Spicy yet sweet and savory fish cakes', tteokbokki))

  // Creating beverages section
  menuContainer.appendChild(createSectionHeader('Beverages'))
  const menuBeverageSectionItems = createSectionContainer()
  menuContainer.appendChild(menuBeverageSectionItems)

  menuBeverageSectionItems.appendChild(createMenuItem('Soju | 소주', '$3.98', 'Korean traditional alcoholic drink made from rice', soju))
  menuBeverageSectionItems.appendChild(createMenuItem('Makgeolli | 막걸리', '$9.21', 'Lightly sparkling alcoholic wine that tastes slightly sweet and tangy', makgeolli))
  menuBeverageSectionItems.appendChild(createMenuItem('Hite | 하이트', '$1.29', 'Pale lager brewed with rice', hite))

  mainContainer.appendChild(menuContent)


}