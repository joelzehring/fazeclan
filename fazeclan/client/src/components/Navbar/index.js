import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import Divider from './node_modules/@material-ui/core/Divider';
import Search from '../Search';
import AppBar from './node_modules/@material-ui/core/AppBar';
import CssBaseline from './node_modules/@material-ui/core/CssBaseline';
import Drawer from './node_modules/@material-ui/core/Drawer';
import Hidden from './node_modules/@material-ui/core/Hidden';
import IconButton from './node_modules/@material-ui/core/IconButton';
import InboxIcon from './node_modules/@material-ui/icons/MoveToInbox';
import List from './node_modules/@material-ui/core/List';
import ListItem from './node_modules/@material-ui/core/ListItem';
import ListItemIcon from './node_modules/@material-ui/core/ListItemIcon';
import ListItemText from './node_modules/@material-ui/core/ListItemText';
import MailIcon from './node_modules/@material-ui/icons/Mail';
import MenuIcon from './node_modules/@material-ui/icons/Menu';
import Toolbar from './node_modules/@material-ui/core/Toolbar';
import Typography from './node_modules/@material-ui/core/Typography';
import { makeStyles, useTheme } from './node_modules/@material-ui/core/styles';
import SignInLink from '../SignInLink';
import GitBattleButton from '../UserForm/GitBattleButton';
const Logo = require('../../images/gitclub_logo.png');



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

// Logo Styles
const logoStyle = {
  width: '150px'
}

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <SignInLink />
      <Divider />
      <GitBattleButton />
      <Divider />
      <Search/>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <img className="logo" style={logoStyle} src={Logo} alt=""/>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
