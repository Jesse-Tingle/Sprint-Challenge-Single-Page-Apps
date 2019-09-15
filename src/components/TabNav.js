import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from './WelcomePage';

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

const panes = [
    {
        menuItem: <Menu.Item key="Home" >Home Page</Menu.Item>,
        render: () => <Tab.Pane><WelcomePage /></Tab.Pane>
    },
    {
        menuItem: <Menu.Item key="Characters" >Characters</Menu.Item>
    },
    {
        menuItem: <Menu.Item key="Locations" >Locations</Menu.Item>
    },
    {
        menuItem: <Menu.Item key="Episodes" >Episodes</Menu.Item>
    }
]

const TabNav = () => <Tab panes={panes} renderActiveOnly={true}/>;
export default TabNav;
