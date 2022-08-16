export default function generateLocation() {
  const mainContainer = document.querySelector('.content')
  const container = document.createElement('div')
  container.classList.add('menu-content')
  container.classList.add('location-container')
  container.setAttribute('id', 'current-tab')

  //header 
  const header = document.createElement('header')
  header.classList.add('header-content')
  header.textContent = 'Where to find these stalls?'

  //text

  const text = document.createElement('div')
  text.classList.add("location-text")
  text.textContent = "One of the most popular places to go is Gwangjang Market."

  //map

  const map = document.createElement('iframe')
  map.classList.add('google-map')
  map.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12649.456972515365!2d126.9996036!3d37.5700398!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd656a34831089f44!2sGwangjang%20Market!5e0!3m2!1sen!2smn!4v1660465577853!5m2!1sen!2smn")

  container.appendChild(header)
  container.appendChild(text)
  container.appendChild(map)

  mainContainer.appendChild(container)

}