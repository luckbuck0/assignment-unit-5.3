console.log('***** Music Collection *****')

// created a variable called 'collection'
let collection = [];

function addToCollection(title, artist, yearPublished) {
    let music = {
        title: [],
        artist: [],
        yearPublished: []
    }
    music.title.push(title)
    music.artist.push(artist)
    music.yearPublished.push(yearPublished)
    collection.push(music)

    return music;
}
console.log('should add param', addToCollection('Reasonable doubt', 'Jay z', '1996'))
console.log('should add param', addToCollection('444', 'Jay z', '2017'))
console.log('should add param', addToCollection('Igor', 'Tyler', '2019'))
console.log('should add param', addToCollection('Illmatic', 'Nas', '1994'))
console.log('should add param', addToCollection('Lioness', 'Amy whinehouse', '2011'))
console.log('should add param', addToCollection('Carnival', 'Briston Maroney', '2018'))
console.log(collection)

function showCollection(show) {
    for (let i = 0; show.length > i; i++) {
        console.log(show)
    }
    console.log(show.length)
    return show;
}
console.log('should showcollection', showCollection(collection))