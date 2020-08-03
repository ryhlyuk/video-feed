import React, { useState, useEffect }  from 'react';
import {Menu} from "antd";
import { MenuOutlined } from '@ant-design/icons';

import { NAVIGATION } from "../../constants/navigation";
import {ASSETS_URL, MOBILE_WIDTH} from "../../constants/config";
import {useWindowSize} from "../../custom-hooks/useWindowResize";
import './headerMenu.css';

const HeaderMenu = () => {
    const [collapsed, setCollapsed] = useState(false);

    const { width } = useWindowSize();

    useEffect(() => {
        if(width > MOBILE_WIDTH) {
            setCollapsed(false);
        }
    }, [width]);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="header-wrapper">
            <img src={`${ASSETS_URL}/video-logo.svg`} alt="Webapp logo"/>
            <Menu
                className={`menu ${collapsed ? '' : 'menu-expanded'}`}
                theme="light"
                inlineCollapsed={collapsed}
            >
                { NAVIGATION.map(item =>
                    <Menu.Item key={item} style={{'display': collapsed ? 'none' : 'block'}} className="menu-item">{item}</Menu.Item>
                )}
                <Menu.Item className="menu-item" >
                    <img
                        style={{'display': collapsed ? 'none' : 'block'}}
                        className="user-profile"
                        srcSet={`${ASSETS_URL}/avatar-pic@1x.png,
                                ${ASSETS_URL}/avatar-pic@2x.png 2x`
                        }
                        src={`${ASSETS_URL}/avatar-pic@1x.png`}
                        alt="Avatar icon"
                    />
                </Menu.Item>
                <MenuOutlined  onClick={toggleCollapsed} className="collapsed-button" />
            </Menu>
        </div>
    );
};

export default HeaderMenu;