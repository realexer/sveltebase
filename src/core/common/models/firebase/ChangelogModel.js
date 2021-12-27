import {FirebaseConverter, FirebaseModel} from "./base/FirebaseModel";

class ChangelogModel extends FirebaseModel
{
  constructor(data = {}, id = null)
  {
    super(data, id);
  }

  get headline()
  {
    return this.data.headline;
  }

  get details()
  {
    return this.data.details;
  }

  get version()
  {
    return this.data.version;
  }

  static getConverter()
  {
    return new FirebaseConverter((data, id) => new ChangelogModel(data, id));
  }
}

export {ChangelogModel};