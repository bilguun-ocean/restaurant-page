
import Image from './street-food.jpg';

export default function generateHome() {
  const mainContainer = document.querySelector('.content')
  const container = document.createElement('div')
  container.classList.add('introduction')
  container.setAttribute('id', 'current-tab')
  // Header Section
  const header = document.createElement('header')
  header.textContent = 'Why Korean Street Food ?'
  header.classList.add('header')
  container.appendChild(header)

  // Intro-text Section
  const introText = document.createElement('div')
  introText.textContent = "Experience real authentic korean street foods" + 
                             "at these stalls! Quick and affordable, sweet and savory"
                              + ", filling and warming on cold days, these street foods are the real comfort-food!"
  introText.classList.add('introduction-text')
  container.appendChild(introText)
  
  // Image Section gotta tweak the css bit
  
  // const image = document.createElement('img')
  // image.classList.add('food-image')
  // image.setAttribute('src', Image)

  // container.appendChild(image)
  
  mainContainer.appendChild(container)

}