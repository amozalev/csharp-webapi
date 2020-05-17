import {fetchUsers} from "../store/users-reducer/users-actions";
import UserList, {DispatchProps, ReduxProps} from "../components/Users/UserList";
import {connect} from "react-redux";


const mapStateToProps = (state: any): ReduxProps => (
    {
        users: state.usersReducer.users
    }
)

const mapDispatchToProps = (dispatch: any): DispatchProps => (
    {
        fetchUsers: () => dispatch(fetchUsers())
    }
)

const UserListContainer = connect<ReduxProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(UserList);

export default UserListContainer;