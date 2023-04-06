import React from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";
import styles from "../styles/Users.module.scss"

const Users = ({ users }) => {
  return (
    <MainContainer keywords="Пользователи">
      <h1>Список пользователей</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link className={styles.users} href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}
