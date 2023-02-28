import { Button, Result } from 'antd';
import { Link } from 'umi';
import React from 'react';
import type { RouteChildrenProps } from 'react-router';

import styles from './style.less';

const actions = (
  <div className={styles.actions}>
    <a href="">
      <Button size="large" type="primary">
        <span>Check email</span>
      </Button>
    </a>
    <Link to="/">
      <Button size="large">Return to the login page</Button>
    </Link>
  </div>
);

export type LocationState = Record<string, unknown>;

const RegisterResult: React.FC<RouteChildrenProps> = ({ location }) => {
  const email = location.state
    ? (location.state as LocationState).account
    : 'AntDesign@example.com';
  return (
    <Result
      className={styles.registerResult}
      status="success"
      title={
        <div className={styles.title}>
          <span>Your account：{email} has been successfully registered</span>
        </div>
      }
      subTitle="The activation email has been sent to your email and is valid for 24 hours. Please log in to the email and click the link in the email to activate the account."
      extra={actions}
    />
  );
};

export default RegisterResult;
