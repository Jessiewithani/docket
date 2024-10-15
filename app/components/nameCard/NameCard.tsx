import { InputValues } from "../../page";
import * as styles from './card.tailwind';

interface Props {
  savedUserInfo: InputValues;
}

const NameCard: React.FC<Props> = ({ savedUserInfo }) => {
  return (
    <div className={styles.cardContainer_tw}>
      <div className={styles.titleValue_tw}>
        <h3 className={styles.title_tw}>Username</h3>
        <div className={styles.userName_tw}>
          <h1>{`${savedUserInfo.firstName}`}</h1>
          <h1>{`${savedUserInfo.lastName}`}</h1>
        </div>
      </div>
      <div className={styles.titleValue_tw}>
        <h3 className={styles.title_tw}>Email</h3>
        <div>
          <h1>{`${savedUserInfo.email}`}</h1>
        </div>
      </div>
      <div className={styles.titleValue_tw}>
        <h3 className={styles.title_tw}>Date of birth</h3>
        <div>
          <h1>{`${savedUserInfo.birthdate}`}</h1>
        </div>

      </div>
      <div className={styles.titleValue_tw}>
        <h3 className={styles.title_tw}>Phone Number</h3>
        <div>
          <h1>{`${savedUserInfo.phoneNumber}`}</h1>
        </div>
      </div>
    </div>
  );
}

export default NameCard;