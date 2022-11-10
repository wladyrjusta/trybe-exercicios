window.onload = () => {
  const setBackgroundColor = (color) => {
    let content = document.querySelector('.content')
    content.getElementsByClassName.setBackgroundColor = color
    localStorage.setItem('backgroundColor', color)
  }  
  const setFontColor = (color) => {
    let paragraphs = document.querySelectorAll('.paragraph')
    for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.color = color
    }
    localStorage.setItem('fontColor', color)
  }
  const setFontSize = (size) => {
    let paragraphs = document.querySelectorAll('.paragraph')
    for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.setFontSize = size
    }
    localStorage.setItem('fontSize', size)
  }
   const setLineHeigth = (height) => {
    let paragraphs = document.querySelectorAll('.paragraph')
    for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].lineHeight = height
    }
    localStorage.setItem('lineHight', height)
  }
  const setFontFamily = (family) => {
    let paragraph = document.querySelectorAll('.paragraph')
    for (let index = 0; index < paragraph.length; index += 1) {
        paragraph[index].style.setFontFamily = family
    }
    localStorage.setItem('fontFamily', family)
  }
   // Cor de fundo da tela;
   let backgroundColorButtons = document.querySelectorAll('#background-color>button')
   for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener('click', (event) => {
        setBackgroundColor(event.target.innerHTML)
    })
   }
   //Cor do texto;
   let fontColorButtons = document.querySelectorAll('#font-color>button')
   for (let index = 0; index < fontColorButtons.length; index + = 1) {
    fontColorButtons[index].addEventListener('click', (event) => {
        setFontColor(event.target.innerHTML)
    })
   }
   
}