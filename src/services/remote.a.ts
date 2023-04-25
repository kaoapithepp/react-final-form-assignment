import { BaseAxios } from "./base.axios";

export class RemoteA extends BaseAxios {
  constructor() {
    super({ baseURL: import.meta.env.VITE_API_URL });
  }
}