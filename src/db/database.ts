import 'dotenv/config'
import { createNoORMConnection } from "jv-noorm";
import { AsyncLocalStorage } from 'node:async_hooks';

export const asyncLocalStorage = new AsyncLocalStorage();
export const db = createNoORMConnection(asyncLocalStorage);