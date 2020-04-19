import React from "react";
import Subject from "./components/Subjects/Subject";
import {RouteComponentProps, withRouter} from "react-router-dom";

interface Props extends RouteComponentProps {
    id: number;
}

interface State {
    id: number | undefined;
    name: string | undefined;
}

class FullSubject extends React.Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {id: undefined, name: undefined}
    }

    componentDidMount() {
        console.log('==this.props.match.params.id', this.props.match.params.id)
        this.loadSubject(this.props.match.params.id);
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<State>, snapshot?: any): void {
        this.props.match.params.id && (this.props.match.params.id !== prevProps.match.params.id) &&
        this.loadSubject(this.props.match.params.id);
    }

    private loadSubject = (id: number) => {
        fetch('http://localhost:5000/api/subjects/' + id)
            .then(res => res.json())
            .then((data: any) => {
                console.log('==data', data)

                this.setState({
                    id: data.Id,
                    name: data.Name
                });
            })
            .catch(console.log)
    }

    render() {
        console.log('==state', this.state.id, this.state.name )
        return (
            this.state.id && this.state.name ? (
                <div id="fullSubject">
                    <table>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Subject</th>
                        </tr>
                        </thead>
                        <tbody>
                        <Subject key={this.state.id} Id={this.state.id} Name={this.state.name}/>
                        </tbody>
                    </table>
                    {/*{this.props.match.params.id}*/}
                </div>
            ) : null
        )
    }
}

export default withRouter(FullSubject);