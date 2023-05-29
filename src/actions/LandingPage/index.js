import { useNavigate } from 'react-router';
import { requestInstance } from '../axiosConfig';
import { useMutation, useQueryClient, useQuery } from 'react-query';

export async function useTemplatesData() {
  const res = await requestInstance.get('/templates/list');
  console.log(res, 'landing pages');
  return res;
}
// export async function useAllTemplatesData(pageNum) {
//   const res = await requestInstance.get(`/templates/list?page=${pageNum}`);
//   console.log(res, 'landing pages all');
//   return res;
// }
export function useAllTemplatesData(pageNum) {
  return useQuery(
    ['allTemplates', pageNum],
    async () => {
      const res = await requestInstance.get(`/templates/list?page=${pageNum}`);
      console.log(res, 'landing pages all');
      return res;
    },
    {
      keepPreviousData: true,
    }
  );
}

export async function useLandingTablesData() {
  const res = await requestInstance.get('/landingpages');
  console.log(res, 'landing  tables data');

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
        console.log(error);
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
  const navigate = useNavigate();
  return useMutation(
    async (pageData) => {
      pageData.price = Number(pageData.price);
      const res = await requestInstance.post('/funnels', pageData);
      return res;
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData('LandingPage', data);
        navigate(`/editor/${data?.data._id}`);
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
