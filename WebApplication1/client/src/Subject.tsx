import * as React from 'react'

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
                <td>{this.Name}</td>
            </tr>
        )
    }
}

export default Subject;