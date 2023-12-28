import { useState } from "react";

import Controller from "../../components/First/Controller";

function FirstPage() {
    const [count, setCount] = useState(0);

    return (
        <Controller count={count} setCount={setCount} />
    )
};

export default FirstPage;