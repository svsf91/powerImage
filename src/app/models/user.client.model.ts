import {Facebook} from './facebook.client.model';
import {Website} from './website.client.model';

export class User {
  constructor(public username: string,
              public password: string,
              public _id?: string,
              public firstName?: string,
              public lastName?: string,
              public email?: string,
              public phone?: string,
              public dateCreated?: Date,
              public dateLastLogin?: string,
              public loginCount?: Number,
              public facebook?: Facebook,
              public is_admin?: boolean ) {}
}
