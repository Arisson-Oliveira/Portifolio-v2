function getProjects(){
const urlGitHub = 'https://api.github.com/users/Arisson-Oliveira/repos'
var loadingElement = document.getElementById('loading')

fetch(urlGitHub, {
    method: 'GET'
})
    .then((response) => response.json())
    .then((response) => {
        loadingElement.style.display='none'
        showProjects(response)
    })
    .catch((e) => {
        console.log(e)
    })
}

function showProjects(data){
    var listElement = document.getElementById('my-projects-list')

    for(let i = 0; i< data.length; i++)
    {
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = '_blank'
        a.title = data[i]['description']
        let linkText = document.createTextNode(data[i]['name'])
        a.appendChild(linkText)
        listElement.appendChild(a)
    }
}
getProjects()

document.addEventListener("scroll", function () {
    const whatsappButton = document.getElementById("whatsappButton");
    const scrollPosition = window.scrollY;

    // Exibe o botão ao rolar para baixo 100px
    if (scrollPosition > 100) {
        whatsappButton.classList.add("visible");
    } else {
        whatsappButton.classList.remove("visible");
    }
});
