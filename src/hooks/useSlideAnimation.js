import { useQuery, useMutation } from 'react-query';

function useSlide() {
  const { data: isChanged, refetch } = useQuery('isChanged', () =>
    Promise.resolve(false)
  );
  const { mutate } = useMutation((value) => Promise.resolve(value), {
    onSuccess: () => refetch(),
  });
  function handleChange() {
    mutate(!isChanged);
  }

  return {
    isChanged,
    handleChange,
  };
}

export default useSlide;
