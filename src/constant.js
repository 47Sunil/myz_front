export const APP_ENVIRONMENT = 'local';

export const logger = (value, text) => {
  if (APP_ENVIRONMENT === 'local') {
    console.log(value, text);
  }
};
