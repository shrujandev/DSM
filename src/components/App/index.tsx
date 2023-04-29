import Loader from "components/Loader";
import Main from "components/Main";
import { useState } from "react";
import styles from "./styles.module.scss";
import * as React from "react";

const App = () => {
    const [isLoading, setLoading] = useState(false);

    return (
        <div className={styles["app"]}>
            <Loader isLoading={isLoading} />
            <Main isLoading={isLoading} setLoading={setLoading} />
        </div>
    );
};

export default App;