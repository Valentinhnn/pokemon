document.getElementById('button').addEventListener('click', function() {
    const container = document.querySelector('.conteneur');
    const template = document.getElementById('card-template');

    for (let i = 1; i <= 100; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
        .then(response => response.json())
        .then(data => {
            let frenchName = data.names.find(name => name.language.name === "fr").name;

            let clone = document.importNode(template.content, true);
            let img = clone.querySelector('.card-img');
            let name = clone.querySelector('.pokemon-name');
            let number = clone.querySelector('.pokemon-number');

            img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`;
            name.textContent = `Nom: ${frenchName}`;
            number.textContent = `Numéro: ${i}`;
            container.appendChild(clone);
        });
    }

    this.style.display = 'none';
});
