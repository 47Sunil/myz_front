import { requestInstance } from '../axiosConfig';
import { useMutation, useQueryClient } from 'react-query';
export async function useTemplatesData() {
  const res = await requestInstance.get('/templates/list');
  console.log(res, 'landing pages');
  return res;
}

export async function useLandingTablesData() {
  const res = await requestInstance.get('/landingpages');
  return res;
}

export async function useLandingPagesData() {
  const res = await requestInstance.get('/analytics/page');
  return res;
}

export async function useLandingPublishPatchMutation() {
  const queryClient = useQueryClient();
  return useMutation(
    async (id) => {
      const res = await requestInstance.patch(`landingpages/status`, id);
      return res;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('LandingTables');
      },
      onError: (error) => {
        console.log('error occured: ' + error.message);
      },
    }
  );
}
export async function useLandingPublishPutMutation() {
  const queryClient = useQueryClient();
  return useMutation(
    async (id) => {
      const res = await requestInstance.put(`landingpages/status`, id);
      return res;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('LandingTables');
      },
      onError: (error) => {
        console.log('error occured: ' + error.message);
      },
    }
  );
}

export function useLandingTablesMutation() {
  const queryClient = useQueryClient();
  return useMutation(
    async (id) => {
      const res = await requestInstance.delete(`landingpages/${id}`);
      return res;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('LandingTables');
      },
      onError: (error) => {
        console.log('error occured: ' + error.message);
      },
    }
  );
}
