import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class BaseAxios {
  private instance: AxiosInstance;

  constructor(configInstance: AxiosRequestConfig) {
    this.instance = axios.create(configInstance);
  }

  getInstance() {
    return this.instance;
  }

  updateInstance() {
    return this.instance;
  }
}