export const ERROR = {
  SUCCESS: 201,
  OPTION_FAILED: 100,
  UNKNOW: 999,
  OK: 200,
  AUTH_FAILED: 403,
};

export const ERROR_DETAIL = [
  {
    code: ERROR.AUTH_FAILED,
    msg: '认证失败',
  },
  {
    code: ERROR.OK,
    msg: 'OK',
  },
  {
    code: ERROR.SUCCESS,
    msg: '请求成功',
  },
  {
    code: ERROR.OPTION_FAILED,
    msg: '操作失败',
  },
  {
    code: ERROR.UNKNOW,
    msg: '未知错误',
  },
];
