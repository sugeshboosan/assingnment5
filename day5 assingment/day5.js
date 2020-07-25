class User {
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;

    }
login(){
    console.log(`${this.name} has logged in`)
}

logout(){
    console.log(`${this.name} has logged out`)
}
addCoins(){
    this.luCoins++;
    console.log(`${this.name} has ${this.luCoins}coins`)
}
removeCoins(){
    this.luCoins--;
    console.log(`${this.name} has ${this.lucoins}coins`)
}
}

let user  = new User('sugesh',24,'sugeshboosan@gmail.com ')

user.login()
user.addCoins()
user.addCoins()
user.removeCoins()
user.logout()