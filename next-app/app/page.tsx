import { ClientComponent } from "./client-component";
import styles from "./page.module.css";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Page: React.FC = async () => {
  await sleep(1000);

  return (
    <div>
      <h1 className={styles.h1}>Hello, Next.js custom Server!</h1>
      <p>
        This is a sample page with a custom server using Express and Next.js.
      </p>
      <ClientComponent />
    </div>
  );
};

export default Page;
