import React, {
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { string, number } from 'prop-types';
import classnames from 'classnames';

import { Container } from './LazyImage.style';

import { createRandomHash } from 'app/core/utils/string.util';

function checkWhetherElementInViewport (element) {
  const rect = element.getBoundingClientRect();

  return rect.top >= 0
    && rect.left >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

function LazyImageRenderer ({
  src,
  ratio,
  onLoadingFailure
}) {
  const imageRatio = `${ ratio * 100 }%`;
  const imageRef = useRef(null);
  const imageLoaderRef = useRef(new Image());
  let [ isImageLoaded, toggleIsImageLoaded ] = useState(false);

  useEffect(function () {
    if (src) {
      window.addEventListener('scroll', handleScroll);
      registerLoadingImageEvents();
      handleScroll();
    } else {
      toggleIsImageLoaded(true);
    }
  }, []);

  // componentWillUnmount
  useEffect(function () {
    return function () {
      handleDestroyLoadingImageListener();
    };
  }, []);

  function registerLoadingImageEvents () {
    imageLoaderRef.current?.addEventListener('load', handleImageLoad);
    imageLoaderRef.current?.addEventListener('error', handleImageLoadingError);
  }

  function handleImageLoad () {
    if (imageRef?.current) {
      imageRef.current.style.backgroundImage = `url("${ src }")`;
      handleDestroyLoadingImageListener();
    }
  }

  function handleImageLoadingError () {
    handleDestroyLoadingImageListener();

    if (onLoadingFailure) {
      onLoadingFailure();
    }
  }

  function handleScroll () {
    if (imageRef.current) {
      const isElementInViewport = checkWhetherElementInViewport(imageRef.current);

      if (!isImageLoaded && isElementInViewport && imageLoaderRef.current) {
        imageLoaderRef.current.src = src;
      }
    }
  }

  function handleDestroyLoadingImageListener () {
    toggleIsImageLoaded(true);

    if (imageLoaderRef.current) {
      imageLoaderRef.current.removeEventListener('load', handleImageLoad);
      imageLoaderRef.current.removeEventListener('error', handleImageLoadingError);
      imageLoaderRef.current = null;
    }

    window.removeEventListener('scroll', handleScroll);
  }

  return <Container imageRatio={ imageRatio }>
    <div
      ref={ imageRef }
      className={ classnames('lazy-image', { 'loading': !isImageLoaded }) } />
  </Container>;
}

function LazyImage (props) {
  const [ isFirstLoadError, toggleFirstLoadError ] = useState(false);
  const fallbackAvatar = useMemo(
    () => {
      if (props.imageRatio === 1 && !!props.name) {
        return `https://ui-avatars.com/api?background=random&name=${ props.name.charAt(0) }&length=1`;
      } else {
        return '';
      }
    },
    [ props.name, props.imageRatio ]
  );
  const randHash = useMemo(
    () => createRandomHash(8),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ props.src, isFirstLoadError, fallbackAvatar ]
  );

  useEffect(function () {
    toggleFirstLoadError(false);
  }, [ props.src ]);

  function handleFirstLoadFailure () {
    toggleFirstLoadError(true);
  }

  return <Fragment>
    {
      (props.src && !isFirstLoadError)
        ? [ props.src ].map(() => <LazyImageRenderer
          key={ randHash }
          { ...props }
          onLoadingFailure={ handleFirstLoadFailure } />)
        : <LazyImageRenderer
          key={ randHash }
          { ...props }
          src={ fallbackAvatar } />
    }
  </Fragment>;
}

LazyImage.propTypes = {
  src: string.isRequired,
  ratio: number.isRequired,
  name: string
};

export default LazyImage;
