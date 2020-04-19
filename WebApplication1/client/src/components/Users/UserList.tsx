import * as React from 'react'
import User from "./User";

interface UserListProps {
    users: User[];
}

interface State {
    users?: User[];
}

class UserList extends React.Component<State> {
    state: State;

    constructor(props: UserListProps) {
        super(props);
        this.state = {'users': []};
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({users: data});
            })
            .catch(console.log)
    }

    setUsers() {
        const lst = this.state.users && this.state.users.map((user: User, i: number) => (
                <User key={i} Id={user.Id} Name={user.Name}/>
            )
        );
        return (
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {lst}
                </tbody>
            </table>)
    }

    render() {
        return this.setUsers()
    }
}

export default UserList