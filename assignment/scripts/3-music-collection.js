console.log('***** Music Collection *****')

//VARIABLES-------------------------------------------------------

// created a variable called 'collection'
let collection = [];

// A object called tracks that has properties of name & duration
// it is used to add tracks
let tracks = {
    trackName: 'devils',
    duration: '3:04'
}

// A var to use in the seach function it is an object with 
// artist yrpub an track properties
let crit = {
    artist: 'Ray Charles',
    yearPublished: '1957',
    tracks: [tracks]
}


//FUNCTIONS----------------------------------------------------------------------------

// made a function with the input paremeters of title,artist,yrpub,tracks & duration
// it is designed to add the parameters to the music var defined inside the func
// and then that var is pushed to the collection var outside the func
function addToCollection(title, artist, yearPublished, tracks) {
    let music = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    };
    collection.push(music)
    return music;
}


// function to show the objects in the collection var
// function showCollection(show) {
//     for (let i = 0; show.length > i; i++) {
//         if (show[i].tracks != undefined) {
//             console.log(i + 1, 'this is the name:', tracks.trackName, 'and this is the duration:', tracks.duration)
//         }
//         console.log('This is the length', show.length)
//     }
// }

function showCollection(collection) {
    console.log('Total:', collection.length);
    for (const album of collection) {
        console.log(album.title, album.artist, "published in ", album.yearPublished);
        if (album.tracks != undefined)
            console.log(album.tracks);
    }

    return true;
}



// Function to find a specific artist using a for loop and 
// if statements on a object
function findByArtist(artist) {
    let foundartist = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].artist == artist) {
            foundartist.push(artist)
            return foundartist;
        }
    }
}


// Function to search for certain criterias in the collection
// var using for of and if statements if they do match the
// funct pushes the matching crit to push var and then returns it

function search(catalog, trackName) {

    let result = [];
    if (catalog == undefined && trackName == undefined) {
        return collection;
    } else if (trackName != undefined) {
        for (let album of collection) {
            if (album.tracks == trackName) {
                result.push(album.tracks.trackName);
            }
        }

    } else {
        for (let album of collection) {
            if (catalog.artist == album.artist && catalog.yearPublished == album.yearPublished) {
                result.push(album);
            }
        }
    }
    return result;
}

//CONSOLE LOGS-----------------------------------------------------------------

// Used for the addTocollection function to log add subsequently add my list
//  of albums with the artist yr track name and duration
console.log('should add albums', addToCollection('Reasonable doubt', 'Jay z', '1996', tracks))
console.log('should add albums', addToCollection('444', 'Jay z', '2017'))
console.log('should add albums', addToCollection('Igor', 'Tyler', '2019'))
console.log('should add albums', addToCollection('Illmatic', 'Nas', '1994'))
console.log('should add albums', addToCollection('Lioness', 'Amy whinehouse', '2011',))
console.log('should add  albums', addToCollection('Carnival', 'Briston Maroney', '2018'))
console.log('should add albums', addToCollection('Carnival', 'Ray Charles', '1957'))
// Used for the addToCollection funtion to log the entire collection var
console.log(collection)

// Used for the showCollection function to log all the items in 
// the collections var
console.log('should showcollection', showCollection(collection))

// Used for the findByArtist function to log the artist 
// the code is looking for 
console.log('should see match', findByArtist('Jay z'))

// Used for the search function to log the items in the crit var
// and see if they match up with the collection var
console.log('should expect ', search(crit,))
