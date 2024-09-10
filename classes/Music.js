// import the Media class:
let Media = require('./Media')

// create your Music class:
class Music extends Media{
    constructor(title, year, genre, artist, length){
        super(title, year, genre)
        this.artist = artist
        this.length = length

 }
 summary(){
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds` 
    }
    
    static shortestAlbum(objects){
        let shortest = objects[0]
        for(let i = 0; i < objects.length; i++){
            if(objects[i].length < shortest.length){
                shortest = objects[i]
            }
        }
        return shortest
    }
}

// don't change below
module.exports = Music;
