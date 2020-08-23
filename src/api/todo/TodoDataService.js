import axios from 'axios'

class TodoDataService {
    retriveAllTodos(user) {
        return axios.get(`http://localhost:8080/users/${user}/todos`)
    }

    deleteTodo(user, id) {
        return axios.delete(`http://localhost:8080/users/${user}/todos/${id}`)
    }

    getTodo(user,id){
        return axios.get(`http://localhost:8080/users/${user}/todos/${id}`)
    }

    updateTodo(user,id,todo){
        return axios.put(`http://localhost:8080/users/${user}/todos/${id}`,todo)
    }
}

export default new TodoDataService()