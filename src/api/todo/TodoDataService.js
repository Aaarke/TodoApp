import axios from 'axios'

class TodoDataService{
    retriveAllTodos(user) {
        return axios.get(`http://localhost:8080/users/${user}/todos`)
    }

    deleteTodo(user,id){
         return axios.delete(`http://localhost:8080/users/${user}/todos/${id}`)
    }
}

export default new TodoDataService()