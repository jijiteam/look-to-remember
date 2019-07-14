import React from 'react';
import PropTypes from 'prop-types';
import { Card, goForward, goBackward, updateContext } from 'dynamic-story';

import Context from '../../context/methods';
import DoctorCornflower from '../../components/Character/DoctorCornflower';

const REPOSITORY = 'https://github.com/jijiteam/look-to-remember';

const Fragment = ({ context, dispatch, t }) => {
  const choices = {
    20: {
      a: () => {
        dispatch(updateContext(Context(context).cornflower.updateFeelings({ authority: 1 })));
        dispatch(goForward());
      },
      b: () => {
        dispatch(updateContext(Context(context).cornflower.updateFeelings({ sympathy: 1 })));
        dispatch(goForward());
      },
      x: () => {
        dispatch(updateContext(Context(context).cornflower.updateFeelings({ authority: -1 })));
        dispatch(goForward());
      },
    },
  };

  return (
    <>
      <DoctorCornflower
        isSkipAble
        id="Intro.0"
        text={t('fragment:Intro.0')}
        onTimeout={() => dispatch(goForward())}
      />

      <Card
        isSkipAble
        id="Intro.1"
        className="w-33 mr-sm-3"
        text={t('fragment:Intro.1')}
        onTimeout={() => dispatch(goForward())}
        style={{ minHeight: t('fragment:Intro.minHeight.1-2-3') }}
      />

      <Card
        isSkipAble
        id="Intro.2"
        className="w-33"
        text={t('fragment:Intro.2')}
        onTimeout={() => dispatch(goForward())}
        style={{ minHeight: t('fragment:Intro.minHeight.1-2-3') }}
      />

      <Card
        isSkipAble
        id="Intro.3"
        className="w-33 ml-sm-3"
        text={t('fragment:Intro.3')}
        onTimeout={() => dispatch(goForward())}
        style={{ minHeight: t('fragment:Intro.minHeight.1-2-3') }}
      />

      <Card
        isSkipAble
        id="Intro.4"
        text={t('fragment:Intro.4')}
        onTimeout={() => dispatch(goForward())}
      />

      <Card
        isSkipAble
        id="Intro.5"
        text={t('fragment:Intro.5')}
        onTimeout={() => dispatch(goForward())}
      />

      <DoctorCornflower
        isSkipAble
        id="Intro.6"
        text={t('fragment:Intro.6')}
        onTimeout={() => dispatch(goForward())}
      />

      <Card
        isSkipAble
        id="Intro.7"
        text={t('fragment:Intro.7')}
        onTimeout={() => dispatch(goForward())}
      />

      <DoctorCornflower
        isSkipAble
        id="Intro.8"
        text={t('fragment:Intro.8.text')}
        choices={{
          a: { text: t('fragment:Intro.8.choice.a'), onClick: () => dispatch(goForward(1)) },
          b: { text: t('fragment:Intro.8.choice.b'), onClick: () => dispatch(goForward()) },
        }}
      />

      <Card
        isSkipAble
        id="Intro.9"
        text={t('fragment:Intro.9')}
        className="border-danger text-danger"
        choices={{
          a: { text: t('fragment:Intro.9.choice.a'), onClick: () => dispatch(goBackward()) },
          b: { text: t('fragment:Intro.9.choice.b'), onClick: () => window.location.assign(REPOSITORY) },
        }}
      />

      <Card
        isSkipAble
        id="Intro.10"
        text={t('fragment:Intro.10')}
        onTimeout={() => dispatch(goForward())}
      />

      <Card
        isSkipAble
        id="Intro.11"
        text={t('fragment:Intro.11')}
        onTimeout={() => dispatch(goForward())}
      />

      <Card
        isSkipAble
        id="Intro.12"
        text={t('fragment:Intro.12')}
        onTimeout={() => dispatch(goForward())}
      />

      <Card
        isSkipAble
        id="Intro.13"
        text={t('fragment:Intro.13')}
        onTimeout={() => dispatch(goForward())}
      />

      <Card
        isSkipAble
        id="Intro.14"
        text={t('fragment:Intro.14')}
        onTimeout={() => dispatch(goForward())}
      />

      <Card
        isSkipAble
        id="Intro.15"
        className="w-33 mr-sm-3"
        text={t('fragment:Intro.15')}
        onTimeout={() => dispatch(goForward())}
        style={{ minHeight: t('fragment:Intro.minHeight.15-16-17') }}
      />

      <Card
        isSkipAble
        id="Intro.16"
        className="w-33"
        text={t('fragment:Intro.16')}
        onTimeout={() => dispatch(goForward())}
        style={{ minHeight: t('fragment:Intro.minHeight.15-16-17') }}
      />

      <Card
        isSkipAble
        id="Intro.17"
        className="w-33 ml-sm-3"
        text={t('fragment:Intro.17')}
        onTimeout={() => dispatch(goForward())}
        style={{ minHeight: t('fragment:Intro.minHeight.15-16-17') }}
      />

      <Card
        isSkipAble
        id="Intro.18"
        text={t('fragment:Intro.18')}
        onTimeout={() => dispatch(goForward())}
      />

      <Card
        isSkipAble
        id="Intro.19"
        text={t('fragment:Intro.19')}
        onTimeout={() => dispatch(goForward())}
      />

      <DoctorCornflower
        isSkipAble
        id="Intro.20"
        text={t('fragment:Intro.20.text')}
        choices={{
          a: { text: t('fragment:Intro.20.choice.a'), onClick: choices[20].a },
          b: { text: t('fragment:Intro.20.choice.b'), onClick: choices[20].b },
          x: { text: t('fragment:Intro.20.choice.x'), onClick: choices[20].x },
        }}
      />

    </>
  );
};

Fragment.propTypes = {
  context: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default Fragment;
