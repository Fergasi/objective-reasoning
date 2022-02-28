// ## 1. `isAdmin`

// Write a function, `isAdmin` that takes in a user object and returns true if the user is an admin,
// as indicated by their `userRole` key. All admins' `userRole` attributes are equal to `'ADMIN'`.

// A user object will look like this:
// ```
// {
//     firstName: String,
//     lastname: String,
//     userRole: String
// }
// ```

function isAdmin (user) {

if (user.userRole === 'ADMIN'){
    return true
} else
return false
}

// ## 2. `getEmail`

// Write a function, `getEmail`, that given a user object, return the users' Code Immersives email. We'll assume that
// a Code Immersives email is always in `firstName.lastName@codeimmersives.com` form.

// **Examples**
// ```
// getEmail({
//     firstName: 'Brian'
//     lastName: 'Carela'
// })
// => 'brian.carela@codeimmersives.com'

function getEmail (user) {
    email = user.firstName.toLowerCase() + '.' + user.lastName.toLowerCase() + '@codeimmersives.com';
    return email
}

// ## 3. `getPlaylistLength`

// Write a function, `getPlaylistLength` that takes in a playlist and returns the number of songs in the playlist

// A playlist object will look like this:
// ```
// {
//     name: 'my jams',
//     songs: ['Vienna', 'Hey Ya!']
// }
// ```

function getPlaylistLength (playlist) {
    return playlist.songs.length 
}

// ## 4. `getHardestHomework`

// Write a function, `getHardestHomework` that takes in an array of homework objects and returns the name of 
// the hardest homework assignment. The hardest homework will be the one that has the lowest average score. If the array contains no homeworks, return an empty string.

// **Examples**

// ```
// getHardestHomework([])
// => ''

// getHardestHomework([
//     { name: 'homework 1', averageScore: 99 },
//     { name: 'homework 2', averageScore: 1 }
// ])
// => 'homework 2'

function getHardestHomework(homework) {

    if (homework.length === 0){
        return ''
    } 

    let lowestgrade = homework[0].averageScore;
    let lowestgradename = homework[0].name;

    for (let i = 0; i < homework.length; i++){

        if (homework[i].averageScore < lowestgrade){
            lowestgrade = homework[i].averageScore
            lowestgradename = homework[i].name
        }
    }
    return lowestgradename
}

// ## 5. `createPhonebook`

// Write a function, `createPhonebook`, that creates a phonebook object from an array of names
// and phone numbers.

// **Examples**
// ```
// createPhonebook(['Jimothy', 'Maria', 'Karl'], ['123-456-7890', '000-000-0000', '999-888-7766'])
// => {
//     'Jimothy': '123-456-7890',
//     'Maria': '000-000-0000',
//     'Karl': '999-888-7766'
// }

function createPhonebook (names, numbers){
    let book = {}
    
    for (i=0; i<names.length && i<numbers.length; i++){
        
        book[names[i]] = numbers[i] 
    }
    return book
}






// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};