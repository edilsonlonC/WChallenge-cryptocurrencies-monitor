import util from 'util';
import { config } from '../config/config';
import langs from '../config/langs.json';

export default () => {
  const defaultLanguage = config.defaultLanguage || 'es';
  return function (req, res, next) {
    const translate = (key, ...args) => {
      const lang = req.headers['content-language'] || defaultLanguage;
      const text = langs[key] && langs[key][lang] ? langs[key][lang] : key;
      return util.format(text, ...args);
    };
    req.translate = translate;
    return next();
  };
};
