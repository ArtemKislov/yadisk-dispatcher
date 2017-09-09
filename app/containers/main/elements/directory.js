import React from 'react';
import { Col } from 'react-bootstrap';
import { Icon } from 'react-fa';
import history from 'Services/history';
import PropTypes from 'prop-types';

const Directory = (props) => {
  return (
    <Col
      xs={6}
      sm={3}
      md={2}
      lg={2}
      className="mb-20"
      onDoubleClick={() => history.push(props.path.substring(5))}
      onTouchStart={() => history.push(props.path.substring(5))}
    >
      <div className="directory-element">
        <div className="directory-element-img">
          <Icon name="folder" />
        </div>
        <div className="directory-element-name">
          {props.name}
        </div>
      </div>
    </Col>
  );
};

Directory.defaultProps = {
  path: '/',
  name: '',
};

Directory.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
};

export default Directory;
