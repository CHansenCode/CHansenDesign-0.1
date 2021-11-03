import { NextLink } from '@/components/NextLink';

import { sitemap } from '../../../config/index';

import css from './Sitemap.module.scss';

const Sitemap = () => {
  return (
    <ul className={css.ul}>
      {sitemap
        ? sitemap.map((link, i) => (
            <NextLink key={`${link.title}${i}`} href={link.route}>
              <li>{link.title}</li>
            </NextLink>
          ))
        : 'Please provide an array of links to Sitemap component'}
    </ul>
  );
};

export default Sitemap;
