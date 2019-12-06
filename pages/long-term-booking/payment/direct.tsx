import Footer from '@/components/Layout/FooterComponent';
import GridContainer from '@/components/Layout/Grid/Container';
import DirectPayment from '@/components/LTR/LTBook/LTPayment/DirectPayment';
import NavHeader from '@/components/Toolbar/NavHeader';
import { GlobalContext } from '@/store/Context/GlobalContext';
import { NextContextPage, ReducersList } from '@/store/Redux/Reducers';
import { getLTInvoice } from '@/store/Redux/Reducers/LTR/LTBooking/ltbooking';
import { LTRoomIndexRes } from '@/types/Requests/LTR/LTRoom/LTRoom';
import { PaymentBankListRes } from '@/types/Requests/Payment/PaymentResponse';
import { getCookieFromReq } from '@/utils/mixins';
import { Grid } from '@material-ui/core';
import { NextPage } from 'next';
import React, { Fragment, useContext, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

const Direct: NextPage = () => {
  const error = useSelector<ReducersList, boolean>((state) => state.ltBooking.LTPaymentError);
  const longTermRoom = useSelector<ReducersList, LTRoomIndexRes>(
    (state) => state.ltBooking.LTDataInvoice.longTermRoom.data
  );
  const lists = useSelector<ReducersList, PaymentBankListRes>(
    (state) => state.ltBooking.LTDataInvoice
  );

  const { router } = useContext(GlobalContext);

  useEffect(() => {
    // console.log(error);
    !!error && router.push('/error');
  }, [error]);

  return (
    <Fragment>
      {useMemo(
        () => (
          <Grid className="directPayment">
            <NavHeader/>
            <GridContainer xs={11} md={8} classNameItem="directPayment__content">
              <DirectPayment/>
            </GridContainer>
            <Footer/>
          </Grid>
        ),
        []
      )}
    </Fragment>
  );
};

Direct.getInitialProps = async ({ query, store, req }: NextContextPage) => {
  const initLanguage = getCookieFromReq(req, 'initLanguage');

  const res = await getLTInvoice(query, store.dispatch, initLanguage);
  return {};
};

export default Direct;
