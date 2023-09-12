import classNames from 'classnames/bind';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import {useEffect, useState} from 'react';
import 'tippy.js/dist/tippy.css';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import {Wrapper as PopperWrapper} from '~/components/Popper';

const cx = classNames.bind(styles);
console.log(images);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt='Tiktok' />
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={attrs => (
            <PopperWrapper>
              <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                <h4 className={cx('search-title')}>Accounts</h4>
              </div>
            </PopperWrapper>
          )}>
          <div className={cx('search')}>
            <input
              placeholder='Search accounts and videos'
              spellCheck={false}
            />
            <button className={cx('clear-btn')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
