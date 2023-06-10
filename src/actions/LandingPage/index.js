import { useNavigate } from 'react-router';
import { requestInstance } from '../axiosConfig';
import { useMutation, useQueryClient, useQuery } from 'react-query';
import { toast } from 'react-hot-toast';

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
// export function useAllTemplatesData(pageNum) {
//   const { data, isLoading, isPreviousData, isFetching } = useQuery(
//     ['allTemplates', pageNum],
//     async () => {
//       const res = await requestInstance.get(`/templates/list?page=${pageNum}`);
//       console.log(res, 'landing pages all dadadasdads');
//       return res;
//     },
//     {
//       keepPreviousData: true,
//     }
//   );
//   return { data, isLoading, isPreviousData, isFetching };
// }
export function useAllTemplatesData(pageNum) {
  const fetchAllTemplatesData = async () => {
    try {
      const res = await requestInstance.get(`/templates/list?page=${pageNum}`);
      console.log(res, 'landing pages all dadadasdads');
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading, isPreviousData, isFetching } = useQuery(
    ['allTemplates', pageNum],
    fetchAllTemplatesData,
    {
      keepPreviousData: true,
    }
  );

  return { data, isLoading, isPreviousData, isFetching };
}
export function useLandingTablesData(pageNum) {
  const fetchAllTablesData = async () => {
    try {
      const res = await requestInstance.get(`/landingpages/?page=${pageNum}`);
      console.log(res, 'landing pages all ASDDASDSAADSADSADS');
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading, isPreviousData, isFetching } = useQuery(
    ['LandingTablesAll', pageNum],
    fetchAllTablesData,
    {
      keepPreviousData: true,
    }
  );

  return { data, isLoading, isPreviousData, isFetching };
}
// export async function useLandingTablesData() {
//   const res = await requestInstance.get('/landingpages');
//   console.log(res, 'landing  tables data');

//   return res;
// }

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
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isFetching, mutateAsync, data } = useMutation(
    async ({ id, page }) => {
      try {
        const res = await requestInstance.delete(`landingpages/${id}`);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    {
      onMutate: async ({ id, page }) => {
        await queryClient.cancelQueries(['LandingTablesAll', page]);
        const prevData = queryClient.getQueryData(['LandingTablesAll', page]);
        queryClient.setQueryData(['LandingTablesAll', page], (oldData) => {
          console.log(oldData, 'old data');
          return oldData.data.filter((dataId) => dataId._id !== id);
        });
        return { prevData };
      },
      onSettled: () => {
        queryClient.invalidateQueries('LandingTablesAll');
      },
      onError: (error, id, context) => {
        queryClient.setQueryData('LandingTablesAll', context.prevData);
        toast.error(error.response.data.message);
      },
    }
  );
  return { mutateAsync };
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
        navigate(`/landingpages/editor/${data?.data._id}`);
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
