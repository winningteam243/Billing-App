import React, { Component } from 'react'
import UserService from '../../shared/services/user-service';
import UserDeaatila from './user-deatails'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: [],
            SlectedUser: null
        }

        this.userService = new UserService()
        this.selectedHandlers = this.selectedHandlers.bind(this)
    }
    componentDidMount = () => {
        this.userService.getUser()
            .then((users) => {
                this.setState({
                    Users: users

                })
                console.log(this.state.Users)
            })


    }
    selectedHandlers = (selecteduser) => {
        console.log('selected User is ', selecteduser)
        this.setState({
            SlectedUser: selecteduser
        })
    }

    render() {
        const userList = this.state.Users.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.last_bill_amt}</td>
                    <td>{user.year}</td>
                    <td>{user.status}</td>
                    
                    <td>{user.month}</td>
                    <td>
                        <button type="button" className="btn btn-info" onClick={() => this.selectedHandlers(user)} >Get Deatail</button>
                    </td>
                </tr>
            )
        })
        return (
            <div className="row">
               
               
                <div className="col-md-6">
                <h2>User List</h2>
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>products</th>
                                <th>last_bill_amt</th>
                                <th>year</th>
                                <th>status</th>
                               
                                <th>month</th>
                                <th>details</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {userList}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-5 offset-md-1">
                    { this.state.SlectedUser && <UserDeaatila selectedUserDetails= {this.state.SlectedUser}/>}
      
                </div>
                </div>


           


        )
    }
}
export default User