import ButtonGlobal from '@/components/ButtonGlobal';
import SearchAutoSuggestion from '@/components/Home/SearchAutoSuggestion';
import Logo from '@/components/Toolbar/Logo';
import SideDrawer from '@/components/Toolbar/SideDrawer';
import SwitchLanguage from '@/components/Toolbar/SwitchLanguage';
import { GlobalContext } from '@/store/Context/GlobalContext';
import { ReducersList } from '@/store/Redux/Reducers';
import { NotificationReducerAction, setMarkAllRead } from '@/store/Redux/Reducers/Notification/notification';
import { CountUnreadRes } from '@/types/Requests/Notification/CountUnread';
import { AppBar, Avatar, Badge, Button, ClickAwayListener, Divider, Grid, Grow, Hidden, ListItemIcon, MenuItem, MenuList, Paper, Popover, Popper, SwipeableDrawer, Theme, Toolbar, Typography } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import Orange from '@material-ui/core/colors/orange';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import IconMenu from '@material-ui/icons/Menu';
import NotificationsOutlined from '@material-ui/icons/NotificationsOutlined';
import People from '@material-ui/icons/PersonRounded';
import PhoneIcon from '@material-ui/icons/Phone';
import PowerSettingsNewRounded from '@material-ui/icons/PowerSettingsNewRounded';
import React, { Dispatch, Fragment, FunctionComponent, useContext, useRef, useState } from 'react';
import { withCookies } from 'react-cookie';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { compose } from 'recompose';
import Cookies from 'universal-cookie';
import GridContainer from '../Layout/Grid/Container';

interface IProps {
  classes?: any;
  hiddenListCitySearch?: boolean;
  cookies: Cookies;
  isSticky?: boolean;
  isDetailPage?: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    containter: {
      zIndex: 4,
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    },
    stickyContainer: {
      position: 'fixed',
      zIndex: 99999,
      [theme.breakpoints.down('sm')]: {
        zIndex: 1200
      }
    },
    grow: {
      flexGrow: 1,
      marginLeft: '20px',
      [theme.breakpoints.only('xs')]: {
        marginLeft: 0
      }
    },
    centerLogo: {
      justifyContent: 'center'
    },
    button: {
      fontSize: '.875rem',
      letterSpacing: '.2px',
      borderRadius: 8,
      textTransform: 'inherit',
      padding: '8px 20px',
      '&:hover': {
        color: Orange[500],
        backgroundColor: '#f9f9f9',
        borderRadius: '8px'
      },
      '&:focus': {
        color: Orange[500],
        backgroundColor: '#f9f9f9',
        borderRadius: '8px'
      }
    },
    buttonMerchantSite: {
      height: '40px',
      textTransform: 'capitalize',
      color: 'white',
      borderRadius: 8,
      fontFamily: '"Circular", -apple-system, BlinkMacSystemFont, "Roboto", "Helvetica Neue", sans-serif !important;',
      fontWeight: 600,
      marginRight: 16,
      MozTransition: 'all 0.5s',
      WebkitTransition: 'all 0.5s',
      transition: 'all 0.5s',
      '&:hover': {
        backgroundColor: '#f9f9f9',
        boxShadow: 'none'
      }
    },
    link: {
      textTransform: 'inherit',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0)',
        color: blue[500]
      }
    },
    menuButton: {
      marginLeft: -28,
      marginRight: 20
    },
    drawer: {
      [theme.breakpoints.only('xs')]: {
        width: '80%'
      },
      width: '60%'
    },
    Popper: {
      zIndex: 999999
    },
    support: {
      top: '3em'
    },
    listSupport: {
      listStyle: 'none'
    },
    roomType: {
      color: 'rgb(118, 118, 118)',
      overflow: 'hidden',
      fontSize: '1em',
      padding: '0.3em 0.5em',
      borderRadius: '4px',
      border: '1px solid #ffa726',
      whiteSpace: 'normal',
      textOverflow: 'ellipsis',
      letterSpacing: 'normal',
      textAlign: 'center'
    },
    fab: {
      margin: 8
    },
    rightIcon: {
      marginLeft: 8
    },
    textSpan: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    margin: {
      color: 'white',
      backgroundColor: 'red'
    },
    padding: {
      padding: theme.spacing(0, 1)
    },
    MuiBadge: {
      color: 'red'
    }
  });

