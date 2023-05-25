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
      try {
        const res = await requestInstance.delete(`landingpages/${id}`);
      return res;
      } catch (error) {
        console.log(error)
      }
      
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

export function useLandingPageMutation() {
  const queryClient = useQueryClient();
  return useMutation(
    async (pageData) => {
      const res = await requestInstance.post('/funnels', pageData);
      return res;
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData('LandingPage', data);
      },
      onError: (error) => {
        console.log('error occured: ' + error.message);
      },
    }
  );
}

export async function useLandingPaymentData() {
  const res = await requestInstance.get('/payments');
  return res;
}

export async function useLandingDomainData() {
  const res = await requestInstance.get('/domains');
  return res;
}
