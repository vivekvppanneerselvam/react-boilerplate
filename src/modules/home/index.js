import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Map, List } from 'immutable'
import { createUser } from './action'
import Accordian from '../accordian_radio'
function Home(props) {
    const [createUser, setCreateUserForm] = useState({ student_id: '', name: '', email_id: '' })
    let validationCriteria = {
        email_id: { type: String, length: 500, error_msg: "", regex: '' }
    }
    useEffect(() => {
    }, [])


    useEffect(() => {
        if (!props.create_user_loading) {
            if (!props.create_user.toJS().error) {
                alert(JSON.stringify(props.create_user.toJS().data))
            } else {
                alert(JSON.stringify(props.create_user.toJS().data))
            }
        }
    }, [props.create_user_loading])



    function onSubmitCreateUser() {
        let obj = { ...createUser }
        let valid = validateCreateUser(obj)
        if (valid) {
            props.createUser(obj)
        } else {
            alert('Please select mandatory fields to submit')
        }
    }

    function onChangeCreateUser(e) {
        let id = e.target.id, value = e.target.value
        setCreateUserForm(prevState => {
            prevState[id] = value
            return ({ ...prevState })
        })
    }

    function validateCreateUser(obj) {
        let isValid = true

        Object.keys(obj).forEach(key => {
            console.log(key)
            if (!obj[key].trim()) isValid = false
        })

        return isValid
    }
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card o-hidden border-0 shadow-lg my-2" style={{ borderRadius: 0 }}>
                        <div className="card-body p-0">
                            <div className="row">
                                <div className={'col-md-6'}>
                                    <div className="p-2">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900">Create User</h1>
                                        </div>
                                        <div className="user">
                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="text" className="form-control " id="student_id" value={createUser.student_id} onChange={(e) => onChangeCreateUser(e)} placeholder="Student ID" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control " id="name" value={createUser.name} onChange={(e) => onChangeCreateUser(e)} placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control " id="email_id" value={createUser.email_id} onChange={(e) => onChangeCreateUser(e)} placeholder="Email Address" />
                                            </div>
                                            <button className={'btn btn-primary'} onClick={() => onSubmitCreateUser()}>Register student</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Accordian />
            
        </div>
    )
}

function mapStateToProps(state) {
    return {
        create_user_loading: state.HomeReducer.getIn(['create_user', 'loading'], true),
        create_user: state.HomeReducer.getIn(['create_user'], Map())
    }
}
export default connect(mapStateToProps, { createUser })(Home)