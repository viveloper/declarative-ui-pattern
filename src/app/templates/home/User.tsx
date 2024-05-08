import axios from 'axios';
import useSWR from 'swr';

const fetchUsers = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};

export const User = () => {
  const { data } = useSWR('/api/users', fetchUsers, { suspense: true });

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
