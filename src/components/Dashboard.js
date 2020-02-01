import React, { Component } from 'react';
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        const { userData } = this.props;
        return (
            <div>
                <table className="table-wrapper">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                        {
                            userData.user && userData.user.map((item, i) => {
                                return <tr key="i">
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNo}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(Dashboard);