const NavHeader: FunctionComponent<IProps> = (props) => {
  const { classes, cookies, hiddenListCitySearch, isSticky, isDetailPage } = props;
  const leaseTypeGlobal = useSelector<ReducersList, 0 | 1>((state) => state.searchFilter.leaseTypeGlobal);

  const { t }: UseTranslationResponse = useTranslation();
  const [menuStatus, setMenuStatus] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const userRefButton = useRef(null);
  const { router, width } = useContext(GlobalContext);
  const count_unread = useSelector<ReducersList, CountUnreadRes>(
    (state) => state.notifications.count_unread
  );
  const dispatch = useDispatch<Dispatch<NotificationReducerAction>>();
  const Hotline = (contact: string) => {
    window.location.href = `${contact}`;
  };

  const toProfile = () => {
    router.push('/profile');
  };

  const logoutTrigger = () => {
    window.location.reload();
    cookies.remove('_token', { path: '/' });
  };

  const loginButtonClick = () => {
    router.push('/auth/signin');
  };

  const signUpButtonClick = () => {
    router.push('/auth/signup');
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openNotification = () => {
    setMarkAllRead().then(() => {
      dispatch({ type: 'setMarkAllRead', payload: { count: 0 } });
    });
    router.push('/profile');
  };
  // @ts-ignore
  return (
    <Fragment>
      <GridContainer
        xs={12}
        xl={12}
        className={isSticky ? classes.stickyContainer : ''}
        classNameItem={classes.containter}>
        <AppBar
          elevation={0}
          position="static"
          color="secondary"
          style={{ backgroundColor: '#fffffff0' }}>
          <Toolbar className={hiddenListCitySearch ? classes.centerLogo : null}>
            <Hidden smDown>
              <Grid container item md={width === 'lg' || width === 'xl' ? 6 : 2}>
                <Logo isDetailPage={isDetailPage} />
                {
                  isDetailPage && (width === 'lg' || width === 'xl') &&
                  <Grid item md={6}>
                    <SearchAutoSuggestion />
                  </Grid>
                }
              </Grid>
              <div className={classes.grow} />
              <ButtonGlobal
                background={leaseTypeGlobal ? 'linear-gradient(to right, #667eea, #764ba2);' : ''}
                href={cookies.get('_token') ? `/host/room-list` : `/auth/signin`}
                // color = 'inherit'
                padding="0px 20px"
                className={classes.buttonMerchantSite}
                name="merchant-site"
                size="large">
                {t('home:merchantChannel')}
              </ButtonGlobal>

              {cookies.get('_token') && (
                <Button
                  onClick={openNotification}
                  buttonRef={userRefButton}
                  name="notification"
                  color="inherit"
                  className={classes.button}
                  size="large">
                  {count_unread ? (
                    <Badge
                      classes={{ badge: classes.margin }}
                      max={99}
                      badgeContent={count_unread.count}>
                      <Typography className={classes.padding}>
                        <NotificationsOutlined />
                      </Typography>
                    </Badge>
                  ) : (
                      <NotificationsOutlined />
                    )}
                </Button>
              )}

              <Button
                onClick={() => setOpen(!open)}
                buttonRef={userRefButton}
                name="support"
                color="inherit"
                className={classes.button}
                size="large">
                {t('home:contact')}
              </Button>

              <Popover
                open={open}
                anchorEl={userRefButton.current}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <Paper>
                    <MenuList>
                      <MenuItem onClick={() => Hotline('tel:0917041849')}>
                        <ListItemIcon>
                          <PhoneIcon />
                        </ListItemIcon>
                        {t('home:supportHost')}: 0917 041 849
                      </MenuItem>
                    </MenuList>
                  </Paper>
                </ClickAwayListener>
              </Popover>
              {cookies.get('_token') ? (
                <Fragment>
                  <SwitchLanguage />

                  <Button
                    buttonRef={userRefButton}
                    color="inherit"
                    className={classes.button}
                    onClick={() => setMenuStatus(!menuStatus)}
                    style={{ backgroundColor: 'transparent' }}
                    size="large">
                    <Avatar>
                      <People />
                    </Avatar>
                  </Button>
                  <Popper
                    open={menuStatus}
                    anchorEl={userRefButton.current}
                    transition
                    className={classes.Popper}>
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                          minWidth: 300
                        }}>
                        <Paper elevation={1}>
                          <ClickAwayListener onClickAway={() => setMenuStatus(false)}>
                            <MenuList>
                              <MenuItem onClick={toProfile} component="li">
                                <ListItemIcon>
                                  <AccountCircleOutlined />
                                </ListItemIcon>
                                {t('home:profile')}
                              </MenuItem>
                              <Divider />
                              <MenuItem onClick={logoutTrigger} component="li">
                                <ListItemIcon>
                                  <PowerSettingsNewRounded />
                                </ListItemIcon>
                                {t('home:logout')}
                              </MenuItem>
                              {/*<Divider />*/}
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </Fragment>
              ) : (
                  <Fragment>
                    <Button
                      name="sign-in"
                      color="inherit"
                      className={classes.button}
                      onClick={loginButtonClick}
                      size="large"
                    // onMouseOver={() => LoginForm.preload()}
                    >
                      {t('home:signIn')}
                    </Button>

                    {/* <Link href="/auth/signup"> */}
                    <Button
                      href="/auth/signup"
                      name="sign-up"
                      color="inherit"
                      className={classes.button}
                      onClick={signUpButtonClick}
                      size="large"
                    // onMouseOver={() => SignUpForm.preload()}
                    >
                      {t('home:signUp')}
                    </Button>
                    {/* </Link> */}

                    <SwitchLanguage />
                  </Fragment>
                )}
            </Hidden>
            <Hidden mdUp>
              <Logo />
              <div className={classes.grow} />
              <IconMenu onClick={() => setOpenDrawer(true)} />

              <Fragment>
                <div>
                  <SwipeableDrawer
                    disableSwipeToOpen
                    open={openDrawer}
                    onOpen={() => setOpenDrawer(true)}
                    onClose={() => setOpenDrawer(false)}
                    ModalProps={{
                      keepMounted: true // Better open performance on mobile.
                    }}
                    classes={{
                      paper: classes.drawer
                    }}>
                    <SideDrawer setOpen={setOpenDrawer} />
                  </SwipeableDrawer>
                </div>
              </Fragment>
            </Hidden>
          </Toolbar>
        </AppBar>
      </GridContainer>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withCookies,
  withStyles(styles)
)(NavHeader);
