import {connect} from "react-redux";
import SubjectList, {DispatchProps, ReduxProps} from "../components/Subjects/SubjectList";
import {fetchSubjects} from "../store/subjects-reducer/subjects-actions";


const mapStateToProps = (state: any): ReduxProps => (
    {
        subjects: state.subjectsReducer.subjects
    }
)

const mapDispatchToProps = (dispatch: any): DispatchProps => (
    {
        fetchSubjects: () => dispatch(fetchSubjects())
    }
)

const SubjectListContainer = connect<ReduxProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(SubjectList);

export default SubjectListContainer;