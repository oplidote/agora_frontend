import { ReactElement, useContext, useState } from 'react';
import type { NextPageWithLayout } from './_app';
import { AppLayout } from 'components/layout';
import { Logo } from 'components/common';
import * as Login from 'styles/index.style';
import { useRouter } from 'next/router';
import axios from 'axios';

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;
  const onLogin = async () => {
    try {
      const res = await axios.post(`${BACKEND_URL}/login`, {
        identity: id,
        password: pw,
      });
      window.localStorage.setItem('user', res.data.id)
      if (res.data) {
        router.push({
          pathname: `/${res.data.id}`,
        });
      }
    } catch {}
  };
  return (
    <>
      <Logo />
      <Login.Content>
        <div className={id ? 'on' : ''}>
          <label htmlFor="id">
            {id ? (
              <img src="/assets/img/user-profile-02.svg" alt="로그인아이디이미지" />
            ) : (
              <img src="/assets/img/user-profile-01.svg" alt="로그인아이디이미지" />
            )}
          </label>
          <input type="text" id="id" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div className={pw ? 'on' : ''}>
          <label htmlFor="password">
            {pw ? (
              <img src="/assets/img/lock-05.svg" alt="로그인비밀번호이미지" />
            ) : (
              <img src="/assets/img/lock-04.svg" alt="로그인비밀번호이미지" />
            )}
          </label>
          <input
            type="password"
            name="password"
            value={pw}
            autoComplete="on"
            placeholder="비밀번호"
            onChange={(e) => setPw(e.target.value)}
          />
        </div>
        <button type="submit" className={!!id && !!pw ? 'on' : ''} onClick={onLogin}>
          <span>로그인</span>
        </button>
      </Login.Content>
    </>
  );
};
// (페이지 컴포넌트 이름).getLayout 으로 호출.
Page.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
