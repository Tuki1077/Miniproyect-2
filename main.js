const getData = {
    key: "LLJaKh9CU7LXwRsAIx7pR3dI2i7aIu48",
    limit: 12,
};

let gifs = [];
const fecthURL = fetch(`https://api.giphy.com/v1/gifs/trending?key=${getData.key}&limit=${getData.limit}`);
fecthURL.then(response => {
    const URLPromise = response.json();
    URLPromise.then(json => {
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
                frame.classList.add('gif');
                face.appendChild(frame);
                column.appendChild(face);
                container.appendChild(column);
        }
    });
});

function moreGifs(){
    ran = Math.floor((Math.random() * 9999) + 1);
    let gifs = [];
    const fecthURL = fetch(`https://api.giphy.com/v1/gifs/trending?key=${getData.key}&limit=12&offset=${ran}`);
    fecthURL.then(response => {
    const URLPromise = response.json();
    URLPromise.then(json => {
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
                frame.classList.add('gif');
                face.appendChild(frame);
                column.appendChild(face);
                container.appendChild(column);
        }
    });
});
}
