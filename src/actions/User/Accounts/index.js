// import { useNavigate } from 'react-router-dom';
import { reqInstanceImage, requestInstance } from '../../axiosConfig';
import { useQueryClient, useMutation } from 'react-query';
import { toast } from 'react-toastify';
// import { queryAllByTitle } from '@testing-library/react';

export function useUserUpdateMutation() {
  const queryClient = useQueryClient();
  return useMutation(
    async (data) => {
      try {
        // console.log(data);
        const res = await requestInstance.patch(`/users/updateUser`, {
          name: data.name,
          address: {
            address_1: data.address,
            billing_city: data.city,
            billing_country: data.country,
            billing_state: data.state,
            billing_postcode: data.pincode,
          },
        });
        // console.log(res);
        return res;
      } catch (error) {
        // console.log(error);
      }
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData('user', data);
        queryClient.invalidateQueries('user');
        window.location.reload();
      },
      onError: (error) => {
        // console.log('error occured: ' + error.message);
      },
    }
  );
}

export function useChangePasswordMutation() {
  // const queryClient = useQueryClient();
  return useMutation(async ({ oldPassword, newPassword }) => {
    const res = await requestInstance.patch('users/update-password', {
      oldPassword,
      newPassword,
    });
    return res;
  });
}

export const useImageUpload = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (data) => {
      try {
        const res = await reqInstanceImage.patch('/users/image', data);
        toast.success(res.message);
        return res;
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
    {
      onSuccess: (data) => {
        data && toast.success('Image uploaded successfully');
        data && queryClient.invalidateQueries('user');
      },
    }
  );
};
