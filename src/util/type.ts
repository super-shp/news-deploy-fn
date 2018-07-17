export const isString = (data: any): boolean =>
  typeof data === 'string' || data instanceof String;

export const isBlob = (data: any): boolean => data instanceof Blob;

export const isFile = (data: any): boolean => data instanceof File;
