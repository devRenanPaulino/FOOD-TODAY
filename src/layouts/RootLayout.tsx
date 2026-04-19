import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header/Header';

export function RootLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}