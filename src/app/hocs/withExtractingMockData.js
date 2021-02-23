import React, { useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import axios from 'axios';
import isArray from 'lodash.isarray';
import getData from 'lodash.get';

/* Just for mocking data, not use in real api */
function withExtractingMockData (
  WrapperComponent,
  srcUrl,
  routerIdKey = '',
  objectPathToId = '',
  pathToUsefulData = ''
) {
  return withRouter(function (props) {
    const [ data, setData ] = useState(null);
    const params = useParams();

    useEffect(function () {
      async function fetchData () {
        try {
          const responseData = await axios.get(srcUrl);
          const { data } = responseData;

          if (routerIdKey) {
            if (isArray(data) && objectPathToId && params[routerIdKey]) {
              const findingItem =  data.find(item => getData(item, objectPathToId) === params[routerIdKey]),
                usefulData = pathToUsefulData
                  ? getData(findingItem, pathToUsefulData)
                  : findingItem;

              if (findingItem) {
                setData(usefulData);
              } else {
                props.history.replace('/');
              }
            } else {
              setData(null);
              props.history.replace('/');
            }
          } else {
            setData(data);
          }
        } catch (err) {
          console.log(err);
        }
      }

      if (srcUrl) {
        fetchData();
      }
    }, []);

    return <WrapperComponent { ...props } data={ data } />;
  });
}

export default withExtractingMockData;