import { App } from './app';
import { PORT } from './config/config';

const appInstance = new App();
const app = appInstance.getApp();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
