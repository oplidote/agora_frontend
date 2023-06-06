import Link from 'next/link';
import { useRouter } from 'next/router';

const Logo = () => {
  const router = useRouter();
  const {id} = router.query;
  return (
    <Link href={`/${id}`}>
      <a className="logo" style={{ position: 'relative' }}>
        <img src="/assets/img/logo.svg" alt="로고" style={{ width: '100%' }} />
      </a>
    </Link>
  );
};

export default Logo;
