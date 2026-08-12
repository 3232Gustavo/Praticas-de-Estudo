//My First API
const URL = 'https://api.github.com/users/3232Gustavo';

fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log('Dados de Usuario:');
        console.log(`Nome: ${data.name}`);
        console.log(`Login: ${data.login}`);
        console.log(`Seguidores: ${data.followers}`);
        console.log(`Repositórios: ${data.public_repos}`);
    })
    .catch(error => console.error('Error:', error));