// import the Media class:
let Media = require('./Media')

// create your Movie class:
class Movie extends Media{
    constructor(title, year, genre, director, duration, rating){
        super(title, year, genre)
        this.director = director
        this.duration = duration
        this.rating = rating
    }
    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}` 
    }
    static longestMovie(objects){
        let duration = objects[0]
        for(let i = 0; i < objects.length; i++){
            if(objects[i].duration > duration.duration){
                duration = objects[i]
            }
        }
        return duration
    }

}

// don't change below
module.exports = Movie;