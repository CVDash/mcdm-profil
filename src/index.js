
var anders = 1;
const peter = "TEST";

// fetch('https://api.github.com/users/PernilleMuhlig')
fetch('/data/profile.json')
.then((response) => response.json())
.then((profil) => {

    console.log(profil.avatar_url);

    let imageContainer = document.querySelector('.profile-image')
    let imageText = document.querySelector('.profile-text')

    imageContainer.src = profil.avatar_url;

    //imageText.innerHTML = `<b>${profil.login} er mit <i>navn</i></b>`
    imageText.insertAdjacentHTML('beforebegin',  `<b>${profil.login} er mit <i>navn</i></b>`)

    //imageText.textContent = profil.login;
    
    // imageText.innerHTML = '<b>' + profil.login + '</b>'
    // '<b>' + profil.login + '</b>';
    // imageText.textContent = profil.login;
    
    console.log('TEST', imageContainer.src, imageContainer.id)

});
