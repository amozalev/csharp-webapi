import * as React from 'react'
import {NavLink} from "react-router-dom";

export interface SubjectType {
    id: number,
    name: string
}

interface IProps {
    Id: number,
    Name: string
}

class Subject extends React.Component<IProps> {
    Id: number;
    Name: string;

    constructor(props: IProps) {
        super(props);

        this.Id = props.Id;
        this.Name = props.Name;
    }

    render() {
        return (
            <tr>
                <td>{this.Id}</td>
                <td><NavLink to={'/subjects/' + this.Id}>{this.Name}</NavLink></td>
            </tr>
        )
    }
}

export default Subject;