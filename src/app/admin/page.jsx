import { Suspense } from 'react';
import styles from './admin.module.css';
import { auth } from '@/lib/auth';
import AdminPosts from '@/components/adminPosts/AdminPosts';
import AdminPostForm from '@/components/adminPostForm/AdminPostForm';
import AdminUsers from '@/components/adminUsers/AdminUsers';
import AdminUserForm from '@/components/dminUserForm/AdminUserForm';

const AdminPage = async() => {
  const session = await auth()
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>loading...</div>}>
            <AdminPosts/>
          </Suspense>
        </div>
        <div className={styles.col}>         
            <AdminPostForm userId={session.user.id}/>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>loading...</div>}>
            <AdminUsers/>
          </Suspense>
        </div>
        <div className={styles.col}>
            <AdminUserForm/>
        </div>
      </div>
    </div>
  )
}

export default AdminPage