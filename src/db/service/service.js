// src/db/service.js
import Realm from "realm";
import { openRealm } from "./realm"; 

const realm = openRealm();


export const getAll = (model, sortBy, descending = true) => {
  const col = realm.objects(model);
  return sortBy ? col.sorted(sortBy, descending) : col;
};

export const findById = (model, id) => realm.objectForPrimaryKey(model, id);


export const upsert = (model, data) => {
  realm.write(() => {
    realm.create(model, data, Realm.UpdateMode.Modified);
  });
};

export const upsertMany = (model, rows) => {
  realm.write(() => {
    rows.forEach(r => realm.create(model, r, Realm.UpdateMode.Modified));
  });
};

export const updateFields = (model, id, patch) => {
  realm.write(() => {
    const obj = realm.objectForPrimaryKey(model, id);
    if (!obj) return;
    Object.keys(patch).forEach(k => (obj[k] = patch[k]));
  });
};


export const deleteById = (model, id) => {
  realm.write(() => {
    const obj = realm.objectForPrimaryKey(model, id);
    if (obj) realm.delete(obj);
  });
};

export const deleteAll = (model) => {
  realm.write(() => {
    const all = realm.objects(model);
    realm.delete(all);
  });
};
