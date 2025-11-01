
import Realm from "realm";
import { schemas } from "../schema";


let realmInstance = null;

export const openRealm = () => {
  if (realmInstance && !realmInstance.isClosed) return realmInstance;
  realmInstance = new Realm({
    schema: schemas,
    schemaVersion: 1,
  });
  return realmInstance;
};

export const closeRealm = () => {
  if (realmInstance && !realmInstance.isClosed) realmInstance.close();
  realmInstance = null;
};
