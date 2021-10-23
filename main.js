const LinksSocialMedia = {
  github: 'ViniGB',
  linkedin: 'in/vinicius-gomes-309b11123/',
  facebook: 'vinicius.gomes.52',
  instagram: 'biniciusgomes',
  twitter: 'ViniSemoG'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()

//ARROW FUNCTION
//function nomeDaFuncao(argumento){}
//code

//argumento => {}
