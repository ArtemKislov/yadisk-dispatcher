import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import history from 'Services/history';
import PropTypes from 'prop-types';

const Breadcrumbs = (props) => {
  const breadcrumbsPath = props.data.split('/').filter(item => item);
  let path = '';

  const breadcrumbs = breadcrumbsPath.map((current, i) => {
    return (
      <Breadcrumb.Item
        key={i}
        onClick={(e) => { e.preventDefault(); history.push(path += `/${current}`); }}
        active={i === breadcrumbsPath.length - 1}
      >
        {current}
      </Breadcrumb.Item>
    );
  });

  return (
    <Breadcrumb>
      <Breadcrumb.Item active={!breadcrumbsPath.length} onClick={(e) => { e.preventDefault(); history.push('/'); }}>
        Root
      </Breadcrumb.Item>
      {breadcrumbs}
    </Breadcrumb>
  );
};

Breadcrumbs.defaultProps = {
  data: '/',
};

Breadcrumbs.propTypes = {
  data: PropTypes.string,
};

export default Breadcrumbs;
