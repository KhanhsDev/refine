"use client";

import dataProviderSimpleRest from "@refinedev/simple-rest";

const API_URL = "https://jsonplaceholder.typicode.com";

export const dataProvider = dataProviderSimpleRest(API_URL);
