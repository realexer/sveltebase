import {FirebaseConverter, FirebaseModel} from "./base/FirebaseModel";
import {FirebaseTranslatableModel} from "./base/FirebaseTranslatableModel";

class ChangelogModel extends FirebaseTranslatableModel
{
  constructor(data = {}, id = null)
  {
    super(data, id);
  }

  headline(lang)
  {
    return this.getTranslation(lang).headline;
  }

  details(lang)
  {
    return this.getTranslation(lang).details;
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