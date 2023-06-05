import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { getAsyncUser } from "../../../../store/slices/user/thunks";
import { cleanUserData } from "../../../../store/slices/user/userSlice";
import "./userdropdown.css";

const UserInfoMenu = ({ constainerStyles }) => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const userFromRedux = useSelector((state) => state.user.user);

  useEffect(() => {
    if (userFromRedux === null) {
      let idUser = localStorage.getItem("idUser");
      dispatch(getAsyncUser(idUser));
    }
  }, [dispatch, userFromRedux]);

  let {
    name = "",
    email = "",
    picture = "",
  } = userFromRedux ? userFromRedux : {};

  const items = [
    {
      key: "1",
      label: <span className="user-info_menu-item">Mis subscripciones</span>,
    },
    {
      key: "2",
      label: <span className="user-info_menu-item">Sobre nosotros</span>,
    },
    {
      key: "3",
      label: (
        <span
          onClick={() => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("idUser");
            dispatch(cleanUserData());
            navigation("/login");
          }}
          className="user-info_menu-item"
        >
          Cerrar sesión
        </span>
      ),
    },
  ];

  const generateProfilePicturePlaceHolder = (userName) => {
    const array = userName.split(" ");
    let placeHolder = array[0][0];
    if (array.length > 1) {
      placeHolder = placeHolder + array[1][0];
    }

    return placeHolder;
  };

  return (
    <div className="user-info-container">
      {/* USER IMAGE */}
      {picture ? (
        <img className="image-profile" src={picture} alt="user profile" />
      ) : (
        <div className="no-image-profile">
          {generateProfilePicturePlaceHolder(name)}
        </div>
      )}

      {/* USER INFO */}
      <div className="user-data">
        <p className="user-data-name">{name}</p>
        <p className="user-data-email">{email}</p>
      </div>
      {/* OPEN ARROW */}
      <Dropdown
        menu={{
          items,
          style: {
            padding: 10,
          },
        }}
        placement="bottomRight"
        trigger={["click"]}
        onOpenChange={() => {
          setOpen(!open);
        }}
        open={open}
        arrow
        overlayStyle={{ width: 190 }}
      >
        <div
          className="menu-button-container"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <FontAwesomeIcon
            style={{ fontSize: 14, color: "#fff" }}
            icon={open ? faAngleUp : faAngleDown}
          />
        </div>
      </Dropdown>
    </div>
  );
};

export default UserInfoMenu;
