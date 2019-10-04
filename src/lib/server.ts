/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running Unclebob on port ${PORT}`);
});
