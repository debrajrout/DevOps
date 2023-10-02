import React, { Fragment, useRef, useState, useEffect } from 'react';
import "./UpdatePassword.css";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updatePassword } from "../../actions/userAction";
import profilePic from "../../images/Profile.png";
import { UPDATE_PASSWORD_RESET } from '../../constants/userConstants';
import MetaData from '../layout/MetaData';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const UpdatePassword = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const { error, isUpdated, loading } = useSelector((state) => state.profile);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const updatePasswordSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("oldPassword", oldPassword);
        myForm.set("newPassword", newPassword);
        myForm.set("confirmPassword", confirmPassword);

        dispatch(updatePassword(myForm));
    }

    useEffect(() => {

        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if(isUpdated) {
            alert.success("Profile Updated Successfully");

            navigate("/account");

            dispatch({
                type: UPDATE_PASSWORD_RESET,
            })
        }
    }, [dispatch, error, alert, navigate, isUpdated]);

  return (
    <Fragment>
        {loading ? (
            <Loader />
        ) : (
            <Fragment>
                <MetaData title="Change Password" />
                <div className='updatePasswordContainer'>
                    <div className='updatePasswordBox'>
                        <h2 className="updatePasswordHeading">Change Password</h2>
                        <form
                            className='updatePasswordForm'
                            encType='multipart/form-data'
                            onSubmit={updatePasswordSubmit}
                        >
                            <div className="loginPassword">
                                <VpnKeyIcon />
                                <input 
                                    type='password'
                                    placeholder='Old Password'
                                    required
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                />
                            </div>
                            <div className="loginPassword">
                                <LockOpenIcon />
                                <input 
                                    type='password'
                                    placeholder='New Password'
                                    required
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <div className="loginPassword">
                                <LockIcon />
                                <input 
                                    type='password'
                                    placeholder='Confirm Password'
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <input 
                                type='submit'
                                value="change"
                                className='updatePasswordBtn'
                            />
                        </form>
                    </div>
                </div>
            </Fragment>
        )}
    </Fragment>
  )
}

export default UpdatePassword