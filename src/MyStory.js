import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import {
  Debug,
  DebugButton,
  ErrorBoundary,
  getSchema,
  GoBackward,
  // Header,
  setContext,
  Story,
} from 'dynamic-story';

import { withTranslation } from 'react-i18next';
import Intro from './fragments/Intro';
import End from './fragments/End';

import initialContext from './context';

// import banner from './assets/image/logo.png';

// eslint-disable-next-line
const Content = (props) => {
  // const { t } = props;

  return (
    <>
      {/* <Header className="border-0 bg-transparent" banner={{ src: banner, alt: t('title') }} /> */}
      {Intro(props)}
      {End(props)}
    </>
  );
};

Content.propTypes = {
  // t: PropTypes.func.isRequired,
};

const MyStory = (props) => {
  const { context, dispatch, settings } = props;
  const { darkMode, debug } = settings;
  const schema = getSchema(Content(props));

  React.useEffect(() => { if (!context) dispatch(setContext(initialContext)); }, [context, dispatch]);

  return context && (
    <>
      <ErrorBoundary>
        {React.createElement(
          debug ? Debug : Story,
          { id: 'myStory', className: classNames('styled', { 'bg-darker': darkMode }) },
          Content({ ...props, schema }),
        )}
      </ErrorBoundary>
      {(!debug && process.env.NODE_ENV === 'development') && (
        <div className="fixed-top m-2 text-right">
          <GoBackward className={classNames('btn-sm mr-2', { 'btn-dark': darkMode, 'btn-light': !darkMode })} />
          <DebugButton className={classNames('btn-sm mr-2', { 'btn-dark': darkMode, 'btn-light': !darkMode })} />
        </div>
      )}
    </>
  );
};

MyStory.propTypes = {
  dispatch: PropTypes.func.isRequired,
  context: PropTypes.objectOf(PropTypes.any),
  settings: PropTypes.shape({ debug: PropTypes.bool }),
};

MyStory.defaultProps = {
  context: null,
  settings: {},
};

export default connect(
  state => ({ ...state.dynamicStory }),
)(withTranslation(['common', 'fragment', 'character'])(MyStory));
