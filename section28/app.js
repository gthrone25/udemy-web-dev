let url = "https://swapi.dev/api/people/1/";
let url2 = "https://swapi.dev/api/people/2/";
let burl = "https://swapi.dev/api/people/";

const req = new XMLHttpRequest();

req.onload = function () {
    console.log('It worked');
    data = JSON.parse(this.responseText)
    console.log(data.name, data.height)
}

req.onerror = function () {
    console.log('Error');
    console.log(this)
}

req.open("GET", url);
req.send('')


fetch(url).then(res => {
    console.log('Resolved', res)
    return res.json()
})
    .then((data) => {
        console.log(data)
        return fetch(url2)
    })
    .then((res) => {
        console.log('Second request done')
        return res.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch(e => {
        console.log("error", e)
    })

const loadStarWars = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json()
        console.log(data);
        const res2 = await fetch(url2);
        const data2 = await res2.json()
        console.log(data2.name);
    } catch (e) {
        console.log('error', e)
    }

}

// loadStarWars();

// axios.get(url).then((res) => {
//     console.log(res);
// }).catch((e) => {
//     console.log('error', e);
// });

const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`${burl}${id}/`);
        console.log(res.data);
    } catch (e) {
        console.log(e);
    }
};

getStarWarsPerson(2);
getStarWarsPerson(5);

dadURL = 'https://icanhazdadjoke.com/'

const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')


const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get(dadURL, config)
        console.log(res.data.joke)
        return res.data.joke

    } catch (e) {
        return 'No Jokes Available'
    }
}

getDadJoke();
button.addEventListener('click', addNewJoke)