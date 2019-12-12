import { GlobalContext } from '@/store/Context/GlobalContext';
import { IMAGE_STORAGE_SM } from '@/utils/store/global';
import { Grid, Theme } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';
import { createStyles, makeStyles } from '@material-ui/styles';
import React, { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'universal-cookie';

interface IProps {
  classes?: any;
  room?: any;
  imgHeight?: number;
}

const useStyles = makeStyles<Theme, IProps>((theme: Theme) =>
  createStyles({
    boxWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    imgSize: {
      height: (props) => (props.imgHeight ? props.imgHeight : 220)
    }
  })
);

const ApartmentForRent: FC<IProps> = (props) => {
  const classes = useStyles(props);
  const { room, imgHeight } = props;
  const { t } = useTranslation();
  const cookies = new Cookies();
  const { width } = useContext(GlobalContext);

  return (
    <Grid className="ApartmentForRent">
      <Grid className="ApartmentForRent__boxImg">
        <img
          src={
            !!room.avatar.images[0].name
              ? IMAGE_STORAGE_SM + room.avatar.images[0].name
              : './static/images/westay-avatar.jpg'
          }
          className="ApartmentForRent__boxImg__img"
          alt={``}
        />
      </Grid>
      <Grid className="card-item__box-shadow"></Grid>
      <Link href={`/long-term-room/${room.id}`} target="_blank" className="boxLink">
        <Grid className="ApartmentForRent__boxContent">
          <Grid className="ApartmentForRent__boxContent__wrapper">
            <Grid className="ApartmentForRent__boxContent__title">{room.about_room.name}</Grid>
            <Grid className="ApartmentForRent__boxContent__detail">
              <Grid className="ApartmentForRent__boxContent__price">
                {cookies.get('initLanguage') == 'en' ? '$' : ''}
                {room.price_display}
                {cookies.get('initLanguage') == 'vn' ? 'đ' : ''}
              </Grid>
              <Grid className="ApartmentForRent__boxContent__rating">
                <Rating
                  name="customized-empty"
                  readOnly
                  size="small"
                  value={4}
                  precision={0.5}
                  classes={{ root: 'ApartmentForRent__boxContent__rating__colorStar' }}
                  emptyIcon={<StarBorderIcon fontSize="inherit" className={classes.iconEmpty} />}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
};

export default ApartmentForRent;
