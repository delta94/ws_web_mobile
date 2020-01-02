// import { getDataSearch } from '../Home/SearchAutoSuggestion';
import { ReducersList } from '@/store/Redux/Reducers';
import { SearchFilterAction } from '@/store/Redux/Reducers/Search/searchFilter';
import { AxiosRes } from '@/types/Requests/ResponseTemplate';
import { IS_SEARCH_CITY, IS_SEARCH_DISTRICT, IS_SEARCH_ROOM, SearchSuggestData, SearchSuggestRes } from '@/types/Requests/Search/SearchResponse';
import { axios } from '@/utils/axiosInstance';
import { Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PlaceRoundedIcon from '@material-ui/icons/PlaceRounded';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Router from 'next/router';
import React, { Dispatch, FC, Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
interface Iprops {
  inputValue: string;
  handleClose?: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    option: {
      padding: '12px 0',
      display: 'flex'
    },
    icon: {
      marginRight: 10
    }
  })
);

const SearchSuggestions: FC<Iprops> = (props: Iprops) => {
  const { t } = useTranslation();
  const { inputValue, handleClose } = props;
  const classes = useStyles(props);
  const leaseTypeGlobal = useSelector<ReducersList, 0 | 1>(
    (state) => state.searchFilter.leaseTypeGlobal
  );
  const [dataSuggestions, setDataSuggestions] = useState<SearchSuggestData[]>([]);
  const dispatch = useDispatch<Dispatch<SearchFilterAction>>();
  const getDataSearch = async (value: string): Promise<any> => {
    const res: AxiosRes<SearchSuggestRes> = await axios.get(`search-suggestions?key=${value}`);
    //Change response to one-array-data
    //if (Array.isArray(res.data.data[0]))
    let dataChange: SearchSuggestData[] = [];
    Object.keys(res.data.data[0]).map((key) => {
      res.data.data[0][key].map((item) => {
        dataChange.push(item);
      });
    });
    return dataChange;
  };

  useEffect(() => {
    getDataSearch(inputValue).then((data) => setDataSuggestions(data));
  }, [inputValue]);

  const applySearch = (option: SearchSuggestData) => {
    dispatch({
      type: 'SET_SEARCH_TEXT',
      searchText: option.name
    });
    let name = option.name;
    let cityId;
    let districtId;
    switch (option.type) {
      case 1:
        cityId = option.id;
        dispatch({
          type: 'SET_SEARCH_CITY',
          city_id: option.id
        });
        break;
      case 2:
        districtId = option.id;
        dispatch({
          type: 'SET_SEARCH_DISTRICT',
          district_id: option.id
        });
        break;
      case 3:
        // Router.push({ pathname: `/long-term-room/${option.id}` })
        // Router.push({ pathname: `/long-term-room/${option.id}`});
        window.open(`/long-term-room/${option.id}`, '_blank');
        // districtId = option.id;
        // dispatch({
        //   type: 'SET_SEARCH_DISTRICT',
        //   district_id: option.id
        // });
        break;

    }
    const pushQuery: any = {
      name: cityId === undefined && districtId === undefined ? name : '',

      city_id: cityId ? cityId : '',
      district_id: districtId ? districtId : ''
    };
    leaseTypeGlobal &&
      Router.push({
        pathname: '/long-term-rooms',
        query: pushQuery
      });
    handleClose();
  };

  return (
    <Fragment>
      {dataSuggestions &&
        dataSuggestions.map((suggestion: SearchSuggestData, index) => {
          const matches = match(suggestion.name, inputValue);
          const parts = parse(suggestion.name, matches);
          return (
            <Grid className={classes.option} key={index} onClick={() => applySearch(suggestion)}>
              <Grid className={classes.icon}>
                {suggestion.type == 3 ? <HomeRoundedIcon /> : <PlaceRoundedIcon />}
              </Grid>
              <Grid>
                {parts.map((part: { text: React.ReactNode; highlight: any }, index) => (
                  <span key={index}>{part.text}</span>
                ))}
                {
                  suggestion.type == IS_SEARCH_CITY ?
                    (<span>, {suggestion.country}</span>) : <span></span>
                }
                {
                  suggestion.type == IS_SEARCH_DISTRICT ?
                    (<span>, {suggestion.city}, {suggestion.country}</span>) : <span></span>
                }
                {
                  suggestion.type == IS_SEARCH_ROOM ? (<span>{suggestion.district ? `, ${suggestion.district}` : ''}, {suggestion.city}, {suggestion.country}</span>) : <span></span>
                }
              </Grid>
            </Grid>
          );
        })}
    </Fragment>
  );
};

export default SearchSuggestions;
