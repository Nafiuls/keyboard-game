const playNowButton = document.getElementById('start')


playNowButton.addEventListener('click',function(){
    const homeHidden = document.getElementById('home')
    homeHidden.classList.add('hidden')
    const playground = document.getElementById('playground')
    playground.classList.remove('hidden')
})