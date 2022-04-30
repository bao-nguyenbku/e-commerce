import { useCookies } from 'react-cookie';

const useAuth = () => {
  const [cookies] = useCookies(['course-user']);
  return cookies['course-user'] ? true : false;
}

export default useAuth;