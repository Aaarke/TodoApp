class AuthenticationService{
    registerSuccessfullLogin(username,password){
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser',username)
    }

}

export default new AuthenticationService()