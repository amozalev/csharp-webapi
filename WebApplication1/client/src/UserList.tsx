import * as React from 'react'
import User from "./User";

interface UserListProps {
    users: User[];
}

interface IState {
    users: User[];
}

class UserList extends React.Component {
    // state: IState;
    state = {
        users: []
    };

    // userList: [];

    constructor(props: UserListProps) {
        super(props);
        // this.state = []
        // this.userList = null;
    }


    componentDidMount() {
        fetch('http://localhost:5000/api/users')
            .then(res => res.json())
            .then((data) => {
                console.log('data: ', data);
                this.setState({users: data});
            })
            .catch(console.log)
    }

    setUsers() {
        const lst = this.state.users.map((user: User, i: number) => (
                <User key={i} Id={user.Id} Name={user.Name}/>
            )
        );
        return (<ul>
            {lst}
        </ul>)
    }
    
    render(){
        return this.setUsers()
    }
}

export default UserList