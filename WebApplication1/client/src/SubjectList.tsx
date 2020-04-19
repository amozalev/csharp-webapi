import * as React from 'react'
import Subject from "./Subject";

interface Props {
    subjects: Subject[];
}

interface State {
    subjects?: Subject[];
}

class SubjectList extends React.Component<State> {
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
                <Subject key={i} Id={subject.Id} Name={subject.Name}/>
            )
        );
        return (
            <table>
                <thead>
                <th>Id</th>
                <th>Subject</th>
                </thead>
                <tbody>
                {lst}
                </tbody>
            </table>)
    }

    render() {
        return this.setSubjectList()
    }
};

export default SubjectList;