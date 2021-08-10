import styles from './ContactList.module.scss';

const ContactList = props => {
  return (
    <ul className={styles.list}>
      {props.contacts.map(({ name, number, id }) => {
        return (
          <li className={styles.list__item} key={id}>
            {name}: {number}
            <button
              type="button"
              className={styles.btn}
              onClick={() => props.onDeleteContacts(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// const ContactList = ({ contacts, onDeleteContacts }) => {
// return (
//   <ul className={styles.list}>
//     {contacts.map(({ id, name, number }) => {
//       return (
//         <li className={styles.list__item} key={id}>
//           {name}: {number}
//           <button
//             type="button"
//             className={styles.btn}
//             onClick={() => onDeleteContacts(id)}
//           >
//             Delete
//           </button>
//         </li>
//       );
//     })}
//   </ul>
// );
// };

export default ContactList;
