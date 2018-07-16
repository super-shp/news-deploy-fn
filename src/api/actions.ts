import { UPLOAD_IMG, api } from '@/api';

export const uploadImg = async (file: File) => {
  const formData: FormData = new FormData();
  formData.append('uploadImg', file);
  const { data } = await api.post<string>(UPLOAD_IMG, formData);

  return data || '';
};
