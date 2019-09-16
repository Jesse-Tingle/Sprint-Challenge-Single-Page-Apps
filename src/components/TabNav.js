import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import EpisodesList from './EpisodeList';

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
        menuItem: <Menu.Item key="Characters" >Characters</Menu.Item>,
        render: () => <Tab.Pane><CharacterList /></Tab.Pane>
    },
    {
        menuItem: <Menu.Item key="Locations" >Locations</Menu.Item>,
        render: () => <Tab.Pane><LocationsList /></Tab.Pane>
    },
    {
        menuItem: <Menu.Item key="Episodes" >Episodes</Menu.Item>,
        render: () => <Tab.Pane><EpisodesList /></Tab.Pane>
    }
]

const TabNav = () => <Tab panes={panes} renderActiveOnly={true}/>;
export default TabNav;
