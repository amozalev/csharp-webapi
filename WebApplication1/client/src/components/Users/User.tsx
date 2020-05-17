import * as React from 'react'

export interface UserType {
    id: number,
    name: string
}

interface UserProps {
    Id: number,
    Name: string
}

interface IState {

}

class User extends React.Component<UserProps, IState> {
    Id: number;
    Name: string;

    constructor(props: UserProps) {
        super(props);

        this.Id = props.Id;
        this.Name = props.Name;
    }

    render() {
        return (
            <tr>
                <td>{this.Id}</td>
                <td>{this.Name}</td>
            </tr>
        )
    }
}

export default User;