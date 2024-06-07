import { signIn, signOut, useSession } from 'next-auth/react';
import { LoginProps } from './Login.props';

import { Flex } from '@radix-ui/themes';
import LinkBase from '../../Link/LinkBase';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';

const MobileLogin = (props: LoginProps) => {
  const { links } = props;

  const { data: session } = useSession();

  return (
    <Flex direction="column" gap="4" className="pb-6 text-indigo-100">
      {/* Auth Links */}
      {session && <strong> Welcome, {session?.user?.name}</strong>}
      {links?.map((link, index) => (
        <LinkBase
          key={index}
          link={link}
          style={ButtonStyle.LINK}
          styleClasses="!font-regular focus:outline-indigo-100 text-indigo-100 max-w-max"
        />
      ))}
      {/* Login/Logout */}
      {session ? (
        <button
          className="body-xs group inline-flex max-w-max font-regular text-indigo-100 hover:text-t-link-hover focus:outline-indigo-100"
          onClick={() => signOut()}
        >
          <span className="link-underline group-hover:before:origin-[0] group-hover:before:scale-x-100">
            Logout
          </span>
        </button>
      ) : (
        <button
          className="max-w-max !font-regular text-indigo-100 focus:outline-indigo-100"
          onClick={() => signIn('')}
        >
          Login
        </button>
      )}
    </Flex>
  );
};

export default MobileLogin;
