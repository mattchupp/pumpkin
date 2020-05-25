import { useFetchUser } from '../utils/user';

export default function Layout({children}) = {

  const { user, loading } = useFetchUser();

  return (
    <div>
      <UserProvider value={{ user, loading }}>
        <p>You're In!</p>
        {children}
      </UserProvider>
    </div>
  )
}
