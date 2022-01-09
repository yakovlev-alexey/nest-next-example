import { NextFunction, Request, Response } from 'express';

const createStubTranslation = () => {
  return {
    en: {
      value: 'Lorem ipsum',
    },
    gb: {
      value: 'Lorem ipsum',
    },
    meta: {
      description: 'Dolore sit ame',
      properties: {
        name: 'string',
        age: 'number',
      },
    },
  };
};

const TRANSLATIONS = Array.from(Array(5000)).reduce((acc, _item, index) => {
  acc[index] = createStubTranslation();
  return acc;
}, {});

export const translationsMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  req.translations = TRANSLATIONS;

  next();
};
