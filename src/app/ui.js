class UI {
    constructor(){
       this.profile =  document.getElementById('profile');
    }

    showProfile (user) {
        this.profile.innerHTML = `
        <div class ="card mt-2 animated bounceInLeft">
            <img src= "${user.avatar_url}" class= "card-img-top"/>
            <div class= "card-body">
                <h4 class= "card-title">${user.name} / ${user.login}</h4>
                <a href= "${user.html_url}" class="btn btn-primary d-block mb-2" target="_blank">Ver Perfil</a>
                <span class= "badge badge-secondary d-block mb-2">
                    Followers: ${user.followers}
                </span>
                <span class= "badge badge-warning d-block mb-2">
                    Following: ${user.following}
                </span>
                <span class= "badge badge-success d-block mb-2">
                    Company: ${user.company}
                </span>
                <span class= "badge badge-info d-block">
                    Blog: ${user.blog}
                </span>
            </div>

        </div>
        `;
        this.clearMessage()
    }
    showRepositories(repositories) {
        let template = '';
        repositories.forEach(repo => {
            template += `
            <div class= "row">
                <div class= "card card-body mt-2 animated bounceInRight"">
                    <div class= "row">
                        <div class= "col-md-6">
                            <a href= "${repo.html_url}" target= "_blank">${repo.name}</a>
                        </div>
                        <div class= "col-md-6">
                            <span class= "badge badge-warning">
                                Lenguaje : ${repo.language}
                            </span>
                            <span class= "badge badge-danger">
                                Forks: ${repo.forks_count}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });
        document.getElementById('repositories').innerHTML = template;

    }
    showMessage (message, cssClass) {
        const div = document.createElement('div');
        div.className = cssClass;
        div.appendChild(document.createTextNode(message));
        const content = document.querySelector('.row');
        const profile = document.getElementById('profile');
        content.insertBefore(div, profile);
        setTimeout(()=> this.clearMessage(),3000);
    }
    clearMessage () {
       const alertFound = document.querySelector('.alert');
       if(alertFound){
           alertFound.remove();
       }
    }
    
}
module.exports = UI;