import React from 'react';
import { Col } from 'react-bootstrap';
import { Icon } from 'react-fa';
import PropTypes from 'prop-types';

const File = (props) => {
  const icon = {
    jpg: 'file-image-o',
    jpeg: 'file-image-o',
    png: 'file-image-o',
    gif: 'file-image-o',
    mp3: 'file-audio-o',
    mp4: 'file-video-o',
    txt: 'file-text-o',
    csv: 'file-excel-o',
    xls: 'file-excel-o',
    xlsx: 'file-excel-o',
    doc: 'file-word-o',
    docx: 'file-word-o',
    rar: 'file-archive-o',
    zip: 'file-archive-o',
    pdf: 'file-pdf-o',
    default: 'file-o',
  };

  return (
    <Col xs={6} sm={3} md={2} lg={2} className="mb-20" >
      <div className="directory-element">
        <div className="directory-element-img">
          {props.preview ?
            (<img src={props.preview} alt={props.name} className="img-responsive" />) :
            (<Icon name={icon[props.extension] || icon.default} />)}
        </div>
        <div className="directory-element-name">
          {props.name}
        </div>
      </div>
    </Col>
  );
};

File.defaultProps = {
  preview: '',
  name: '',
  extension: '',
};

File.propTypes = {
  preview: PropTypes.string,
  name: PropTypes.string,
  extension: PropTypes.string,
};

export default File;
