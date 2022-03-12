import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { CollectionOverview } from '../../components/CollectionOverview/CollectionOverview';
import { CollectionPage } from '../CollectionPage/CollectionPage';
import { fetchCollectionStart } from '../../redux/shop/actionsShop';
import { withSpinner } from '../../components/Spinner/Spinner';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

export const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  const isFetchingCollection = useSelector((state) => state.shop.isFetching);

  useEffect(() => {
    dispatch(fetchCollectionStart());
  }, []);

  return (
    <div className="shop-page">
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isFetchingCollection}
              {...props}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={isFetchingCollection}
              {...props}
            />
          )}
        />
      </div>
    </div>
  );
};
