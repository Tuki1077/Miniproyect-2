const getData = {
    key: "LLJaKh9CU7LXwRsAIx7pR3dI2i7aIu48",
    limitBegin: 24,
};

let gifs = [];
const fetchPromise = fetch(`https://api.giphy.com/v1/gifs/trending?key=${getData.key}&limit=${getData.limitBegin}`);
fetchPromise.then(response => {
    const jsonPromise = response.json();
    jsonPromise.then(json => {
        const data = json.data;
        for (let i = 0; i < data.length; i++) {
            gifs.push(data[i]['embed_url']);
        }
        const container = document.getElementById('gifcontainer');
        for (let i = 0; i < gifs.length; i++) {
            let column = document.createElement('div');
             column.classList.add('column');
            let face = document.createElement('div');
                face.classList.add('face');
            let frame = document.createElement('iframe');
                frame.setAttribute('src', gifs[i]);
                frame.classList.add('giphy-embed');
                face.appendChild(frame);
                column.appendChild(face);
                container.appendChild(column);
        }
    });
});

function reload(){
    ran = Math.floor((Math.random() * 1000) + 1);
    let gifs = [];
    const fetchPromise = fetch(`https://api.giphy.com/v1/gifs/trending?key=${getData.key}&limit=12&offset=${ran}`);
    fetchPromise.then(response => {
    const jsonPromise = response.json();
    jsonPromise.then(json => {
        const data = json.data;
        for (let i = 0; i < data.length; i++) {
            gifs.push(data[i]['embed_url']);
        }
        const container = document.getElementById('gifcontainer');
        for (let i = 0; i < gifs.length; i++) {
            let column = document.createElement('div');
             column.classList.add('column');
            let face = document.createElement('div');
                face.classList.add('face');
            let frame = document.createElement('iframe');
                frame.setAttribute('src', gifs[i]);
                frame.classList.add('giphy-embed');
                face.appendChild(frame);
                column.appendChild(face);
                container.appendChild(column);
        }
    });
});
}

function remove(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
function search(){
    const search = document.getElementById('search').value;
    const h1 = document.getElementById('head');
    h1.innerHTML = "Results are:";
    document.getElementById('btn-container').remove;
    let embededTrendingGifs = [];
    const fetchPromise = fetch(`https://api.giphy.com/v1/gifs/trending?key=${getData.key}&limit=${getData.limitBegin}`);
    fetchPromise.then(response =>{
        const jsonPromise = response.json()
        jsonPromise.then(json=>{
            const data = json.data;
            for (let i = 0; i < data.lenght; i++){
                embededTrendingGifs.push(jsonPromise[i]['embed_url']);
            }

            const container = document.getElementById('gifcontainer');
            remove(container);
            for (let i = 0; i < embededTrendingGifs.lenght; i++){
                let columnumn = document.createElement('div');
                    columnumn.classList.add('columnumn');
                let face = document.createElement('div');
                    face.classList.add('face');
                let border = document.createElement('iframe');
                    border.setAttribute('src', embededTrendingGifs[i]);
                    border.classList.add('giphy-embed');
                    face.appendChild(face);
                    columnumn.appendChild(face);
                    container.appendChild(columnumn);
            }
        });
    });
}