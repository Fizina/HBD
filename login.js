function btnlogin(event){
    event.preventDefault()
  
    //DataBase
    let users = [
        {id: 1, name: 'Bahar', lastname: 'Harivandi'},
        {id: 2, name: 'joosi', lastname: 'joosi'},
        {id: 3, name: 'bahar', lastname: 'harivandi'},
        {id: 4, name: 'joosi', lastname: ''},
        {id: 4, name: 'JOOSI', lastname: ''},
        {id: 6, name: 'Joosi', lastname: ''},
        {id: 7, name: 'BAHAR', lastname: 'HARIVANDI'},
        {id: 8, name: 'JOOSI', lastname: 'JOOSI'},
    ]
let betDataFalse = false
    //Bet Login
    users.forEach(user => {
        if (username.value == user.name && lastname.value == user.lastname) {
            window.location.href = 'home.html' ;
        }
   // else{betDataFalse = true}
    })
    username.value = ""
     lastname.value = ""
//     if(betDataFalse){
//         alert('You are not Joosi !')
//         username.value = ""
//         lastname.value = ""
//     }
}
