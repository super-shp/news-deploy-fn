import { api } from './axiosInstance';
import { UPLOAD_IMG } from './url';

export const uploadImg = async (file: File) => {
  const formData: FormData = new FormData();
  formData.append('uploadImg', file);
  const { data } = await api.post<string>(UPLOAD_IMG, formData);

  return data || '';
};
