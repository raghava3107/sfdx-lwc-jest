/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
export const subscribe = jest.fn().mockResolvedValue({});
export const unsubscribe = jest.fn().mockResolvedValue({});
export const onError = jest.fn().mockResolvedValue(jest.fn());
export const setDebugFlag = jest.fn().mockResolvedValue();
export const isEmpEnabled = jest.fn().mockResolvedValue();
