import * as React from 'react'
import Subject from "./Subject";
import {Route, withRouter, RouteComponentProps} from "react-router-dom";
import FullSubject from "../../FullSubject";

interface ownProps {
    subjects: Subject[];
}

interface State {
    subjects?: Subject[];
}

interface Props extends ownProps, RouteComponentProps {
}

class SubjectList extends React.Component<Props, State> {
    state: State;

    constructor(props: Props) {
        super(props);

        this.state = {'subjects': []};
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/subjects')
            .then(res => res.json())
            .then((data) => {
                this.setState({subjects: data});
            })
            .catch(console.log)
    }

    setSubjectList() {
        const lst = this.state.subjects && this.state.subjects.map((subject: Subject, i: number) => (
                <Subject key={subject.Id} Id={subject.Id} Name={subject.Name}/>
            )
        );
        return (
            <>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Subject</th>
                    </tr>
                    </thead>
                    <tbody>
                    {lst}
                    </tbody>
                </table>
                <Route path={this.props.match.url + '/:id'} component={FullSubject}/>
            </>
        )
    }

    render() {
        return this.setSubjectList()
    }
};

export default withRouter(SubjectList);