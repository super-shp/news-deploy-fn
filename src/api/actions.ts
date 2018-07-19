import { api } from '@/api/axiosInstance';
import { UPLOAD_IMG, GET_COLUMN } from '@/api/url';

export const uploadImg = async (file: File) => {
  const formData: FormData = new FormData();
  formData.append('uploadImg', file);
  const { data } = await api.post<string>(UPLOAD_IMG, formData);

  return data || '';
};

export const getColumn = () => {
  return api.post(GET_COLUMN);
};
