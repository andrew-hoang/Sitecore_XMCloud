import { useState } from 'react';
import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { signIn, signOut, useSession } from 'next-auth/react';
import { LoginProps } from './Login.props';

import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import LinkBase from '../../Link/LinkBase';
import { IconName } from 'src/enumerations/Icon.enum';
import Icon from '../../Icon/Icon';
import { Flex } from '@radix-ui/themes';

import cn from 'classnames';

const Login = (props: LoginProps) => {
  const { login, links } = props;

  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  const { data: session } = useSession();

  return session ? (
    <Flex className="relative">
      <button
        className={cn('link-underline flex items-center gap-2 py-1 font-bold', {
          'before:scale-x-100': isLoginOpen,
        })}
        onClick={() => setIsLoginOpen(!isLoginOpen)}
      >
        Welcome, {session?.user?.name}
        <Icon
          iconName={IconName.CHEVRON_DOWN}
          className={cn('h-[10px] w-[10px]', { 'rotate-180 transition-all': isLoginOpen })}
        />
      </button>
      {isLoginOpen && (
        <div className="absolute left-0 top-full z-10 flex w-full flex-col rounded-b-2 bg-gray-20 text-indigo-100">
          {links?.map((link, index) => (
            <LinkBase
              key={index}
              link={link}
              style={ButtonStyle.LINK}
              styleClasses="!font-regular py-2 text-indigo-100 justify-center"
            />
          ))}
          <button
            className="body-xs group py-2 font-regular hover:text-t-link-hover"
            onClick={() => signOut()}
          >
            <span className="link-underline group-hover:before:origin-[0] group-hover:before:scale-x-100">
              Logout
            </span>
          </button>
        </div>
      )}
    </Flex>
  ) : (
    // <LinkBase link={loginPage} style={ButtonStyle.LINK} styleClasses="!font-regular" />
    <button
      className="body-xs link-underline font-regular text-t-body hover:text-t-link-hover"
      onClick={() => signIn()}
    >
      Login
    </button>
  );
};

export default Login;
