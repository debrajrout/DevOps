import React, { Fragment, useState } from 'react';
import "./Header.css";
import { SpeedDial, SpeedDialAction } from '@material-ui/lab';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert';
import { logout } from '../../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import Backdrop from "@material-ui/core/Backdrop";

const UserOptions = ({ user }) => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const alert = useAlert();
    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.cart);

    const options = [
        { icon: <ListAltIcon />, name: "Orders", func: orders },
        { icon: <PersonIcon />, name: "Profile", func: account },
        { icon: <ShoppingCartIcon style={{color:cartItems.length>0?"#FFB100":"unset"}} />, name: `cart(${cartItems.length})`, func: cart },
        { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
    ];

    if(user.role === "admin")
    {
        options.unshift({
            icon: <DashboardIcon />,
            name: "Dashboard",
            func: dashboard,
        })
    }

    function dashboard() {
        navigate("/admin/dashboard");
    }

    function orders() {
        navigate("/orders");
    }

    function account() {
        navigate("/account");
    }

    function cart() {
        navigate("/cart");
    }

    function logoutUser() {
        dispatch(logout());
        alert.success("Logout Successfully!");
    }

  return (
    <Fragment>
        <Backdrop open={open} style={{ zIndex: "10" }}/>
        <SpeedDial
            ariaLabel='SpeedDial tooltip example'
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            style={{ zIndex: "11" }}
            open={open}
            direction='down'
            className='speedDial'
            icon={ <img 
                className='speedDialIcon'
                src={user.avatar.url ? user.avatar.url : "/Profile.png"}
                alt='Profile'
            />}
        >
            {options.map((item) => (
                <SpeedDialAction key={item.name} icon={item.icon} tooltipTitle={item.name} onClick={item.func} tooltipOpen={window.innerWidth<=600?true:false}/>
            ))}
        </SpeedDial>
    </Fragment>
  )
}

export default UserOptions