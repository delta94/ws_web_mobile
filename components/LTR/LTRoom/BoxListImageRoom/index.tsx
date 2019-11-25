import { ImagesRes } from '@/types/Requests/LTR/Images/ImageResponses';
import { IMAGE_STORAGE_LG } from '@/utils/store/global';
import { Grid, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/styles';
import React, { FC, Fragment, MouseEvent, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PropertyListHorizontalScroll from '@/pages/homepage/PropertyListHorizontalScroll';
import mainColor from '@/styles/constants/colors';

interface IProps {
  classes?: any,
  livingrooms: ImagesRes | any,
  outdoors: ImagesRes | any,
  furnitures: ImagesRes | any,
  kitchens: ImagesRes | any,
  cover_photo: ImagesRes | any,
  bedrooms: any,
  bathrooms: any
}

interface IArrayImage {
  imgURL: string,
}

const useStyles = makeStyles<Theme, IProps>((theme: Theme) =>
  createStyles({
    name: {
      fontSize: 15,
      lineHeight: '20px',
      letterSpacing: -0.24,
      color: mainColor.titleText,
      fontWeight:'bold'
    },
    btnViewAll:{
      fontSize: 15,
      lineHeight: '20px',
      letterSpacing: -0.24,
      color: '#54D3C2',
      paddingRight: 28,
    },
    properyItemIcon:{
      display: 'flex',
      justifyContent: 'center',
    },
    itemIcon:{
      width: 103,
      height: 100,
      objectFit: 'cover',
      borderRadius: 15,
      zIndex: 2,
    }
  })
);


const BoxListImageRoom: FC<IProps> = (props) => {
  const classes = useStyles(props);
  const { livingrooms, outdoors, furnitures, kitchens, bedrooms, bathrooms, cover_photo } = props;
  const { t } = useTranslation();
  const [openFullImage, setOpenFullImage] = useState<boolean>(false);

  const toggle = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOpenFullImage(!openFullImage);
  };

  let arrImage: IArrayImage[] = [];
  const funcPushImage = useMemo(() => {
    if (cover_photo.images && cover_photo.images.length) {
      arrImage.push({
        imgURL: `${IMAGE_STORAGE_LG + cover_photo.images[0].name}`
      })
    }
    if (livingrooms.images && livingrooms.images.length) {
      arrImage.push({
        imgURL: `${IMAGE_STORAGE_LG + livingrooms.images[0].name}`
      })
    }
    if (bedrooms[`bedroom_1`] && bedrooms[`bedroom_1`].images && bedrooms[`bedroom_1`].images.length) {
      arrImage.push({
        imgURL: `${IMAGE_STORAGE_LG + bedrooms['bedroom_1'].images[0].name}`
      })
    }
    if (bathrooms['bathroom_1'] && bathrooms['bathroom_1'].images && bathrooms['bathroom_1'].images.length) {
      arrImage.push({
        imgURL: `${bathrooms.bathroom_1 ? IMAGE_STORAGE_LG + bathrooms['bathroom_1'].images[0].name : ''}`
      })
    }
    if (kitchens.images && kitchens.images.length) {
      arrImage.push({
        imgURL: `${IMAGE_STORAGE_LG + kitchens.images[0].name}`
      })
    }
    if (furnitures.images && furnitures.images.length) {
      arrImage.push({
        imgURL: `${IMAGE_STORAGE_LG + furnitures.images[0].name}`
      })
    }
  }, []);

  const renderRoomImages = (item) => (
    <Grid>
      <Grid className={classes.properyItemIcon}>
        <img className={classes.itemIcon} src={item.imgURL}></img>
      </Grid>
    </Grid>
  );


  return (
    <Fragment>
      <Grid container justify='space-between' alignContent='center'>
        <Grid item>
          <Typography variant='h5' className={classes.name} gutterBottom>
            {t('longtermroom:discover')}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5' className={classes.btnViewAll} gutterBottom>
            {t('longtermroom:allImages')}
          </Typography>
        </Grid>
      </Grid>
    
      <PropertyListHorizontalScroll
        // itemWidth={'33,33%'}
        margin='14px 0 0'
        paddingItem='0 10px 0 0 !important'
        listData={arrImage}
        itemRender={renderRoomImages}
      />
    </Fragment>
  );
};

export default BoxListImageRoom;
