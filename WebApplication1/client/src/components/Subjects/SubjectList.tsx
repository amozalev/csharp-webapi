import * as React from 'react'
import Subject from "./Subject";
import {Route, withRouter, RouteComponentProps} from "react-router-dom";
import FullSubject from "../../FullSubject";

export interface ReduxProps {
    subjects: Subject[];
}

export interface DispatchProps {
    fetchSubjects: () => {};
}

interface SubjectListProps extends ReduxProps, DispatchProps, RouteComponentProps {
}

class SubjectList extends React.Component<SubjectListProps, {}> {

    constructor(props: SubjectListProps) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSubjects();
    }

    setSubjectList() {
        const lst = this.props.subjects.map((subject: Subject, i: number) => (
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