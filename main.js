const getData = {
    key: "LLJaKh9CU7LXwRsAIx7pR3dI2i7aIu48",
    limit: 24,
};

let gifs = [];
const fetchPromise = fetch(`https://api.giphy.com/v1/gifs/trending?key=${getData.key}&limit=${getData.limit}`);
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
                frame.classList.add('gif');
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
                frame.classList.add('gif');
                face.appendChild(frame);
                column.appendChild(face);
                container.appendChild(column);
        }
    });
});
}