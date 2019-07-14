import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Card } from 'dynamic-story';

const DoctorCornflower = ({ children, className, text, title, ...rest }) => (
  <Card
    className={classNames('char-doctorCornflower border-cornflower', className)}
    // text={text}
    title={title}
    {...rest}
  >
    {!children && (
      <div className="card-body text-cornflower">
        {title && <h5 className="card-title">{title}</h5>}
        {text && <p className="card-text">{text}</p>}
      </div>
    )}
    {children}
  </Card>
);

DoctorCornflower.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

DoctorCornflower.defaultProps = {
  children: null,
  className: '',
  text: null,
  title: null,
};

export default DoctorCornflower;
