import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'dynamic-story';
import { withTranslation } from 'react-i18next';
// import readingTime from 'reading-time/index';
// import { Card, goForward } from 'dynamic-story';

import banner from '../../assets/image/logo.png';

const Fragment = ({ /* context, dispatch, schema = [], */ t }) => (
  <>
    <Header className="border-0 bg-transparent" banner={{ src: banner, alt: t('title') }} />
  </>
);

Fragment.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // schema: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Fragment);
