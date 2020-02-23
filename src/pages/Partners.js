import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems } from '../components/ListItems';
// import { Table } from "react-bootstrap";



// let i=1;
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  tableDiv: {
    width: '50%'
  },
}));

export default function Partners() {
  const classes = useStyles();
  const [dialogOpen, dialogSetOpen] = React.useState(false);

  const handleClickOpen = e => {
    e.preventDefault();
    dialogSetOpen(true);
  };

  const handleClose = e => {
    e.preventDefault();
    dialogSetOpen(false);
  };
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
//   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
      
                  <div className={classes.root}>
                  <CssBaseline />
                  <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                      <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                      >
                        <MenuIcon />
                      </IconButton>
                      <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Farm+ Partners
                      </Typography>
                      <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                          <NotificationsIcon />
                        </Badge>
                      </IconButton>
                        
                            <Button variant="contained" color="secondary"  style={{marginLeft: '2em'}}>
                                Sign Out
                            </Button>
                       
                    </Toolbar>
                  </AppBar>
                  <Drawer
                    variant="permanent"
                    classes={{
                      paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                  >
                    <div className={classes.toolbarIcon}>
                      <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                      </IconButton>
                    </div>
                    <Divider />
                    <List>{mainListItems}</List>
                    <Divider />
                    
                  </Drawer>
                  <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                    <div style={{ width: '50%'}}>
                        {/* <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th> Partner Name</th>
                                <th>Discount (%)</th>
                                </tr>
                            </thead>
                            {context.state.partners.map(partner => (
                                <tbody key={partner.id}>
                                <tr>
                                <td>{context.state.number + 1}</td>
                                <td>{partner.partnerName}</td>
                                <td>{partner.discount}</td>
                                </tr>  
                            </tbody>
                            ))}
                            
                        </Table> */}
                        <div>
                            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                                Add New Partner
                            </Button>
                            <Dialog open={dialogOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">New Partner</DialogTitle>
                                <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Partner Name"
                                    type="text"
                                    fullWidth
                                    
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Description"
                                    type="text"
                                    style={{marginTop: '1em'}}
                                    fullWidth
                                    
                                />
                                </DialogContent>
                                <DialogActions>
                                {/* <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button> */}
                                <Button  color="primary">
                                    Add
                                </Button>
                                <Button onClick={handleClose} color="primary">
                                    Close
                                </Button>
                                </DialogActions>
                            </Dialog>
                            </div>
                     </div>  
                      <Box pt={4}>
                        {/* <Copyright /> */}
                      </Box>
                    </Container>
                  </main>
                </div>
             
    
  );
}