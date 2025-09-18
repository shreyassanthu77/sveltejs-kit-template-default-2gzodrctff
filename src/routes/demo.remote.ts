import { form } from '$app/server';
import * as z from 'zod';

export const demo = form(
  "unchecked",
  (data) => {
    console.log(data);
  }
);
