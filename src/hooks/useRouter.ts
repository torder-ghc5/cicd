import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

interface PropsType {
  to: string;
  replace?: boolean;
  state?: unknown;
}

export const useRouter = () => {
  const navigate = useNavigate();

  return useMemo(() => {
    const push = ({ to, replace = false, ...rest }: PropsType) => {
      navigate(to, {
        replace,
        ...rest,
      });
    };

    const back = () => {
      navigate(-1);
    };

    return {
      push,
      back,
    };
  }, [navigate]);
};
