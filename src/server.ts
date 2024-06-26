import mongoose from 'mongoose';
import config from './app/config';
import app from './app';


// console.log(config.databaseUrl, config.port);

async function main() {
  try {
        await mongoose.connect(config.databaseUrl as string);
        app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`)
        })
  } catch (err: any) {
    throw new Error(err);
    
  }
}
main()
