import { faCheckCircle, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/styles';
import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles<Theme, IProps>((theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: (props) => props.maxWidth || '18rem',
      border: (props) => props.border || '1px solid #ddd',
      borderRadius: (props) => props.borderRadius || '0.5rem',
      cursor: 'pointer',
      overflow: 'hidden',
      backgroundColor: '#f7f9ff',
      boxShadow: 'none',
      [theme.breakpoints.down('xs')]: {
        maxWidth: 'none !important',
        border: '1px solid #fff !important',
        borderRadius: '0 !important'
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: '15rem'
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: '18rem'
      }
    },
    content: {
      display: 'flex',
      height: '100%',
      justifyContent: 'space-between',
      flexDirection: 'column',
      padding: '0.7rem 0',
      fontSize: '0.5rem'
    },
    userName: {
      fontWeight: 'bold',
      fontSize: (props) => props.fontSize || '1rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '0.9rem !important '
      }
    },
    price: {
      display: 'flex',
      justifyContent: 'flex-start'
    },
    link: {
      color: '#484848'
    },
    avatar: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 60,
      height: 60,
      [theme.breakpoints.down('md')]: {
        width: 50,
        height: 50
      },
      [theme.breakpoints.up('lg')]: {
        width: 47,
        height: 47
      }
    },
    icon: {
      paddingRight: 3,
      [theme.breakpoints.up('sm')]: {
        fontSize: '0.8rem !important'
      },
      [theme.breakpoints.down('xs')]: {
        paddingRight: 5
      }
    },
    certificate: {
      color: '#08C299',
      [theme.breakpoints.up('sm')]: {
        fontSize: '0.8rem !important'
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: 15
      }
    }
  })
);

interface IProps {
  maxWidth?: string | number;
  fontSize?: string | number;
  border?: string;
  borderRadius?: string | number;
  id: number;
  avatar: string;
  avatar_url: string;
  name: string;
  number_room: number;
}

const HostInfo: FC<IProps> = (props) => {
  const { t } = useTranslation();
  const classes = useStyles(props);
  const { id, avatar, avatar_url, name, number_room } = props;
  // const merchant = !!room && room.merchant.data;

  return (
    <Paper className={classes.paper}>
      <Link href={`/user/${id}`}>
        <a className={classes.link}>
          <Grid container>
            <Grid item xs={3} sm={4} md={4} lg={4} xl={3} style={{ position: 'relative' }}>
              <Avatar
                alt={avatar}
                src={avatar_url !== '' ? avatar_url : '/static/images/avatar_default.png'}
                className={classes.avatar}
              />
            </Grid>
            <Grid item xs={9} sm={8} md={8} lg={8} xl={9}>
              <Grid item xs className={classes.content}>
                <Typography className={classes.userName}>{name}</Typography>
                <Grid container className={classes.price}>
                  <Grid item sm={2} md={3} lg={3}>
                    <Typography variant='subtitle1' className={classes.icon}>
                      <FontAwesomeIcon className={classes.icon} icon={faHome} />
                      {number_room}
                    </Typography>
                  </Grid>
                  <Grid item sm={10} md={9} lg={9}>
                    <Typography variant='subtitle1' className={classes.certificate}>
                      <FontAwesomeIcon
                        className={classes.icon}
                        icon={faCheckCircle} />
                      {t('rooms:verified')}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </a>
      </Link>
    </Paper>
  );
};

export default HostInfo;
