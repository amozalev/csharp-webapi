import * as React from 'react'
import User from "./User";

export interface ReduxProps {
    users: User[]
}

export interface DispatchProps {
    fetchUsers: () => {};
}

interface UserListProps extends ReduxProps, DispatchProps {
}

class UserList extends React.Component<UserListProps, {}> {
    constructor(props: UserListProps) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    setUsers() {
        const lst = this.props.users.map((user: User, i: number) => (
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