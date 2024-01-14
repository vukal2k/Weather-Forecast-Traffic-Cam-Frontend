import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import type { JSX } from 'react/jsx-runtime';

import { config } from '@/constants/config';
import { API, HEADER_KEY } from '@/constants/config/apis';

function withAPIKey(WrappedComponent: any) {
  return function (props: JSX.IntrinsicAttributes) {
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
      if (!localStorage.getItem(HEADER_KEY.API_KEY)) {
        fetch(config.baseUrl + API.API_KEY.path, {
          method: 'post',
        })
          .then((res) => res.json())
          .then((response) => {
            localStorage.setItem(HEADER_KEY.API_KEY, response.data);
            setIsSuccess(true);
          });
      } else {
        setIsSuccess(true);
      }
    }, []);

    if (isSuccess) {
      return <WrappedComponent {...props} />;
    } else {
      return <Spin size="large" />;
    }
  };
}

export default withAPIKey;
