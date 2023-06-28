const url = 'people.json';
fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(el => console.log(`${el.first} ${el.last} enjoys talking about ${el.topic} topics`))
})