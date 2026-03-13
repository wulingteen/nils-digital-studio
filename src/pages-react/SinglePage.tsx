/**
 * SinglePage adapter for Astro.
 * Wraps the existing SinglePage component with the I18nProvider
 * so it can use useTranslation() and useParams() without react-i18next.
 */
import React from 'react';
import { I18nProvider } from '../i18n/astro-i18n';
import SinglePageContent from './SinglePageContent';

interface Props {
  lang: string;
}

const SinglePage = ({ lang }: Props) => {
  return (
    <I18nProvider lang={lang}>
      <SinglePageContent />
    </I18nProvider>
  );
};

export default SinglePage;
