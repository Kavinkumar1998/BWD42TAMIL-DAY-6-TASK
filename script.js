//1.class movie
class Movie{
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    if(rating===undefined){
    this.rating = "PG";}
    }
    get Movietitle() {
        return this.title;

    }
    get Moviestudio() {
        return this.studio;

    }
    get Movierating() {
        return this.rating;

    }
    set Movietitle(title) {
        this.title = title
}
    set Moviestudio(studio) {
        this.studio = studio
    }
    set Movierating(rating) {
        this.rating = rating
    } 
    get Movieandrating(){
        return `"Movie[title=${this.title},rating=${this.rating},studio=${this.studio}]"`;
    }
}

var obj2 = new Movie("casino royalle","Eon productions","PG13")
console.log(obj2);
console.log(obj2.Movieandrating)
var obj3 = new Movie("casino royalle","Eon productions",)
console.log(obj3);
console.log(obj3.Movieandrating);
//---------------------------------------------





//2.class circle
class circle{
    constructor(radius, color) {
    this.radius = radius;
    this.color = color;
    }
    get radiuscircle(){
        return this.radius
    }
    get colorcircle(){
            return this.color
    }
    set radiuscircle(radius){
            this.radius = radius
        }
        set colorcircle(color){
            this.color = color
        }
        get toString(){
            return `"circle[radius=${this.radius},color=${this.color}]"`;
        }
        get areacircle(){
            return Math.PI * this.radius* this.radius ;
        }
        get circumferencecircle(){
            return 2 * Math.PI * this.radius;
        }
    }
var obj1 = new circle(1.0,"red")
console.log(obj1.radiuscircle);
console.log(obj1.colorcircle);
console.log(obj1.toString);
console.log(obj1.areacircle);
console.log(obj1.circumferencecircle); 
//--------------------------------------------------------------------------




//3. person class to hold al details
class Person {
    constructor(firstName, lastName, age,occupation,role,gender,birth,place) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.occupation = occupation;
    this.role = role;
    this.gender = gender;
    this.birth = birth;
    this.place = place;
    }
    get FirstName() {
        return this.firstName;
    }
    get LastName() {
        return this.lastName;
    }
    get Age() {
        return this.age;
    }
    get Occupation() {
        return this.occupation;
    }
    get Role() {
        return this.role;
    }
    get Gender() {
        return this.gender;
    }
    get Birth() {
        return this.birth;
    }
    get Place() {
        return this.place;
    }
    set FirstName(firstName) {
        this.firstName = firstName;
    }
    set LastName(lastName) {
        this.lastName = lastName;
    }
    set Age(age) {
        this.age = age;
    }
    set Occupation(occupation) {
        this.occupation = occupation
    }
    set Role(role) {
        this.role = role;
    }
    set Gender(gender) {
        this.gender = gender;
    }
    set Birth(birth) {
        this.birth = birth;
    }
    set Place(place) {
        this.place = place;
    }
}
var obj4 = new Person("mahendrasingh","dhoni","41","crickter","wicket keeper-batsman","male","7.07.1981","Ranchi-bihar");
console.log(obj4);





//--------------------------------------------------------------------
//4.write a class to calculate the uber price.
class Uber{
    constructor(price,distance) {
        this.price= 100;
        this.distance= distance;

    }
    get Uberdistance() {
        this.distance=distance;
}
set Uberdistance(distance) {
    this.distance=distance;
}
    get Uberprice() {
        return this.price*this.distance;
    }
}
var obj5 = new Uber(0,2)
console.log(obj5);
console.log(obj5.Uberprice);