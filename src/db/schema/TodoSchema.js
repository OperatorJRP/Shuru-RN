import { SCHEMA } from '../constant';

// all possible types
// "bool"
// "int"
// "float"
// "double"
// "string"
// "date"
// "data"
// "mixed"
// "objectId"
// "string?" (nullable)
// "int?" (nullable)
// "Model"      (object link)
// "Model[]"    (list / array)
// map()        (dictionary)
// embedded     (nested object)

export const TodoSchema = {
  name: SCHEMA.TODO,
  primaryKey: 'id',
  properties: {
    id: 'string',
    task: 'string',
    done: { type: 'bool', default: false },
  },
};
