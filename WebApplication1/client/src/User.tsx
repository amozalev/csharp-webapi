import * as React from 'react'

interface IProps {
    Id: number,
    Name: string
}

interface IState {

}

class User extends React.Component<IProps, IState> {
    Id: number;
    Name: string;
    
    constructor(props: IProps) {
        super(props);
        
        this.Id = props.Id;
        this.Name = props.Name;
    }

    render() {
        return <li>id: {this.Id}, name: {this.Name}</li>
    }
}

export default User;